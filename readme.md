# node-elasticbeanstalk [![Build Status](https://travis-ci.org/akofman/node-elasticbeanstalk.svg?branch=master)](https://travis-ci.org/akofman/node-elasticbeanstalk)

This is an opinionated bunch of Elastic Beanstalk tools.

As the official Elastic Beanstalk Command Line Interface (EB CLI), it helps you to
deploy and manage your AWS Elastic Beanstalk applications and environments from the command line.

It also provides a convenient API so that you can manage them programmatically.

This repository is managed as a monorepository and it's composed of the following npm packages:

| Package | Version |
|--------|-------|
| [`node-elasticbeanstalk-deploy`](/deploy) | [![npm](https://img.shields.io/npm/v/node-elasticbeanstalk-deploy.svg?maxAge=2592000)](https://www.npmjs.com/package/node-elasticbeanstalk-deploy) |
| [`node-elasticbeanstalk-list`](/list) | [![npm](https://img.shields.io/npm/v/node-elasticbeanstalk-list.svg?maxAge=2592000)](https://www.npmjs.com/package/node-elasticbeanstalk-list) |
| [`node-elasticbeanstalk-terminate`](/terminate) | [![npm](https://img.shields.io/npm/v/node-elasticbeanstalk-terminate.svg?maxAge=2592000)](https://www.npmjs.com/package/node-elasticbeanstalk-terminate) |

Of course in order to use these tools you need an AWS account and to configure your [credentials](http://docs.aws.amazon.com/general/latest/gr/aws-security-credentials.html).

## License

MIT © [Alexis Kofman](https://github.com/akofman)
