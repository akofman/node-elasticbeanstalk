const tmp = require('tmp');
const Git = require('nodegit');
const archiver = require('archiver');
const fs = require('fs');
const dateFns = require('date-fns');
const AWS = require('aws-sdk');
const rimraf = require('rimraf');

module.exports = (environment, opts) => {
  return new Promise((resolve, reject) => {
    if (typeof environment !== 'string') {
      reject(new TypeError(`Expected a string, got ${typeof environment}`));
    }

    opts = opts || {};

    AWS.config = {
      region: opts.region || process.env.AWS_REGION
    };

    const eb = new AWS.ElasticBeanstalk();
    const s3 = new AWS.S3();

    eb.describeEnvironments({
      EnvironmentNames: [
        environment
      ]
    }, (err, data) => {
      if (err) {
        reject(err);
      }

      if (data.Environments.length) {
        const applicationName = data.Environments[0].ApplicationName;
        const applicationVersion = `app-${dateFns.format(new Date(), 'YYMMDD_HHmmss')}`;

        eb.describeApplicationVersions({
          ApplicationName: applicationName,
          VersionLabels: [ data.Environments[0].VersionLabel ]
        }, (err, data) => {
          if (err) {
            reject(err);
          }

          const tmpobj = tmp.dirSync();
          const gitOpts = {
            fetchOpts: {
              callbacks: {
                certificateCheck: () => 1,
                credentials: (url, userName) => Git.Cred.sshKeyFromAgent('git')
              }
            }
          };

          const repo = opts.src.split('.git:')[0];
          const folder = opts.src.split('.git:')[1];

          Git.Clone(repo, tmpobj.name, gitOpts).then((repo) => {
            const archive = archiver('zip', {});
            const archivePath = `${tmpobj.name}/${applicationName}.zip`;
            const writeStream = fs.createWriteStream(archivePath);

            archive.on('error', (err) => {
              throw new Error(`Path to archive not found ${err}`);
            });

            archive.pipe(writeStream);
            archive.directory(folder ? `${tmpobj.name}/${folder}` : tmpobj.name, '.').finalize();

            writeStream.on('close', () => {
              const s3Bucket = data.ApplicationVersions[0].SourceBundle.S3Bucket;
              const s3Key = `${applicationName}/${applicationVersion}.zip`;
              const readStream = fs.createReadStream(archivePath);

              s3.upload({Bucket: s3Bucket, Key: s3Key, Body: readStream}, (err, data) => {
                if (err) {
                  reject(err);
                }

                rimraf(tmpobj.name, (err) => {
                  if (err) {
                    reject(err);
                  }
                });

                eb.createApplicationVersion({
                  ApplicationName: applicationName,
                  Process: true,
                  SourceBundle: {
                    S3Bucket: s3Bucket,
                    S3Key: s3Key
                  },
                  VersionLabel: applicationVersion
                }, (err, data) => {
                  if (err) {
                    reject(err);
                  }

                  eb.updateEnvironment({
                    EnvironmentName: environment,
                    VersionLabel: applicationVersion
                  }, (err, data) => {
                    if (err) {
                      reject(err);
                    }
                    resolve(data);
                  });
                });
              });
            });
          }).catch((err) => {
            reject(err);
          });
        });
      } else {
        reject(new Error(`There is no existing environment named '${environment}'`));
      }
    });
  });
};
