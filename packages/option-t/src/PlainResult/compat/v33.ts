/**
 *  @deprecated
 *  This might be removed in v35 or later.
 *  Please use `option-t/PlainResult` instead.
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
} from '../Result.js';

export { andThenForResult } from '../andThen.js';
export { andThenAsyncForResult } from '../andThenAsync.js';
export { flattenForResult } from '../flatten.js';
export { inspectOkOfResult, inspectErrOfResult, inspectBothOfResult } from '../inspect.js';
export { mapForResult } from '../map.js';
export { mapAsyncForResult } from '../mapAsync.js';
export { mapOrForResult } from '../mapOr.js';
export { mapOrAsyncForResult } from '../mapOrAsync.js';
export { mapOrElseForResult } from '../mapOrElse.js';
export { mapOrElseAsyncForResult } from '../mapOrElseAsync.js';
export { mapErrForResult } from '../mapErr.js';
export { mapErrAsyncForResult } from '../mapErrAsync.js';
export { orElseForResult } from '../orElse.js';
export { orElseAsyncForResult } from '../orElseAsync.js';
export { transposeNullableForResult, transposeUndefinableForResult } from '../transpose.js';
export { unwrapOrFromResult } from '../unwrapOr.js';
export { unwrapOrElseFromResult } from '../unwrapOrElse.js';
export { unwrapOrElseAsyncFromResult } from '../unwrapOrElseAsync.js';

import { expectOk, expectErr, unwrapOk } from '../Result.js';
import {
    toOptionFromOk as toOptionFromOkFn,
    toOptionFromErr as toOptionFromErrFn,
} from '../toOption.js';
import { andForResult as andForResultOriginal } from '../and.js';
import { andThenForResult } from '../andThen.js';
import { andThenAsyncForResult } from '../andThenAsync.js';
import { equalForResult as equalForResultOriginal } from '../equal.js';
import { flattenForResult } from '../flatten.js';
import { inspectOkOfResult, inspectErrOfResult, inspectBothOfResult } from '../inspect.js';
import { mapForResult } from '../map.js';
import { mapAsyncForResult } from '../mapAsync.js';
import { mapOrForResult } from '../mapOr.js';
import { mapOrAsyncForResult } from '../mapOrAsync.js';
import { mapOrElseForResult } from '../mapOrElse.js';
import { mapOrElseAsyncForResult } from '../mapOrElseAsync.js';
import { mapErrForResult } from '../mapErr.js';
import { mapErrAsyncForResult } from '../mapErrAsync.js';
import { orForResult as orForResultOriginal } from '../or.js';
import { orElseForResult } from '../orElse.js';
import { orElseAsyncForResult } from '../orElseAsync.js';
import {
    transposeForResult as transposeForResultOriginal,
    transposeNullableForResult,
    transposeUndefinableForResult,
} from '../transpose.js';
import { unwrapOrFromResult } from '../unwrapOr.js';
import { unwrapOrElseFromResult } from '../unwrapOrElse.js';
import { unwrapOrElseAsyncFromResult } from '../unwrapOrElseAsync.js';

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
