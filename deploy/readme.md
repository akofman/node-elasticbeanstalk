# node-elasticbeanstalk-deploy [![Build Status](https://travis-ci.org/akofman/node-elasticbeanstalk-deploy.svg?branch=master)](https://travis-ci.org/akofman/node-elasticbeanstalk-deploy)

>


## Install

```
$ npm install --save node-elasticbeanstalk-deploy
```


## Usage

```js
const ebdeploy= require('node-elasticbeanstalk-deploy');

ebdeploy('unicorns', {
  src: 'https://github.com/akofman/unicorns.git'
}).then((result) => {
  console.log(result);
}).catch((err) => {
  console.log(err);
});
```


## API

### ebdeploy(environment, [options]) => `promise`

#### environment

Type: `string`

The Elastic Beanstalk environment to deploy.

#### options

##### src

Type: `string`<br>
Default: the current path where the cli is executed.

The location of the sources to deploy. This can be a local path or a git repository.
It is possible to specify a subfolder of a git repository using the following syntax:

`http://[repo url]:[subfolder path]`

The following example specifies to deploy the `www` subfolder of the unicorns repository:

`https://github.com/akofman/unicorns.git:www`


##### region

Type: `string`<br>

The region where your Elastic Beanstalk is deployed. This is an optional parameter because it should be defined from
the `AWS_REGION` env variable, but for some cases it could be convenient to override it.

#### promise

The returned promise give access to a sum-up of what is being deployed.

```
{
  ResponseMetadata: { RequestId: '493fef09-d272-11e6-82bb-5905e6f78c49' },
  EnvironmentName: 'unicorns',
  EnvironmentId: 'e-dsgevrv',
  ApplicationName: 'my-wonderful-app',
  VersionLabel: 'app-170104_123803',
  SolutionStackName: '64bit Amazon Linux 2016.09 v2.2.0 running PHP 7.0',
  Description: '',
  EndpointURL: 'awseb-e-a-AWSEVDoa-JPSDSSZHR-995528309.eu-west-1.elb.amazonaws.com',
  CNAME: 'unicorns.eu-west-1.elasticbeanstalk.com',
  DateCreated: 2016-11-07T17:00:27.248Z,
  DateUpdated: 2017-01-04T11:38:18.455Z,
  Status: 'Updating',
  AbortableOperationInProgress: true,
  Health: 'Grey',
  Tier: { Name: 'WebServer', Type: 'Standard', Version: '' },
  EnvironmentLinks: []
}
```

## CLI

```
$ npm install --global node-elasticbeanstalk-deploy
```

```
$ ebdeploy --help

  Usage
    ebdeploy [input]

  Options
    --src  the location of the sources to deploy. This could be a local location or a git repository. By default it will take the current path.
    --region the region where the Elastic Beanstalk is deployed.

  Examples
    $ ebdeploy unicorns
    $ ebdeploy unicorns --region eu-west-1
    $ ebdeploy unicorns --src ./ponies
    $ ebdeploy unicorns --src https://github.com/akofman/unicorns.git
    $ ebdeploy unicorns --src https://github.com/akofman/unicorns.git:www
```


## License

MIT © [Alexis Kofman](https://github.com/akofman)
