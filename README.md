# option-t

[![npm version](https://badge.fury.io/js/option-t.svg)](http://badge.fury.io/js/option-t)
[![Build Status (CircleCI)](https://circleci.com/gh/karen-irc/option-t.svg?style=svg)](https://circleci.com/gh/karen-irc/option-t)

* This library represents [Option type](http://en.wikipedia.org/wiki/Option_type) in ECMAScript.
    * You can sort "nullable" convention in your project.
* APIs are inspired by Rust Language's [`Option<T>`](https://doc.rust-lang.org/std/option/) and [`Result<T, E>`](https://doc.rust-lang.org/std/result/).
* TypeScript friendly APIs.
    * We recommend to use this with some static type systems like TypeScript.






## Motivation

This library provies these conventions for your project:

1. Uniform the expression of "none" value.
2. Uniform the way to carry error information instead of throwing an error.
3. Provide a utility function to handle _1_ and _2_ easily.

And Rust's [`std::option`](https://doc.rust-lang.org/std/option/) and [`std::result`](https://doc.rust-lang.org/std/result/) are suggestive to achive these conventions in practice. Thus this package is inspired by their design.


### Uniform the expression of "none" value.

In JavaScript world, there are many ways to express "there is no values".
At least in ECMA262, There are some ways to represent them:

* `undefined` (e.g. `Map.prototype.get()`)
* `null` (e.g. `RegExp.prototype.exec()`)
* `-1` (e.g. `String.prototype.indexOf()`)

In addition, ECMA262 intracts with [DOM binding](https://heycam.github.io/webidl/),  Node.js standtard modules, and others. There are additional various way to represetn "none" value.

In practice, we write some _glue code_ to tame their various ways in our project to uniform their expression style. This library contributes to uniform the convention to write it. 


### Uniform the way to carry error information instead of throwing an error.

Exception is useful but it has some terrible aspect.
It's easy that _try-catch_ statement be a jump instruction by large scoped _try-catch_ statement.
It's hard to find where throws an error, it's also hard to handle a penetrated exception from a lower layer.
Especially, exception mechanism is mis-match with an async programming model.
ECMA262 7th' _async-await relaxes the problem about an exception with async programming,
but there is still leave the problem about exception in traditional synchronous programming.
Furthermore, if you interact with `setTimeout()` and other async APIs built with callback style on event loop,
this problem faces to you.

And some async-push based paradigm like `Rx.Observable<T>` does not allow throw any expception
in their _Observable_ stream. If you throw an error in it, only _catch()_ operator can catch the error.
But a programmer would sometimes forget to use its operator. This means that throwing an Error in Rx's _Observable_
is pretty mis-matched action. _Promise<T>_ also has a similar problem.

And exception in ECMA262 is not friendly with static typing model
because ECMA262's _throw_ can throw not only `Error` but also other object type.

In Rust which is a programming language designed for parallel and seftiness, it treats errors in two category:

> Rust groups errors into two major categories: _recoverable_ and _unrecoverable_ errors.
> For a recoverable error, such as a file not found error,
> it’s reasonable to report the problem to the user and retry the operation.
> Unrecoverable errors are always symptoms of bugs, like trying to access a location beyond the end of an array.

This categorization is pretty useful to relax the problem about exception in ECMA262 which this section described.

Thus this library provides a way to express _recoverable_ error and also recommmends
to use throwing an error only if you intend throw an _unrecoverable_ error. 
This categarization introduces a convinient convention for you:
	
* If the code uses _throw_, you should be careful about _unrecoverable_ error.
* If the code returns `Result<T, E>` provided this library, then you should handle it correctly.

This convention is claer as error handling style and it's static typing friendly by _generics_.


### Provide a utility function to handle these uniformed expression easily.

Some static type checking tools also provide a way to check nullability and provide these conventions.

- Flowtype's semantics has [a built-in "Maybe" types](http://flowtype.org/docs/nullable-types.html),
- TypeScript has [a non-nullable type check](https://github.com/Microsoft/TypeScript/issues/185),
- Google Closure Compiler also can check a non-nullable type via JSDoc style annotations in some compilation mode.

Flowtype and TypeScript checks with thier control flow analysis
(Sorry, I don't know the details of Google Closure Compiler's behavior).

However, these compiler does not provide a way to handle their value easily like `map` or `flatMap` operations.

Rust's `std::option` and `std::result` has some utlity operation method to handle them easily.
This library also provides a convinient way to handle them and its way is inspired by Rust's ones.




## Installation

```sh
npm install --save option-t
// or
yarn add option-t --save
```






## Usage & APIs

* Utility functions for these types (TypeScript ready).
    * [`Nullable<T>` (`T | null`)](./src/Nullable/)
    * [`Undefinable<T>` (`T | undefined`)](./src/Undefinable/)
    * [`Maybe<T>` (`T | null | undefined`)](./src/Maybe/)
    * plain objects
        * [`Option<T>` (`{ ok: true; val: T } | { ok: false; }`)](./src/PlainOption/)
        * [`Result<T, E>` (`{ ok: true; val: T } | { ok: false; err: E; }`)](./src/PlainResult/)
* Wrapper objects ([__*deprecated*__](https://github.com/karen-irc/option-t/issues/459)).
    * [`Option<T>`](./src/Option.d.ts)
    * [`Result<T, E>`](./src/Result.d.ts)


### Utility functions for some types.

These are designed for more tree shaking friendly and more usable for JavaScript common world.

_We recommend to use these in almost case._

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


### Wrapper objects

This is a wrapper object which have utility methods on its prototype.

_We recommend to use utility types & functions if you don't have to use `instanceof` check and
you should avoid to expose this object as a public API of your package_ 
because `instanceof` checking might not work correctly if a user project has multiple version of this package in their dependencies.
See ([#337](https://github.com/karen-irc/option-t/pull/337)).


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

```javascript
import { createOk, createErr, } from 'option-t/esm/Result';
// or
const { createOk, createErr, } = require('option-t/cjs/Result');

// `Ok<T, E>`
const some = createOk(1);
console.log(some.isOk()); // true
console.log(some.unwrap()); // 1
console.log(none.unwrapErr()); // this will throw `Error`.

// `Err<T, E>`
const none = createErr('some error info');
console.log(none.isOk()); // false
console.log(none.unwrap()); // this will throw `Error`.
console.log(none.unwrapErr()); // 'some error info'
```


### How to import

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

- [Error Handling - Rust by Example](https://doc.rust-lang.org/rust-by-example/error.html)
- [Error Handling - The Rust Programming Language](https://doc.rust-lang.org/book/second-edition/ch09-00-error-handling.html)
- [`std::option` - Rust](https://doc.rust-lang.org/std/option/)
- [`std::result` - Rust](https://doc.rust-lang.org/std/result/)




## License

[MIT License](./LICENSE.MIT)






## Contribution

- Use [`yarn`](https://yarnpkg.com/) to install dev-dependency toolchains.
