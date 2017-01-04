const AWS = require('aws-sdk');

module.exports = (environment, opts) => {
  opts = opts || {};

  AWS.config = {
    region: opts.region || process.env.AWS_REGION
  };

  const eb = new AWS.ElasticBeanstalk();

  return new Promise((resolve, reject) => {
    eb.terminateEnvironment({EnvironmentName: environment}, (err, data) => {
      if (err) {
        reject(err);
      };
      resolve();
    });
  });
};
