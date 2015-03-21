# option-t

[![npm version](https://badge.fury.io/js/option-t.svg)](http://badge.fury.io/js/option-t)
[![Build Status](https://secure.travis-ci.org/saneyuki/option-t.js.svg?branch=master)](http://travis-ci.org/saneyuki/option-t.js)

* This library represents [Option type](http://en.wikipedia.org/wiki/Option_type) in ECMAScript.
* APIs are inspired by Rust Language's [`Option<T>`](https://doc.rust-lang.org/std/option/).


## Installation

```sh
npm install --save option-t
```

## Usage

```javascript
var OptionT = require('option-t');

// `Some<T>`
var some = new OptionT.Some(1);
console.log(some.isSome); // true
console.log(some.unwrap()); // 1

// `None`
var none = new OptionT.None();
console.log(none.isSome); // false
console.log(none.unwrap()); // this will throw `Error`.
```

### JSON Representation

#### `Some<T>`

`new Some(1)` will be:

```json
{
    "is_some": true,
    "value": 1
}
```

#### `None`

`new None()` will be:

```json
{
    "is_some": false
}
```

## API

* [Type Definition](./option-t.d.ts)
* Implementation: See inline JSDoc.
  * [`Option<T>`](./src/OptionT.js)

## Semantics

This library represents [Option type](http://en.wikipedia.org/wiki/Option_type) in ECMAScript.
So this object will be the one of following states:

* `Some<T>`
  * `option instanceof OptionT.Some`
  * `option.isSome === true`.
* `None`
  * `option instanceof OptionT.None`
  * `option.isSome === false`.

### `Option<T>`

This type is a interface to represent `Option<T>`.
`Some<T>` and `None` must implement this `Option<T>` interface.

This is just interface. This is not exported to an environment
which has no interface feature as a part of its type system like TypeScript.

If you'd like to check whether the object `option` is `Option<T>` or not in such an environment,
you can use `option instanceof OptionT.OptionT` to check it.

But this way is not a tier-1 approach. We recommend to use a interface and type system strongly.
Thus we don't export `OptionT` object to the type definition for TypeScript.


#### `Some<T>`

This type represents that there are **some values `T`**.
If this value wraps `null`, it just means that there is a null value.


#### `None` (`None<T>`)

This type represents that there is **no value** explicitly.
It is just `None !== null`.


## License

[MIT License](./LICENSE.MIT)
