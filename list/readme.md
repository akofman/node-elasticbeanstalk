# node-elasticbeanstalk-list [![Build Status](https://travis-ci.org/akofman/node-elasticbeanstalk-list.svg?branch=master)](https://travis-ci.org/akofman/node-elasticbeanstalk-list)

>


## Install

```
$ npm install --save node-elasticbeanstalk-list
```


## Usage

```js
const eblist= require('node-elasticbeanstalk-list');

eblist().then((apps) => {
  console.log(apps);
});
```


## API

### eblist([options])

#### options

##### region

Type: `string`<br>

The region where your Elastic Beanstalk is deployed. This is an optional parameter because it should be defined from
the `AWS_REGION` env variable, but for some cases it could be convenient to override it.

## CLI

```
$ npm install --global node-elasticbeanstalk-list
```

```
$ eblist --help

  Usage
    eblist

  Options
    --region  the region where the Elastic Beanstalk is deployed

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
```


## License

MIT © [Alexis Kofman](https://github.com/akofman)
