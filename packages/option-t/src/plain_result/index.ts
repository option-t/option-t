/**
 *  This module provies that the Result/Either type interface whose APIs are inspired
 *  by Rust's [`std::result::Result<T, E>`](https://doc.rust-lang.org/std/result/index.html).
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
 *      const a: Result<number, string> = createOk(1);
 *      const b: Result<number, string> = someOperator(a);
 *
 *      // Results of these comparison are undefined.
 *      a === b;
 *      Object.is(a, b);
 *  ```
 */
export {
    createErr,
    createOk,
    expectErr,
    expectOk,
    isErr,
    isOk,
    unwrapErr,
    unwrapOk,
    type Err,
    type Ok,
    type Result,
} from './result.js';

export { andThenForResult } from './and_then.js';
export { andThenAsyncForResult } from './and_then_async.js';
export { flattenForResult } from './flatten.js';
export { fromPromiseSettledResultToResult } from './from_promise_settled_result.js';
export { inspectBothForResult, inspectErrForResult, inspectOkForResult } from './inspect.js';
export { isErrAndForResult, isErrAndWithEnsureTypeForResult } from './is_err_and.js';
export { isOkAndForResult, isOkAndWithEnsureTypeForResult } from './is_ok_and.js';
export { mapForResult } from './map.js';
export { mapAsyncForResult } from './map_async.js';
export { mapErrForResult } from './map_err.js';
export { mapErrAsyncForResult } from './map_err_async.js';
export { mapOrForResult } from './map_or.js';
export { mapOrAsyncForResult } from './map_or_async.js';
export { mapOrElseForResult } from './map_or_else.js';
export { mapOrElseAsyncForResult } from './map_or_else_async.js';
export { orElseForResult } from './or_else.js';
export { orElseAsyncForResult } from './or_else_async.js';
export { toNullableFromErr, toNullableFromOk } from './to_nullable.js';
export { toUndefinableFromErr, toUndefinableFromOk } from './to_undefinable.js';
export { transposeResultToNullable, transposeResultToUndefinable } from './transpose.js';
export { tryCatchIntoResult, tryCatchIntoResultWithEnsureError } from './try_catch.js';
export {
    tryCatchIntoResultAsync,
    tryCatchIntoResultWithEnsureErrorAsync,
} from './try_catch_async.js';
export { unwrapOrForResult } from './unwrap_or.js';
export { unwrapOrElseForResult } from './unwrap_or_else.js';
export { unwrapOrElseAsyncForResult } from './unwrap_or_else_async.js';
export { unwrapOrThrowForResult } from './unwrap_or_throw.js';

// XXX:
//  We don't expose these itens that is unsafe operation.
//
//  - as_mut
//  - drop
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
//  - filter
//  - xor
//  - zip
//  - zipWith
//  - zipWithAsync
//
// TODO: https://github.com/option-t/option-t/issues/2267
// `unwrap_or_throw`.
