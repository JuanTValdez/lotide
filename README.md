# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs.

## Usage

**Install it:**

`npm install @juanvaldez/lotide`

**Require it:**

`const _ = require('@juanvaldez/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

- `assertArrayEqual(...)`: Test to determine if arrays are equal to be used with eqArray().
- `assertEqual(...)`: Test to determine if primitive types are equal.
- `eqArrays(...)`: Determine if arrays are equal.
- `head(...)`: Find head of array.
- `tail(...)`: Find tail of array.
- ` middle(...)`: Find middle most index(s) of an array. Returns two values if array is even in length
