#!/usr/bin/env node
'use strict';

const list = require('./');
list().then((list) => {
  console.log(list);
}).catch((err) => {
  console.log(err);
});
