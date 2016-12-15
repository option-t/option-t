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

* [`Option<T>`](./src/Option.d.ts)
* [`Result<T, E>`](./src/Result.d.ts)

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
you can use `option instanceof OptionT.OptionBase` to check it.

But this way is not a tier-1 approach. __We recommend to use a interface and type system strongly__.

We export `OptionT.OptionBase` object to the type definition for TypeScript, but this is only for
the compatibility to cooperate with some libralies which are use `instanceof` checking
to work together with others in the pure JavaScript world.
Our basic stance is that __you should not use `OptionT.OptionBase`
and need not it in almost case in TypeScript or other static typed languages__.


#### `Some<T>`

This type represents that there are **some values `T`**.
If this value wraps `null`, it just means that there is a null value.


#### `None` (`None<T>`)

This type represents that there is **no value** explicitly.
It is just `None !== null`.



### How to represent same things without this library?


Of course, there some alternative approaches. We introduce them.


#### Use an object with destructuring assignment.

From ECMA262 6th, we can use _destructuring assignment_.
It provides a convinient way to handle/unwrap a value in an object.

```typescript
type Option<T> = {
  ok: boolean;
  value: T;
};

const { ok, value, } = getSomeValue();
if (ok) {
    // handle some value case
}
else {
    // handle none case.
}
```

This does same thing which is like a return value of `iterator.next()`.
But this approach cannot call instance methods on their returned values.
If you would like to handle a result more seemless, we recommend to use `option-t`.

On the other hand, this way (and `option-t`) need to allocate an object.
This allocation cost would be a cost.

In the future, a JavaScript runtime may make it more cheap,
but we don't recommend to use this approach if you requires a high performance computing extremely.


### Runtime Checking

This would be most popular way to handle a returned value in JavaScript.

```javascript
const value = getSome(); // this returns the actual value, otherwise `undefined`.
if (value !== undefined) {
    // handle some value
}
else {
    // handle none value
}
```

These approach don't need an extra object allocation like the above approach (and `option-t`).

And you need to think about "what is null type? including `undefined` or not?".
At least in ECMA262, There are some ways to represent "there're no value".

- `undefined` (e.g. `Map.prototype.get()`)
- `null` (e.g. `RegExp.prototype.exec()`)
- `-1` (e.g. `String.prototype.indexOf()`)


#### Use static type checker

Some static type checking tools provides a way to check nullability.

- Flowtype's semantics has [a built-in "Maybe" types](http://flowtype.org/docs/nullable-types.html),
- TypeScript has [a non-nullable type check](https://github.com/Microsoft/TypeScript/issues/185),
  - [From TypeScript compiler 1.8, you can represent `type Maybe<T> = T | void`.](http://www.typescriptlang.org/docs/release-notes/typescript-1.8.html#improved-unionintersection-type-inference)
- Google Closure Compiler also can check a non-nullable type via JSDoc style annotations in some compilation mode.

Flowtype and TypeScript checks with thier control flow analysis
(Sorry, I don't know the details of Google Closure Compiler's behavior).
Thus you can leave a runtime nullability checking in your code.

## License

[MIT License](./LICENSE.MIT)
