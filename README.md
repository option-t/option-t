# OptionType [![Build Status](https://secure.travis-ci.org/saneyuki/option-t.js.svg?branch=master)](http://travis-ci.org/saneyuki/option-t.js)

* This library represents [Option type](http://en.wikipedia.org/wiki/Option_type) in ECMAScript.
* APIs are inspired by Rust Language's [`Option<T>`](https://doc.rust-lang.org/std/option/).


## Installation

```sh
npm install --save option-t
```


## Usage

```javascript
var OptionType = require('option-t').OptionType;

// `Some<T>`
var some = new OptionType(1);
console.log(some.isSome); // true
console.log(some.value); // 1

// `None`
var none = new OptionType();
console.log(some.isSome); // false
console.log(some.value); // undefined
```


## License

[MIT License](./LICENSE.MIT)
