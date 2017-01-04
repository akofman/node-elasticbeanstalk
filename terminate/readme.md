# node-elasticbeanstalk-terminate

>


## Install

```
$ npm install --save node-elasticbeanstalk-terminate
```


## Usage

```js
const ebterminate = require('node-elasticbeanstalk-terminate');

ebdterminate('unicorns').then((result) => {
  console.log(result);
}).catch((err) => {
  console.log(err);
});
```


## API

### ebterminate(environment, [options]) => `promise`

#### environment

Type: `string`

The Elastic Beanstalk environment to terminate.

#### options

##### region

Type: `string`<br>

The region where your Elastic Beanstalk is deployed. This is an optional parameter because it should be defined from
the `AWS_REGION` env variable, but for some cases it could be convenient to override it.

#### promise

The returned promise give access to a sum-up of what is being terminated.

## CLI

```
$ npm install --global node-elasticbeanstalk-terminate
```

```
$ ebterminate --help

  Usage
    ebterminate [input]

  Options
    --region the region where the Elastic Beanstalk is deployed.

  Examples
    $ ebterminate unicorns
    $ ebterminate unicorns --region eu-west-1
```


## License

MIT © [Alexis Kofman](https://github.com/akofman)
