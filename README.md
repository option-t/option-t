# option-t

[![npm](https://img.shields.io/npm/v/option-t.svg?style=flat)](https://www.npmjs.com/package/option-t)
[![CI Status (GitHub Actions)](https://github.com/karen-irc/option-t/workflows/CI/badge.svg)](https://github.com/karen-irc/option-t/actions?query=workflow%3ACI)

* **This library provides a toolkit for _nullable_ types in ECMAScript**.
    - `T | null`
    - `T | undefined`
    - `T | null | undefined`
    - [_Result type_](https://en.wikipedia.org/wiki/Result_type)
    - Tagged [_Option type_](https://en.wikipedia.org/wiki/Option_type)
* **APIs are inspired by Rust Language's [`Option<T>`](https://doc.rust-lang.org/std/option/) and [`Result<T, E>`](https://doc.rust-lang.org/std/result/)**.
* **This library helps to sort the "nullable" convention in your project**.
* **TypeScript friendly APIs**.
    * We recommend to use this with some static type systems like TypeScript.
* **Zero dependency**.
* **Tree shakable completely**.
* **ES Module fully compatbile**.
    * Support Node.js' ES Module.
    * Of course, we provides CommonJS too.



## Motivation

This library provides these conventions for your project:

1. Uniform an expression of _"none"_ value in JavaScript.
2. Uniform a way to carry error information instead of throwing an error by _result type_.
3. Provide various utility functions to handle _1_ and _2_ easily.

And Rust's [`std::option`](https://doc.rust-lang.org/std/option/) and [`std::result`](https://doc.rust-lang.org/std/result/) are
suggestive to achieve these conventions in practice. Thus this package is inspired by their design.


### Uniform the expression of "none" value.

In JavaScript world, there are many ways to express "there is no value".
At least in ECMA262, There are some ways to represent them:

* `undefined` (e.g. `Map.prototype.get()`)
* `null` (e.g. `RegExp.prototype.exec()`)
* `-1` (e.g. `String.prototype.indexOf()`)

In addition, ECMA262 interacts with [DOM binding](https://heycam.github.io/webidl/),
Node.js standard modules, and others. There are additional various ways to represent "none" value.

In practice, we write some _glue code_ to tame their various ways in our project to uniform their expression style.
This library contributes to uniform the convention to write it. 


### Uniform the way to carry error information instead of throwing an error.

_Exception_ is useful but it has some terrible aspects.
It's easy that _try-catch_ statement be a jump instruction by large scoped _try-catch_ statement.
It's hard to find where to throw an error, it's also hard to handle a penetrated exception from a lower layer.
Especially, _exception_ mechanism mis-matches with an async programming model.
ECMA262 7th' _async-await_ relaxes the problem about an exception with async programming,
but there is still the problem about exceptions in traditional synchronous programming.
Furthermore, if you interact with `setTimeout()` and other async APIs built with callback style on event loop,
this problem faces you.

And some async-push based paradigm like `Rx.Observable<T>` does not allow throw any exceptions
in their _Observable_ stream. If you throw an error in it, only _catch()_ operator can catch the error.
But a programmer would sometimes forget to use its operator. This means that throwing an Error in Rx's _Observable_
is pretty mis-matched action. _Promise<T>_ also has a similar problem.

And exception in ECMA262 is not friendly with static typing model
because ECMA262's _throw_ can throw not only `Error` but also other object types.

In Rust which is a programming language designed for parallel and seftiness, it treats errors in two category:

> Rust groups errors into two major categories: _recoverable_ and _unrecoverable_ errors.
> For a recoverable error, such as a file not found error,
> it’s reasonable to report the problem to the user and retry the operation.
> Unrecoverable errors are always symptoms of bugs, like trying to access a location beyond the end of an array.

This categorization is pretty useful to relax the problem about exception in ECMA262 which this section described.

Thus this library provides a way to express _recoverable_ error and also recommends
to use throwing an error only if you intend to throw an _unrecoverable_ error.
This categorization introduces a convenient convention for you:
	
* If the code uses _throw_, you should be careful about _unrecoverable_ error.
* If the code returns `Result<T, E>` provided this library, then you should handle it correctly.

This convention is clear as error handling style and it's static typing friendly by _generics_.


### Provide a utility function to handle these uniformed expression easily.

Some static type checking tools also provide a way to check nullability and provide these conventions.
 
- Flowtype's semantics has [a built-in "Maybe" types](https://flow.org/en/docs/types/maybe/),
- TypeScript has [a non-nullable type check](https://github.com/Microsoft/TypeScript/issues/185),
- Google Closure Compiler also can check a non-nullable type via JSDoc style annotations in some compilation mode.
 
Flowtype and TypeScript checks with their control flow analysis
(Sorry, I'm not sure about the details of Google Closure Compiler's behavior).
 
However, these compilers do not provide a way to handle their value easily like `map` or `flatMap` operations.
 
Rust's `std::option` and `std::result` have some utilities operation method to handle them easily.
This library also provides a convenient way to handle them and its way is inspired by Rust's ones.




## Installation

```sh
npm install --save option-t
// or
yarn add option-t --save
```






## Usage & APIs

All APIs are TypeScript ready.

* Utility functions for these types.
    * [`Nullable<T>` (`T | null`)](./src/Nullable/)
    * [`Undefinable<T>` (`T | undefined`)](./src/Undefinable/)
    * [`Maybe<T>` (`T | null | undefined`)](./src/Maybe/)
    * plain objects
        * [`Result<T, E>` (`{ ok: true; val: T } | { ok: false; err: E; }`)](./src/PlainResult/)
        * [`Option<T>` (`{ ok: true; val: T } | { ok: false; }`)](./src/PlainOption/) (_weak deprecated_)
* [Wrapper objects](./docs/wrapper_objects.md) ([__*deprecated*__](https://github.com/karen-irc/option-t/issues/459)).


### Utility functions for some types.

These are designed for more tree shaking friendly and more usable for JavaScript common world.

_We recommend to use these in almost case._

#### [`Nullable<T>` (`T | null`)](./src/Nullable/)

This can express a value of `T` type or `null`.

#### [`Undefinable<T>` (`T | undefined`)](./src/Undefinable/)

This can express a value of `T` type or `undefined`.

#### [`Maybe<T>` (`T | null | undefined`)](./src/Maybe/)

This can express a value of `T` type, `null`, or `undefined`.

#### [`Result<T, E>` (`{ ok: true; val: T } | { ok: false; err: E; }`)](./src/PlainResult/)

This can express that there is some values or some error information _as a plain object_.
This does not have any property method on its prototype. But this allows no including unused methods of them.


### How to import

**You can use [these paths](./docs/public_api_list.md) in both of CommonJS style and ES Module style.**

This package provides some sub directories to import various functions (e.g. `option-t/PlainResult`).
Each of them includes the same directory hierarchy with [under `src`/](./src/).

#### If your toolchain _does not_ support `exports` field in package.json...

We provides some backward compatible styles. __They are *deprecated* but we're no plan to drop them.__


_These styles are kept for backward compatibility. You should switch to `option-t/BarFoo` style path_.

##### Case: Your project is still use TypeScript compiler which lacks to support `moduleResolution=node16`.

Use `option-t/lib/**`.

This directory provides both of an ES Module and a CommonJS style module by [conditional exports](https://nodejs.org/api/packages.html#conditional-exports)
and host an actual `d.ts` file for legacy TypeScript compiler.

This is a most easy path for migrations (e.g. switch to `option-t/BarFoo` style, or switch to ES Module from CommonJS).


##### Case: Your project uses a classic bundler which does not support `exports` field.

you can use these paths:

- `option-t/cjs/**` (__*Deprecated*__)
   - This directory provides only commonjs style modules.
- `option-t/esm/**` (__*Deprecated*__)
   - This directory privides only ES Modules.


### Idioms

- You can see [some idioms](./docs/idiom/) of this library for the interoperability to JavaScript world.


### Deprecated APIs

We don't have any concrete plan to remove followings but do not recommend to use them in almost cases.

####  [`Option<T>` (`{ ok: true; val: T } | { ok: false; }`)](./src/PlainOption/) (weak deprecated)

**Basically, we don't recommend to use this type. Use `Nullable`, `Undefinable<T>`, or `Maybe<T>` to express an absence of a value instead. In JavaScript, they would cover almost usecases. Probably, you might not have to use this type.**

This can express that there is some values or none _as a plain object_.
This does not have any property method on its prototype. But this allows no including unused methods of them.


#### Wrapper objects (deprecated)

[See this guide](./docs/wrapper_objects.md).



### See also

These documents would provide more information about `Option<T>` and `Result<T, E>`.
These are written for Rust, but the essence is just same.

- [Error Handling - Rust by Example](https://doc.rust-lang.org/rust-by-example/error.html)
- [Error Handling - The Rust Programming Language](https://doc.rust-lang.org/book/second-edition/ch09-00-error-handling.html)
- [`std::option` - Rust](https://doc.rust-lang.org/std/option/)
- [`std::result` - Rust](https://doc.rust-lang.org/std/result/)




## License

[MIT License](./LICENSE.MIT)






## Contribution

- Use [`yarn`](https://yarnpkg.com/) to install dev-dependency toolchains.
