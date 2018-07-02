# option-t

[![npm version](https://badge.fury.io/js/option-t.svg)](http://badge.fury.io/js/option-t)
[![Build Status](https://secure.travis-ci.org/karen-irc/option-t.svg?branch=master)](http://travis-ci.org/karen-irc/option-t)

* This library represents [Option type](http://en.wikipedia.org/wiki/Option_type) in ECMAScript.
    * You can sort "nullable" convention in your project.
* APIs are inspired by Rust Language's [`Option<T>`](https://doc.rust-lang.org/std/option/).
* TypeScript friendly APIs.
    * We recommend to use this with some static type systems like TypeScript.


## Installation

```sh
npm install --save option-t
// or
yarn add option-t --save
```


## Usage & APIs

* Wrapper objects
    * [`Option<T>`](./src/Option.d.ts)
    * [`Result<T, E>`](./src/Result.d.ts)
* Utility functions for these types (TypeScript ready).
    * [`Nullable<T>` (`T | null`)](./src/Nullable/)
    * [`Undefinable<T>` (`T | undefined`)](./src/Undefinable/)
    * [`Maybe<T>` (`T | null | undefined`)](./src/Maybe/)
    * plain objects
        * [`Option<T>` (`{ ok: true; val: T } | { ok: false; }`)](./src/PlainOption/)
        * [`Result<T, E>` (`{ ok: true; val: T } | { ok: false; err: E; }`)](./src/PlainResult/)


### Wrapper objects

This is a wrapper object which have utility methods on its prototype.

#### [`Option<T>`](./src/Option.d.ts)

This can express that there is some values or none.

```javascript
import { createSome, createNone, } from 'option-t/esm/Option';
// or
const { createSome, createNone, } = require('option-t/cjs/Option');

// `Some<T>`
const some = createSome(1);
console.log(some.isSome); // true
console.log(some.unwrap()); // 1

// `None`
const none = createNone();
console.log(none.isSome); // false
console.log(none.unwrap()); // this will throw `Error`.
```

#### [`Result<T, E>`](./src/Result.d.ts)

This can express that there is some values or some error information.


### Utility functions for some types.

These are designed for more tree shaking friendly and more usable for JavaScript common world.

#### [`Nullable<T>` (`T | null`)](./src/Nullable/)

This can express a value of `T` type or `null`.

#### [`Undefinable<T>` (`T | undefined`)](./src/Undefinable/)

This can express a value of `T` type or `undefined`.

#### [`Maybe<T>` (`T | null | undefined`)](./src/Maybe/)

This can express a value of `T` type, `null`, or `undefined`.

####  [`Option<T>` (`{ ok: true; val: T } | { ok: false; }`)](./src/PlainOption/)

This can express that there is some values or none _as a plain object_.
This does not have any property method on its prototype. But this allows no including unused methods of them.

#### [`Result<T, E>` (`{ ok: true; val: T } | { ok: false; err: E; }`)](./src/PlainResult/)

This can express that there is some values or some error information _as a plain object_.
This does not have any property method on its prototype. But this allows no including unused methods of them.


## How to import

This package provides some sub directories to import various functions.
Each of them includes same directoty hierarchy with [under `src`/](./src/).

- `option-t/cjs`
    - This directory privides commonjs style modules with `.js` extension.
- `option-t/esm`
    - This directory privides ES modules with `.mjs` extension.
    - Currently, we provides them with `.js` extension for compatibility.
      However, we may only release `.mjs` for the future release.
      If you uses some module bundler (e.g. webpack or rollup), please add the config to prefer `.mjs` file.
- `option-t/lib`
    - This directory privides both of an ES module and a commonjs style module.
        - ES module has `.mjs` extension.
        - CommonJS module has `.js` extension.
    - This directory is provided for a bit tricky purpose.
        - For example, your project distributes a bundled file with some module bundlers that can handle ES module (e.g. rollup or webpack),
          But your project also use babel or typescript's downlevel trasnform to transform your code from ES module to Commonjs and
          your project runs unit-tests for transformed code with plain Node.js which only use `require()`.
    - _Please don't use this path if you don't have to use this_.


### JSON Representation

Some types defines [JSON representations](./docs/JSON.md) if you serialize them by `JSON.stringify()`.


### Idioms

- You can see [some idioms](./docs/IDIOM.md) of this library for the interoperability to JavaScript world.

### See also

These documents would provide more information about `Option<T>` and `Result<T, E>`.
These are written for Rust, but the essense is just same.

- [Error Handling - Rust by Example](http://rustbyexample.com/error.html)
- [Error Handling - The Rust Programming Language](https://doc.rust-lang.org/book/error-handling.html)
- [`std::option` - Rust](https://doc.rust-lang.org/std/option/)
- [`std::result` - Rust](https://doc.rust-lang.org/std/result/)


## Semantics

See [the document](./docs/SEMANTICS.md).



## License

[MIT License](./LICENSE.MIT)


## Contribution

- Use [`yarn`](https://yarnpkg.com/) to install dev-dependency toolchains.
