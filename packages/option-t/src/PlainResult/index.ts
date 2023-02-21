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
} from './Result.js';

export { andThenForResult } from './andThen.js';
export { andThenAsyncForResult } from './andThenAsync.js';
export { flattenForResult } from './flatten.js';
export { inspectOkOfResult, inspectErrOfResult, inspectBothOfResult } from './inspect.js';
export { mapForResult } from './map.js';
export { mapAsyncForResult } from './mapAsync.js';
export { mapOrForResult } from './mapOr.js';
export { mapOrAsyncForResult } from './mapOrAsync.js';
export { mapOrElseForResult } from './mapOrElse.js';
export { mapOrElseAsyncForResult } from './mapOrElseAsync.js';
export { mapErrForResult } from './mapErr.js';
export { mapErrAsyncForResult } from './mapErrAsync.js';
export { orElseForResult } from './orElse.js';
export { orElseAsyncForResult } from './orElseAsync.js';
export { transposeNullableForResult, transposeUndefinableForResult } from './transpose.js';
export { unwrapOrFromResult } from './unwrapOr.js';
export { unwrapOrElseFromResult } from './unwrapOrElse.js';
export { unwrapOrElseAsyncFromResult } from './unwrapOrElseAsync.js';
