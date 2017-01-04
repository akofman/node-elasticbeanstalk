#!/usr/bin/env node
'use strict';
const meow = require('meow');
const terminate = require('./');

const cli = meow(`
  Usage
    $ ebterminate [environment]

  Options
    --region  the region where the Elastic Beanstalk is deployed.

  Examples
    $ ebterminate unicorns
    $ ebterminate unicorns --region eu-west-1
`);

terminate(cli.input[0], {region: cli.flags.region}).then((result) => {
  console.log(result);
}).catch((err) => {
  console.log(err);
});
