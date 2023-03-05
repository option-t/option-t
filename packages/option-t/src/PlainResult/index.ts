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
    type Result,
    type Ok,
    type Err,
    createOk,
    createErr,
    isOk,
    isErr,
    unwrapOk,
    unwrapErr,
    expectOk,
    expectErr,
} from './result_.js';

export { andThenForResult } from './and_then.js';
export { andThenAsyncForResult } from './and_then_async.js';
export { flattenForResult } from './flatten.js';
export { inspectOkOfResult, inspectErrOfResult, inspectBothOfResult } from './inspect.js';
export { mapForResult } from './map.js';
export { mapAsyncForResult } from './map_async.js';
export { mapOrForResult } from './map_or.js';
export { mapOrAsyncForResult } from './map_or_async.js';
export { mapOrElseForResult } from './map_or_else.js';
export { mapOrElseAsyncForResult } from './map_or_else_async.js';
export { mapErrForResult } from './map_err.js';
export { mapErrAsyncForResult } from './map_err_async.js';
export { orElseForResult } from './or_else.js';
export { orElseAsyncForResult } from './or_else_async.js';
export { transposeNullableForResult, transposeUndefinableForResult } from './transpose.js';
export { unwrapOrFromResult } from './unwrap_or.js';
export { unwrapOrElseFromResult } from './unwrap_or_else.js';
export { unwrapOrElseAsyncFromResult } from './unwrap_or_else_async.js';
