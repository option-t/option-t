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
 *      - e.g. `instanceof` will be a problem. See ([#337](https://github.com/karen-irc/option-t/pull/337)).
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
export { type Result, type Ok, type Err, createOk, createErr, isOk, isErr } from './Result.js';

export { andForResult as and } from './and.js';
export { andThenForResult as andThen } from './andThen.js';
export { andThenAsyncForResult as andThenAsync } from './andThenAsync.js';
export { equalForResult as equal } from './equal.js';
export {
    expectOkForResult as expect,
    expectOkForResult as expectOk,
    expectErrForResult as expectErr,
    expectIsOk,
    expectIsErr,
} from './expect.js';
export { flattenForResult as flatten } from './flatten.js';
export {
    inspectOkOfResult as inspectOk,
    inspectErrOfResult as inspectErr,
    inspectBothOfResult as inspectBoth,
} from './inspect.js';
export { mapForResult as map } from './map.js';
export { mapAsyncForResult as mapAsync } from './mapAsync.js';
export { mapOrForResult as mapOr } from './mapOr.js';
export { mapOrAsyncForResult as mapOrAsync } from './mapOrAsync.js';
export { mapOrElseForResult as mapOrElse } from './mapOrElse.js';
export { mapOrElseAsyncForResult as mapOrElseAsync } from './mapOrElseAsync.js';
export { mapErrForResult as mapErr } from './mapErr.js';
export { mapErrAsyncForResult as mapErrAsync } from './mapErrAsync.js';
export { orForResult as or } from './or.js';
export { orElseForResult as orElse } from './orElse.js';
export { orElseAsyncForResult as orElseAsync } from './orElseAsync.js';
export { tapOk, tapErr, tapBoth } from './tap.js';
export { transposeForResult as transpose } from './transpose.js';
export { toOptionFromOk, toOptionFromErr } from './toOption.js';
export {
    unwrapOkFromResult as unwrap,
    unwrapOkFromResult as unwrapOk,
    unwrapErrFromResult as unwrapErr,
} from './unwrap.js';
export { unwrapOrFromResult as unwrapOr } from './unwrapOr.js';
export { unwrapOrElseFromResult as unwrapOrElse } from './unwrapOrElse.js';
export { unwrapOrElseAsyncFromResult as unwrapOrElseAsync } from './unwrapOrElseAsync.js';
