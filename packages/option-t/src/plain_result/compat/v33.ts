/**
 *  @fileoverview
 *  This might be removed in v35 or later.
 *  Please use `option-t/PlainResult` instead.
 *
 *  @deprecated 34.0.0.
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
} from '../result.js';

export { andThenForResult } from '../and_then.js';
export { andThenAsyncForResult } from '../and_then_async.js';
export { flattenForResult } from '../flatten.js';
export { inspectOkOfResult, inspectErrOfResult, inspectBothOfResult } from '../inspect.js';
export { mapForResult } from '../map.js';
export { mapAsyncForResult } from '../map_async.js';
export { mapOrForResult } from '../map_or.js';
export { mapOrAsyncForResult } from '../map_or_async.js';
export { mapOrElseForResult } from '../map_or_else.js';
export { mapOrElseAsyncForResult } from '../map_or_else_async.js';
export { mapErrForResult } from '../map_err.js';
export { mapErrAsyncForResult } from '../map_err_async.js';
export { orElseForResult } from '../or_else.js';
export { orElseAsyncForResult } from '../or_else_async.js';
export { transposeNullableForResult, transposeUndefinableForResult } from '../transpose.js';
export { unwrapOrFromResult } from '../unwrap_or.js';
export { unwrapOrElseFromResult } from '../unwrap_or_else.js';
export { unwrapOrElseAsyncFromResult } from '../unwrap_or_else_async.js';

import { expectOk, expectErr, unwrapOk } from '../result.js';
import {
    toOptionFromOk as toOptionFromOkFn,
    toOptionFromErr as toOptionFromErrFn,
} from '../to_option.js';
import { andForResult as andForResultOriginal } from '../and.js';
import { andThenForResult } from '../and_then.js';
import { andThenAsyncForResult } from '../and_then_async.js';
import { equalForResult as equalForResultOriginal } from '../equal.js';
import { flattenForResult } from '../flatten.js';
import { inspectOkOfResult, inspectErrOfResult, inspectBothOfResult } from '../inspect.js';
import { mapForResult } from '../map.js';
import { mapAsyncForResult } from '../map_async.js';
import { mapOrForResult } from '../map_or.js';
import { mapOrAsyncForResult } from '../map_or_async.js';
import { mapOrElseForResult } from '../map_or_else.js';
import { mapOrElseAsyncForResult } from '../map_or_else_async.js';
import { mapErrForResult } from '../map_err.js';
import { mapErrAsyncForResult } from '../map_err_async.js';
import { orForResult as orForResultOriginal } from '../or.js';
import { orElseForResult } from '../or_else.js';
import { orElseAsyncForResult } from '../or_else_async.js';
import {
    transposeForResult as transposeForResultOriginal,
    transposeNullableForResult,
    transposeUndefinableForResult,
} from '../transpose.js';
import { unwrapOrFromResult } from '../unwrap_or.js';
import { unwrapOrElseFromResult } from '../unwrap_or_else.js';
import { unwrapOrElseAsyncFromResult } from '../unwrap_or_else_async.js';

/**
 *  @deprecated
 *  Please use {@link expectOk} in `option-t/PlainResult/Result` or `option-t/PlainResult`.
 */
export const expect: typeof expectOk = expectOk;

/**
 *  @deprecated
 *  Please use {@link expectOk} in `option-t/PlainResult/Result` or `option-t/PlainResult`.
 */
export const expectIsOk: typeof expectOk = expectOk;

/**
 *  @deprecated
 *  Please use {@link expectErr} in `option-t/PlainResult/Result` or `option-t/PlainResult`.
 */
export const expectIsErr: typeof expectErr = expectErr;

/**
 *  @deprecated
 *  Please use {@link unwrapOk} in `option-t/PlainResult/Result` or `option-t/PlainResult`.
 */
export const unwrap: typeof unwrapOk = unwrapOk;

/**
 *  @deprecated
 *  Please use {@link toOptionFromOkFn} in `option-t/PlainResult/toOption`.
 */
export const toOptionFromOk: typeof toOptionFromOkFn = toOptionFromOkFn;

/**
 *  @deprecated
 *  Please use {@link toOptionFromErrFn} in `option-t/PlainResult/toOption`.
 */
export const toOptionFromErr: typeof toOptionFromErrFn = toOptionFromErrFn;

/**
 *  @deprecated
 *  Please use `andForResult` in `option-t/PlainResult/and`.
 */
export const and: typeof andForResultOriginal = andForResultOriginal;

/**
 *  @deprecated
 *  Please use `andForResult` in `option-t/PlainResult/and`.
 */
export const andForResult: typeof andForResultOriginal = andForResultOriginal;

/**
 *  @deprecated
 *  Please use {@link andThenForResult} in `option-t/PlainResult/andThen`.
 */
export const andThen: typeof andThenForResult = andThenForResult;

/**
 *  @deprecated
 *  Please use {@link andThenAsyncForResult} in `option-t/PlainResult/andThenAsync`.
 */
export const andThenAsync: typeof andThenAsyncForResult = andThenAsyncForResult;

/**
 *  @deprecated
 *  Please use `equalForResult` in `option-t/PlainResult/equal`.
 */
export const equal: typeof equalForResultOriginal = equalForResultOriginal;

/**
 *  @deprecated
 *  Please use `equalForResult` in `option-t/PlainResult/equal`.
 */
export const equalForResult: typeof equalForResultOriginal = equalForResultOriginal;

/**
 *  @deprecated
 *  Please use {@link flattenForResult} in `option-t/PlainResult/flatten` or `option-t/PlainResult`.
 */
export const flatten: typeof flattenForResult = flattenForResult;

/**
 *  @deprecated
 *  Please use {@link inspectOkOfResult} in `option-t/PlainResult/inspect` or `option-t/PlainResult`.
 */
export const inspectOk: typeof inspectOkOfResult = inspectOkOfResult;

/**
 *  @deprecated
 *  Please use {@link inspectErrOfResult} in `option-t/PlainResult/inspect` or `option-t/PlainResult`.
 */
export const inspectErr: typeof inspectErrOfResult = inspectErrOfResult;

/**
 *  @deprecated
 *  Please use {@link inspectBothOfResult} in `option-t/PlainResult/inspect` or `option-t/PlainResult`.
 */
export const inspectBoth: typeof inspectBothOfResult = inspectBothOfResult;

/**
 *  @deprecated
 *  Please use {@link mapForResult} in `option-t/PlainResult/map` or `option-t/PlainResult`.
 */
export const map: typeof mapForResult = mapForResult;

/**
 *  @deprecated
 *  Please use {@link mapAsyncForResult} in `option-t/PlainResult/mapAsync` or `option-t/PlainResult`.
 */
export const mapAsync: typeof mapAsyncForResult = mapAsyncForResult;

/**
 *  @deprecated
 *  Please use {@link mapOrForResult} in `option-t/PlainResult/mapOr` or `option-t/PlainResult`.
 */
export const mapOr: typeof mapOrForResult = mapOrForResult;

/**
 *  @deprecated
 *  Please use {@link mapOrAsyncForResult} in `option-t/PlainResult/mapOrAsync` or `option-t/PlainResult`.
 */
export const mapOrAsync: typeof mapOrAsyncForResult = mapOrAsyncForResult;

/**
 *  @deprecated
 *  Please use {@link mapOrElseForResult} in `option-t/PlainResult/mapOrElse` or `option-t/PlainResult`.
 */
export const mapOrElse: typeof mapOrElseForResult = mapOrElseForResult;

/**
 *  @deprecated
 *  Please use {@link mapOrElseAsyncForResult} in `option-t/PlainResult/mapOrElseAsync` or `option-t/PlainResult`.
 */
export const mapOrElseAsync: typeof mapOrElseAsyncForResult = mapOrElseAsyncForResult;

/**
 *  @deprecated
 *  Please use {@link mapErrForResult} in `option-t/PlainResult/mapErr` or `option-t/PlainResult`.
 */
export const mapErr: typeof mapErrForResult = mapErrForResult;

/**
 *  @deprecated
 *  Please use {@link mapErrAsyncForResult} in `option-t/PlainResult/mapErrAsync` or `option-t/PlainResult`.
 */
export const mapErrAsync: typeof mapErrAsyncForResult = mapErrAsyncForResult;

/**
 *  @deprecated
 *  Please use `orForResult` in `option-t/PlainResult/or`.
 */
export const or: typeof orForResultOriginal = orForResultOriginal;

/**
 *  @deprecated
 *  Please use `orForResult` in `option-t/PlainResult/or`.
 */
export const orForResult: typeof orForResultOriginal = orForResultOriginal;

/**
 *  @deprecated
 *  Please use {@link orElseForResult} in `option-t/PlainResult/orElse` or `option-t/PlainResult`.
 */
export const orElse: typeof orElseForResult = orElseForResult;

/**
 *  @deprecated
 *  Please use {@link orElseAsyncForResult} in `option-t/PlainResult/orElseAsync` or `option-t/PlainResult`.
 */
export const orElseAsync: typeof orElseAsyncForResult = orElseAsyncForResult;

/**
 *  @deprecated
 *  Please use {@link transposeForResult} in `option-t/PlainResult/transpose`.
 */
export const transposeForResult: typeof transposeForResultOriginal = transposeForResultOriginal;

/**
 *  @deprecated
 *  Please use {@link transposeForResult} in `option-t/PlainResult/transpose`.
 */
export const transpose: typeof transposeForResult = transposeForResult;

/**
 *  @deprecated
 *  Please use {@link transposeNullableForResult} in `option-t/PlainResult/transpose` or `option-t/PlainResult`.
 */
export const transposeNullable: typeof transposeNullableForResult = transposeNullableForResult;

/**
 *  @deprecated
 *  Please use {@link transposeUndefinableForResult} in `option-t/PlainResult/transpose` or `option-t/PlainResult`.
 */
export const transposeUndefinable: typeof transposeUndefinableForResult =
    transposeUndefinableForResult;

/**
 *  @deprecated
 *  Please use {@link unwrapOrFromResult} in `option-t/PlainResult/unwrapOr` or `option-t/PlainResult`.
 */
export const unwrapOr: typeof unwrapOrFromResult = unwrapOrFromResult;

/**
 *  @deprecated
 *  Please use {@link unwrapOrElseFromResult} in `option-t/PlainResult/unwrapOrElse` or `option-t/PlainResult`.
 */
export const unwrapOrElse: typeof unwrapOrElseFromResult = unwrapOrElseFromResult;

/**
 *  @deprecated
 *  Please use {@link unwrapOrElseAsyncFromResult} in `option-t/PlainResult/unwrapOrElseAsync` or `option-t/PlainResult`.
 */
export const unwrapOrElseAsync: typeof unwrapOrElseAsyncFromResult = unwrapOrElseAsyncFromResult;
