/**
 *  @deprecated 37.1.0
 *
 *  Consider to use `Nullable<T>`, `Undefinable<T>`, or `Maybe<T>` to express an absence of a value.
 *  In JavaScript, they satisfy almost use cases. Probably, you might not have to use this type.
 *
 *  --------
 *
 *  This module provies that the Option type interface whose APIs are inspired
 *  by Rust's [`std::option::Option<T>`](https://doc.rust-lang.org/std/option/index.html).
 *
 *  We don't use a class to provides this module by these reason:
 *
 *  - Make treeshaking friendly.
 *      - Almost minifier cannot remove functions by default on `.prototype` even if they are unused.
 *  - Relax the incompatible problem by mixing multiple versions of this package
 *    in module dependency tree.
 *      - e.g. `instanceof` will be a problem. See ([#337](https://github.com/option-t/option-t/pull/337)).
 *
 *  And some operators might not return a new object and reuse the input
 *  to reduce an object allocation. Thus comparing _this `Option<T>`` is meaningless like a following code.
 *  This is by design because we think this pattern is meaningless.
 *
 *  ```typescript
 *      const a: Option<number> = createSome(1);
 *      const b: Option<number> = someOperator(a);
 *
 *      // Results of these comparison are undefined.
 *      a === b;
 *      Object.is(a, b);
 *  ```
 */
export {
    createNone,
    createSome,
    expectSome,
    isNone,
    isSome,
    unwrapSome,
    type None,
    type Option,
    type Some,
} from './option.js';

export { andThenForOption } from './and_then.js';
export { andThenAsyncForOption } from './and_then_async.js';
export { filterForOption } from './filter.js';
export { flattenForOption } from './flatten.js';
export { fromErrToOption, fromOkToOption } from './from_result.js';
export { inspectOption } from './inspect.js';
export { mapForOption } from './map.js';
export { mapAsyncForOption } from './map_async.js';
export { mapOrForOption } from './map_or.js';
export { mapOrAsyncForOption } from './map_or_async.js';
export { mapOrElseForOption } from './map_or_else.js';
export { mapOrElseAsyncForOption } from './map_or_else_async.js';
export { okOrForPlainOption } from './ok_or.js';
export { okOrElseForPlainOption } from './ok_or_else.js';
export { orElseForOption } from './or_else.js';
export { orElseAsyncForOption } from './or_else_async.js';
export { toNullableFromOption } from './to_nullable.js';
export { toUndefinableFromOption } from './to_undefinable.js';
export { transposeOptionToResult, transposeResultToOption } from './transpose.js';
export { unwrapOrForOption } from './unwrap_or.js';
export { unwrapOrElseForOption } from './unwrap_or_else.js';
export { unwrapOrElseAsyncForOption } from './unwrap_or_else_async.js';

// XXX:
//  We don't expose these itens that is unsafe operation.
//
//  - unsafe/as_mut
//  - unsafe/drop
//
// XXX:
//  _equals, we don't expose it by this due to that is provided for exception case
//
// XXX:
//  To keep a simple API set,
//  we don't expose APIs from here that takes multiple values to compose a data flow pipeline.
//  We may reconsider it if pipeline operator syntax proposal is advanced to the standard.
//  But please import them directly from their path at this moment.
//
//  - and
//  - or
//  - filter (This is exception because we shipped it for a long time)
//  - xor
