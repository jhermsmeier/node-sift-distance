# SIFT 3B
[![npm](http://img.shields.io/npm/v/sift-distance.svg?style=flat-quare)](https://npmjs.com/sift-distance)
[![npm downloads](http://img.shields.io/npm/dm/sift-distance.svg?style=flat-quare)](https://npmjs.com/sift-distance)
[![build status](http://img.shields.io/travis/jhermsmeier/node-sift-distance.svg?style=flat-quare)](https://travis-ci.org/jhermsmeier/node-sift-distance)

## Install via [npm](https://npmjs.com)

```sh
$ npm install sift-distance
```

**NOTE:** The major version of this module tracks the algorithm's version.
So, if you want to use SIFT 3, for example, you'd install `sift-distance@3.0`, for version 3B of the SIFT algorithm `sift-distance@3.1`, for version 4 `sift-distance@4.0` and so on.

## About

This implements the [SIFTversion 3B](http://siderite.blogspot.com/2007/04/super-fast-and-accurate-string-distance.html).

## API

#### SIFT( *a*, *b*, *[options]* )

- **String|Buffer|Array** `a`
- **String|Buffer|Array** `b`
- **Object** `options`
  - **Number** `maxOffset`
  - **Number** `maxDistance`

### Options

#### Number `maxOffset`

The maximum largest common substring offset to be matched against one another. Defaults to `5`.

#### Number `maxDistance`

Distance at which the algorithm should stop computing the value and just exit (the values are too different anyway).
