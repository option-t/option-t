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


### Cast `Option<T>` to `Promise`.

If you'd like to cast `Option<T>` to a `Promise` like object,
you can write a custom cast function or use `Option<T>.mapOrElse()`.

```typescript
// This functon treats `None` as a rejected `Promise`
function castToPromise1(option: Option<T>): Promise<T> {
  return option.mapOrElse(() => Promise.reject(), (v: T) => Promise.resolve(v));
}

// This function treats `None` as a `Promise` which is fulfilled with a tagged union object.
function castToPromise2(option: Option<T>): Promise<{ ok: boolean; value: T }> {
  const result = {
    ok: false,
    value: undefined,
  };

  return option.mapOrElse(() => {
    return Promise.resolve(result);
  }, (v: T) => {
    result.ok = true;
    result.value = v;
    return Promise.resolve(v);
  });
}
```

In previous version (~v0.17), we provide `Option<T>.asPromise()` utility method for this purpose.
Its methods always treats `None` as a rejected `Promise`.
But there are various cases which we would not like to cast to a Promise from an Optional type with single way,
there are various context to handle a `None` value.

Thus we don't provide a default way to cast to `Promise`. Please define a most suitable way to your project.


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


#### Use static type checker

Some static type checking tools provides a way to check nullability.

- Flowtype's semantics has [a built-in "Maybe" types](http://flowtype.org/docs/nullable-types.html),
- TypeScript has [a non-nullable type check](https://github.com/Microsoft/TypeScript/issues/185),
  - [From TypeScript compiler 1.8, you can represent `type Maybe<T> = T | void`.](http://www.typescriptlang.org/docs/release-notes/typescript-1.8.html#improved-unionintersection-type-inference)
- Google Closure Compiler also can check a non-nullable type via JSDoc style annotations in some compilation mode.


These approach don't need an extra object allocation like the above approach (and `option-t`).

However, they are just type information which is not in normal ECMA262 code.
And you need to think about "what is null type? including `undefined` or not".


## License

[MIT License](./LICENSE.MIT)
