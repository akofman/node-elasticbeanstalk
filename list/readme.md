# node-elasticbeanstalk-list

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
}).catch((err) => {
  console.log(err);
});
```


## API

### eblist([options]) => `promise`

#### options

##### region

Type: `string`<br>

The region where your Elastic Beanstalk is deployed. This is an optional parameter because it should be defined from
the `AWS_REGION` env variable, but for some cases it could be convenient to override it.

#### promise

The returned promise give access as a string to the list of applications and their environments.

```
Application Name:
  my-wonderful-app
Environments:
  unicorns
    currentVersion: app-161107_120345
    cname: unicorns.eu-west-1.elasticbeanstalk.com
    lastUpdate: Tue Nov 08 2016 10:20:31 GMT+0100 (CET)
    status: Ready
```

## CLI

```
$ npm install --global node-elasticbeanstalk-list
```

```
$ eblist --help

  Usage
    eblist

  Options
    --region  the region where the Elastic Beanstalk is deployed.

  Examples
    $ eblist
    $ eblist --region eu-west-1
```


## License

MIT © [Alexis Kofman](https://github.com/akofman)
