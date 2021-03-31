# Wrapper objects (deprecated)

This is a wrapper object which have utility methods on its prototype.

_We recommend to use utility types & functions if you don't have to use `instanceof` check and
you should avoid to expose this object as a public API of your package_  because:

1. `instanceof` checking might not work correctly if a user project has multiple versions of this package in their dependencies.
    - See ([#337](https://github.com/karen-irc/option-t/pull/337)).
2. We cannot extend more utility functions without increasing a code size.
    - Adding a property or a function to _prototype_ will increase a code size
      but it's hard to remove unused them if an user project does not use all of them.
      This means that we need hesitate to extend this package
      and it's hard to introduce a new found powerful pettern as a part of this.
    - We considered to relax this project by introduce `.pipe()` and operator functions model like rxjs.
      But its model would not match with this package because this package does not always return a wrapper object.
      Rather, we tend to add a way to unwrap a contained value.
      This mean we cannot keep an API signature simple or prevents some kinds of optimizations by JSVM.
      So we would not like to do this.


## [`ClassicOption<T>`](../src/ClassOption/ClassicOption.d.ts) (sometimes call `ClassOption` internally)

This can express that there are some values or none.

```javascript
import { createSome, createNone, } from 'option-t/esm/Option.mjs';
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

And this type is defined JSON representations if you serialize them by `JSON.stringify()`.
See [`OptionBase.prototype.toJSON()`](./src/Option.js).


## [`ClassicResult<T, E>`](./src/ClassResult/ClassicResult.d.ts) (sometimes call `ClassResult` internally)

This can express that there is some values or some error information.

```javascript
import { createOk, createErr, } from 'option-t/esm/Result.mjs';
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

## Idioms

## Unwrap, `undefined` or `null`

```typescript
import { Option } from 'option-t/esm/Option.mjs';

function unwrapOrUndefined<T>(option: Option<T>): T | undefined {
  const result: T | undefined = option.isSome ? option.unwrap() : undefined;
  return result;
}

function unwrapOrNull<T>(option: Option<T>): T | null {
  const result: T | null = option.isSome ? option.unwrap() : null;
  return result;
}
```


## Cast from `T`, `undefined`, or `null`

```typescript
import { Option } from 'option-t/esm/Option.mjs';

function fromNullable<T>(v: T | null | undefined): Option<T> {
    return (v === undefined || v === null) ? new None<T>() : new Some<T>(v);
}
```

The early version of this project had such APIs. But we obsolete it ([#17](https://github.com/karen-irc/option-t/issues/17)).
In JavaScript world, there are some style to represent "null". There is no defacto standard style.
So we decided that we should provide an explicit operation for interoperability with others.

Please define for your usecases.


## Cast to `Promise`

```typescript
import { Option } from 'option-t/esm/Option.mjs';

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
    return Promise.resolve(result);
  });
}
```

In previous version (~v0.17), we provide `Option<T>.asPromise()` utility method for this purpose.
Its methods always treats `None` as a rejected `Promise`.
But there are various cases which we would not like to cast to a Promise from an Optional type with single way,
there are various context to handle a `None` value.

Thus we don't provide a default way to cast to `Promise`. Please define a most suitable way to your project.

