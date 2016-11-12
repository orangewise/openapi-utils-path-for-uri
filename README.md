# openapi-utils-path-for-uri

[![npm version][npm-badge]][npm-url]
[![Build Status][travis-badge]][travis-url]

Get an openApi path for an URI.

# Installation

```
npm install --save openapi-utils-path-for-uri
```

# Usage

Given the following openApi definition:

```
{
  "paths": {
    "/animals/cats": {
      "get": { }
    },
    "/animals/{species}/cats": {
      "get": { }
    },
    "/animals/{species}/dogs": {
      "get": { }
    },
    "/animals/{species}/dogs/{breed}": {
      "get": { }
    }
  }
}
```

You can retrieve the paths like this:

```javascript
var api = require('./your-openapi.json');
var openApiUtils = require('openapi-utils-path-for-uri');

var openApiPath1 = openApiUtils.pathForUri(api, '/animals/mammal/cats');
console.log(openApiPath1);
/*
/animals/{species}/cats
*/

var openApiPath2 = openApiUtils.pathForUri(api, '/animals/mammal/dogs/terrier');
console.log(openApiPath2);
/*
/animals/{species}/dogs/{breed}
*/

var openApiPath3 = openApiUtils.pathForUri(api, '/animals/cats');
console.log(openApiPath3);
/*
/animals/cats
*/


```


[npm-badge]: https://badge.fury.io/js/openapi-utils-path-for-uri.svg
[npm-url]: https://badge.fury.io/js/openapi-utils-path-for-uri
[travis-badge]: https://travis-ci.org/orangewise/openapi-utils-path-for-uri.svg?branch=master
[travis-url]: https://travis-ci.org/orangewise/openapi-utils-path-for-uri
