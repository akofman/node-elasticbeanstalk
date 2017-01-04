const AWS = require('aws-sdk');

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

    eb.terminateEnvironment({EnvironmentName: environment}, (err, data) => {
      if (err) {
        reject(err);
      };
      resolve(data);
    });
  });
};
