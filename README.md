# SIFT 4
[![npm](http://img.shields.io/npm/v/sift-distance.svg?style=flat-square)](https://npmjs.com/sift-distance)
[![npm downloads](http://img.shields.io/npm/dm/sift-distance.svg?style=flat-square)](https://npmjs.com/sift-distance)
[![build status](http://img.shields.io/travis/jhermsmeier/node-sift-distance.svg?style=flat-square)](https://travis-ci.org/jhermsmeier/node-sift-distance)

## Install via [npm](https://npmjs.com)

```sh
$ npm install sift-distance
```

**NOTE:** The major version of this module tracks the algorithm's version.
So, if you want to use SIFT 3, for example, you'd install `sift-distance@3.0`, for version 3B of the SIFT algorithm `sift-distance@3.1`, for version 4 `sift-distance@4.0` and so on.

## About

This implements the [SIFT4 extended version](http://siderite.blogspot.com/2014/11/super-fast-and-accurate-string-distance.html).

## API

#### SIFT( *a*, *b*, *[options]* )

- **String|Buffer|Array** `a`
- **String|Buffer|Array** `b`
- **Object** `options`
  - **Number** `maxOffset`
  - **Number** `maxDistance`
  - **Function** `tokenizer`
  - **Function** `tokenMatcher`
  - **Function** `matchEvaluator`
  - **Function** `lengthEvaluator`
  - **Function** `transpositionEvaluator`

### Options

#### Number `maxOffset`

The maximum largest common substring offset to be matched against one another. Defaults to `5`.

#### Number `maxDistance`

Distance at which the algorithm should stop computing the value and just exit (the values are too different anyway).

#### Function `tokenizer( value ) -> String|Array|Buffer`

- **Mixed** `value`

Function to transform strings into vectors of tokens.

#### Function `tokenMatcher( token1, token2 ) -> Boolean`

- **Mixed** `token1`
- **Mixed** `token2`

Function to determine if two tokens match each other (equal).

#### Function `matchEvaluator( token1, token2 ) -> Number`

- **Mixed** `token1`
- **Mixed** `token2`

Function to determine the way a token match should be added to the `lcs` (largest common substring). For example, a fuzzy match could be implemented.

#### Function `lengthEvaluator( lcs ) -> Number`

- **Number** `lcs`: largest common substring length

Function to determine the way the `lcs` value is added to the `lcss`. For example, longer continuous substrings could be awarded.

#### Function `transpositionEvaluator( transpositions, lcss ) -> Number`

- **Number** `transpositions`: number of transpositions
- **Number** `lcss`: largest common subsequence length

Function to determine the way the number of transpositions affects the final result.
