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
// We expose _core primitive_ directly.
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
} from './core/result.js';

export { andThenForResult } from './operators/and_then.js';
export { andThenAsyncForResult } from './operators/and_then_async.js';
export { flattenForResult } from './operators/flatten.js';
export { fromPromiseSettledResultToResult } from './operators/from_promise_settled_result.js';
export {
    inspectBothForResult,
    inspectErrForResult,
    inspectOkForResult,
} from './operators/inspect.js';
export { isErrAndForResult, isErrAndWithEnsureTypeForResult } from './operators/is_err_and.js';
export { isOkAndForResult, isOkAndWithEnsureTypeForResult } from './operators/is_ok_and.js';
export { mapForResult } from './operators/map.js';
export { mapAsyncForResult } from './operators/map_async.js';
export { mapErrForResult } from './operators/map_err.js';
export { mapErrAsyncForResult } from './operators/map_err_async.js';
export { mapOrForResult } from './operators/map_or.js';
export { mapOrAsyncForResult } from './operators/map_or_async.js';
export { mapOrElseForResult } from './operators/map_or_else.js';
export { mapOrElseAsyncForResult } from './operators/map_or_else_async.js';
export { orElseForResult } from './operators/or_else.js';
export { orElseAsyncForResult } from './operators/or_else_async.js';
export { toNullableFromErr, toNullableFromOk } from './operators/to_nullable.js';
export { toUndefinableFromErr, toUndefinableFromOk } from './operators/to_undefinable.js';
export { transposeResultToNullable, transposeResultToUndefinable } from './operators/transpose.js';
export { tryCatchIntoResult, tryCatchIntoResultWithEnsureError } from './operators/try_catch.js';
export {
    tryCatchIntoResultAsync,
    tryCatchIntoResultWithEnsureErrorAsync,
} from './operators/try_catch_async.js';
export { unwrapOrForResult } from './operators/unwrap_or.js';
export { unwrapOrElseForResult } from './operators/unwrap_or_else.js';
export { unwrapOrElseAsyncForResult } from './operators/unwrap_or_else_async.js';
export { unwrapOrThrowForResult } from './operators/unwrap_or_throw.js';

// We expose _operators_ (typically named as `~ForResult`) as bundled.
export * as ResultOperator from './internal/intermediate_operators.js';
