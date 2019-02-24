# `Option<T>`

## Unwrap, `undefined` or `null`

```typescript
import { Option } from 'option-t/lib/Option';

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
import { Option } from 'option-t/lib/Option';

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
import { Option } from 'option-t/lib/Option';

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

