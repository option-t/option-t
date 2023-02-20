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

import { expectOk, expectErr, unwrapOk } from './Result.js';
import {
    toOptionFromOk as toOptionFromOkFn,
    toOptionFromErr as toOptionFromErrFn,
} from './toOption.js';
import { andForResult as andForResultOriginal } from './and.js';
import { andThenForResult } from './andThen.js';
import { andThenAsyncForResult } from './andThenAsync.js';
import { equalForResult as equalForResultOriginal } from './equal.js';
import { flattenForResult } from './flatten.js';
import { inspectOkOfResult, inspectErrOfResult, inspectBothOfResult } from './inspect.js';
import { mapForResult } from './map.js';
import { mapAsyncForResult } from './mapAsync.js';
import { mapOrForResult } from './mapOr.js';
import { mapOrAsyncForResult } from './mapOrAsync.js';
import { mapOrElseForResult } from './mapOrElse.js';
import { mapOrElseAsyncForResult } from './mapOrElseAsync.js';
import { mapErrForResult } from './mapErr.js';
import { mapErrAsyncForResult } from './mapErrAsync.js';
import { orForResult as orForResultOriginal } from './or.js';
import { orElseForResult } from './orElse.js';
import { orElseAsyncForResult } from './orElseAsync.js';
import {
    transposeForResult as transposeForResultOriginal,
    transposeNullableForResult,
    transposeUndefinableForResult,
} from './transpose.js';
import { unwrapOrFromResult } from './unwrapOr.js';
import { unwrapOrElseFromResult } from './unwrapOrElse.js';
import { unwrapOrElseAsyncFromResult } from './unwrapOrElseAsync.js';

/**
 *  @deprecated
 *  This is an alias for backward compatibility.
 *  Please use {@link expectOk} instead.
 *  This might be removed in v34 or later.
 */
export const expect: typeof expectOk = expectOk;

/**
 *  @deprecated
 *  This is an alias for backward compatibility.
 *  Please use {@link expectOk} instead.
 *  This might be removed in v34 or later.
 */
export const expectIsOk: typeof expectOk = expectOk;

/**
 *  @deprecated
 *  This is an alias for backward compatibility.
 *  Please use {@link expectErr} instead.
 *  This might be removed in v34 or later.
 */
export const expectIsErr: typeof expectErr = expectErr;

/**
 *  @deprecated
 *  This is an alias for backward compatibility.
 *  Please use {@link unwrapOk} instead.
 *  This might be removed in v34 or later.
 */
export const unwrap: typeof unwrapOk = unwrapOk;

/**
 *  @deprecated
 *  This is an alias for backward compatibility.
 *  __But this will be removed in the future by deprecating `PlainOption`.__
 *  Please import from `./PlainResult/toOption` instead.
 *  This might be removed in v34 or later.
 */
export const toOptionFromOk: typeof toOptionFromOkFn = toOptionFromOkFn;

/**
 *  @deprecated
 *  This is an alias for backward compatibility.
 *  __But this will be removed in the future by deprecating `PlainOption`.__
 *  Please import from `./PlainResult/toOption` instead.
 *  This might be removed in v34 or later.
 */
export const toOptionFromErr: typeof toOptionFromErrFn = toOptionFromErrFn;

/**
 *  @deprecated
 *  Please use `andForResult` in `option-t/PlainResult/and`.
 *  This might be removed in v34 or later.
 */
export const and: typeof andForResultOriginal = andForResultOriginal;

/**
 *  @deprecated
 *  Please use `andForResult` in `option-t/PlainResult/and`.
 *  This might be removed in v34 or later.
 */
export const andForResult: typeof andForResultOriginal = andForResultOriginal;

/**
 *  @deprecated
 *  Please use {@link andThenForResult}
 *  This might be removed in v34 or later.
 */
export const andThen: typeof andThenForResult = andThenForResult;

/**
 *  @deprecated
 *  Please use {@link andThenAsyncForResult}
 *  This might be removed in v34 or later.
 */
export const andThenAsync: typeof andThenAsyncForResult = andThenAsyncForResult;

/**
 *  @deprecated
 *  Please use `equalForResult` in `option-t/PlainResult/equal`
 *  This might be removed in v34 or later.
 */
export const equal: typeof equalForResultOriginal = equalForResultOriginal;

/**
 *  @deprecated
 *  Please use `equalForResult` in `option-t/PlainResult/equal`
 *  This might be removed in v34 or later.
 */
export const equalForResult: typeof equalForResultOriginal = equalForResultOriginal;

/**
 *  @deprecated
 *  Please use {@link flattenForResult}
 *  This might be removed in v34 or later.
 */
export const flatten: typeof flattenForResult = flattenForResult;

/**
 *  @deprecated
 *  Please use {@link inspectOkOfResult}
 *  This might be removed in v34 or later.
 */
export const inspectOk: typeof inspectOkOfResult = inspectOkOfResult;

/**
 *  @deprecated
 *  Please use {@link inspectErrOfResult}
 *  This might be removed in v34 or later.
 */
export const inspectErr: typeof inspectErrOfResult = inspectErrOfResult;

/**
 *  @deprecated
 *  Please use {@link inspectBothOfResult}
 *  This might be removed in v34 or later.
 */
export const inspectBoth: typeof inspectBothOfResult = inspectBothOfResult;

/**
 *  @deprecated
 *  Please use {@link mapForResult}
 *  This might be removed in v34 or later.
 */
export const map: typeof mapForResult = mapForResult;

/**
 *  @deprecated
 *  Please use {@link mapAsyncForResult}
 *  This might be removed in v34 or later.
 */
export const mapAsync: typeof mapAsyncForResult = mapAsyncForResult;

/**
 *  @deprecated
 *  Please use {@link mapOrForResult}
 *  This might be removed in v34 or later.
 */
export const mapOr: typeof mapOrForResult = mapOrForResult;

/**
 *  @deprecated
 *  Please use {@link mapOrAsyncForResult}
 *  This might be removed in v34 or later.
 */
export const mapOrAsync: typeof mapOrAsyncForResult = mapOrAsyncForResult;

/**
 *  @deprecated
 *  Please use {@link mapOrElseForResult}
 *  This might be removed in v34 or later.
 */
export const mapOrElse: typeof mapOrElseForResult = mapOrElseForResult;

/**
 *  @deprecated
 *  Please use {@link mapOrElseAsyncForResult}
 *  This might be removed in v34 or later.
 */
export const mapOrElseAsync: typeof mapOrElseAsyncForResult = mapOrElseAsyncForResult;

/**
 *  @deprecated
 *  Please use {@link mapErrForResult}
 *  This might be removed in v34 or later.
 */
export const mapErr: typeof mapErrForResult = mapErrForResult;

/**
 *  @deprecated
 *  Please use {@link mapErrAsyncForResult}
 *  This might be removed in v34 or later.
 */
export const mapErrAsync: typeof mapErrAsyncForResult = mapErrAsyncForResult;

/**
 *  @deprecated
 *  Please use `orForResult` in `option-t/PlainResult/or`.
 *  This might be removed in v34 or later.
 */
export const or: typeof orForResultOriginal = orForResultOriginal;

/**
 *  @deprecated
 *  Please use `orForResult` in `option-t/PlainResult/or`.
 *  This might be removed in v34 or later.
 */
export const orForResult: typeof orForResultOriginal = orForResultOriginal;

/**
 *  @deprecated
 *  Please use {@link orElseForResult}
 *  This might be removed in v34 or later.
 */
export const orElse: typeof orElseForResult = orElseForResult;

/**
 *  @deprecated
 *  Please use {@link orElseAsyncForResult}
 *  This might be removed in v34 or later.
 */
export const orElseAsync: typeof orElseAsyncForResult = orElseAsyncForResult;

/**
 *  @deprecated
 *  This might be removed in v34 or later.
 */
export const transposeForResult: typeof transposeForResultOriginal = transposeForResultOriginal;

/**
 *  @deprecated
 *  Please use {@link transposeForResult}
 *  This might be removed in v34 or later.
 */
export const transpose: typeof transposeForResult = transposeForResult;

/**
 *  @deprecated
 *  Please use {@link transposeNullableForResult}
 *  This might be removed in v34 or later.
 */
export const transposeNullable: typeof transposeNullableForResult = transposeNullableForResult;

/**
 *  @deprecated
 *  Please use {@link transposeUndefinableForResult}
 *  This might be removed in v34 or later.
 */
export const transposeUndefinable: typeof transposeUndefinableForResult =
    transposeUndefinableForResult;

/**
 *  @deprecated
 *  Please use {@link unwrapOrFromResult}
 *  This might be removed in v34 or later.
 */
export const unwrapOr: typeof unwrapOrFromResult = unwrapOrFromResult;

/**
 *  @deprecated
 *  Please use {@link unwrapOrElseFromResult}
 *  This might be removed in v34 or later.
 */
export const unwrapOrElse: typeof unwrapOrElseFromResult = unwrapOrElseFromResult;

/**
 *  @deprecated
 *  Please use {@link unwrapOrElseAsyncFromResult}
 *  This might be removed in v34 or later.
 */
export const unwrapOrElseAsync: typeof unwrapOrElseAsyncFromResult = unwrapOrElseAsyncFromResult;
