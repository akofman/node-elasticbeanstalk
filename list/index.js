const AWS = require('aws-sdk');

const retrieveEnvironments = (eb, appName) => {
  return new Promise((resolve, reject) => {
    const appData = {
      appName: appName,
      environments: []
    };

    eb.describeEnvironments({ApplicationName: appName}, (err, data) => {
      if (err) {
        reject(err);
      } else {
        data.Environments.forEach((env) => {
          appData.environments.push({
            name: env.EnvironmentName,
            cname: env.CNAME,
            status: env.Status,
            lastUpdate: env.DateUpdated,
            deployedVersion: env.VersionLabel
          });
        });
        resolve(appData);
      }
    });
  });
};

module.exports = (opts) => {
  return new Promise((resolve, reject) => {
    opts = opts || {};

    AWS.config = {
      region: opts.region || process.env.AWS_REGION
    };

    const eb = new AWS.ElasticBeanstalk();

    eb.describeApplications({}, (err, data) => {
      if (err) {
        reject(err);
      }

      if (!data.Applications.length) {
        return '[None]';
      } else {
        const promises = [];
        let messages = '';

        data.Applications.forEach((app) => {
          promises.push(retrieveEnvironments(eb, app.ApplicationName));
        });

        Promise.all(promises).then((promise) => {
          promise.forEach((msg) => {
            let message = `\n Application Name: \n\t ${msg.appName} \n Environments:`;

            msg.environments.forEach((env) => {
              message = `${message} \n\t ${env.name} \n\t\t currentVersion: ${env.deployedVersion} \n\t\t cname: ${env.cname} \n\t\t lastUpdate: ${env.lastUpdate} \n\t\t status: ${env.status}`;
            });

            messages = `${messages} ${message} \n`;
          });
          resolve(messages);
        }).catch((err) => {
          reject(err);
        });
      }
    });
  });
};
