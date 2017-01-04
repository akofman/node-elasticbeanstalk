# node-elasticbeanstalk-deploy [![Build Status](https://travis-ci.org/akofman/node-elasticbeanstalk-deploy.svg?branch=master)](https://travis-ci.org/akofman/node-elasticbeanstalk-deploy)

>


## Install

```
$ npm install --save node-elasticbeanstalk-deploy
```


## Usage

```js
const ebdeploy= require('node-elasticbeanstalk-deploy');

ebdeploy('unicorns');
```


## API

### ebdeploy(environment, [options])

#### environment

Type: `string`

Lorem ipsum.

#### options

##### foo

Type: `boolean`<br>
Default: `false`

Lorem ipsum.


## CLI

```
$ npm install --global node-elasticbeanstalk-deploy
```

```
$ ebdeploy --help

  Usage
    ebdeploy [input]

  Options
    --foo  Lorem ipsum [Default: false]

  Examples
    $ <%= moduleName %>
    unicorns & rainbows
    $ <%= moduleName %> ponies
    ponies & rainbows
```


## License

MIT © [Alexis Kofman](https://github.com/akofman)
