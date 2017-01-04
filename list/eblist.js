#!/usr/bin/env node
'use strict';
const meow = require('meow');
const list = require('./');

const cli = meow(`
  Usage
    $ eblist

  Options
    --region  the region where the Elastic Beanstalk is deployed.

  Examples
    $ eblist
    Application Name:
      my-wonderful-app
    Environments:
      dev
        currentVersion: app-161107_120345
        cname: dev.eu-west-1.elasticbeanstalk.com
        lastUpdate: Tue Nov 08 2016 10:20:31 GMT+0100 (CET)
        status: Ready
`);

list({region: cli.flags.region}).then((list) => {
  console.log(list);
}).catch((err) => {
  console.log(err);
});
