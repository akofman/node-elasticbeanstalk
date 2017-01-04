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
    $ eblist --region eu-west-1
`);

list({region: cli.flags.region}).then((list) => {
  console.log(list);
}).catch((err) => {
  console.log(err);
});
