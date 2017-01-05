#!/usr/bin/env node
'use strict';
const meow = require('meow');
const deploy = require('./');

const cli = meow(`
  Usage
    $ ebdeploy [environment]

  Options
    --src  the location of the sources to deploy. This could be a local location or a git repository. By default it will take the current path.
    --region  the region where the Elastic Beanstalk is deployed.

  Examples
    $ ebdeploy unicorns
    $ ebdeploy unicorns --src ./ponies
    $ ebdeploy unicorns --src https://github.com/akofman/unicorns.git
    $ ebdeploy unicorns --src https://github.com/akofman/unicorns.git:www
`);

deploy(cli.input[0], {src: cli.flags.src, region: cli.flags.region}).then((result) => {
  console.log(result);
}).catch((err) => {
  console.log(err);
});
