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

export { andForResult, andForResult as and } from '../and.js';
export { andThenForResult, andThenForResult as andThen } from '../andThen.js';
export { andThenAsyncForResult, andThenAsyncForResult as andThenAsync } from '../andThenAsync.js';
export { equalForResult, equalForResult as equal } from '../equal.js';
export { flattenForResult, flattenForResult as flatten } from '../flatten.js';
export {
    inspectOkOfResult,
    inspectErrOfResult,
    inspectBothOfResult,
    inspectOkOfResult as inspectOk,
    inspectErrOfResult as inspectErr,
    inspectBothOfResult as inspectBoth,
} from '../inspect.js';
export { mapForResult, mapForResult as map } from '../map.js';
export { mapAsyncForResult, mapAsyncForResult as mapAsync } from '../mapAsync.js';
export { mapOrForResult, mapOrForResult as mapOr } from '../mapOr.js';
export { mapOrAsyncForResult, mapOrAsyncForResult as mapOrAsync } from '../mapOrAsync.js';
export { mapOrElseForResult, mapOrElseForResult as mapOrElse } from '../mapOrElse.js';
export {
    mapOrElseAsyncForResult,
    mapOrElseAsyncForResult as mapOrElseAsync,
} from '../mapOrElseAsync.js';
export { mapErrForResult, mapErrForResult as mapErr } from '../mapErr.js';
export { mapErrAsyncForResult, mapErrAsyncForResult as mapErrAsync } from '../mapErrAsync.js';
export { orForResult, orForResult as or } from '../or.js';
export { orElseForResult, orElseForResult as orElse } from '../orElse.js';
export { orElseAsyncForResult, orElseAsyncForResult as orElseAsync } from '../orElseAsync.js';
export {
    transposeForResult,
    transposeNullableForResult,
    transposeUndefinableForResult,
    transposeForResult as transpose,
    transposeNullableForResult as transposeNullable,
    transposeUndefinableForResult as transposeUndefinable,
} from '../transpose.js';
export { unwrapOrFromResult, unwrapOrFromResult as unwrapOr } from '../unwrapOr.js';
export { unwrapOrElseFromResult, unwrapOrElseFromResult as unwrapOrElse } from '../unwrapOrElse.js';
export {
    unwrapOrElseAsyncFromResult,
    unwrapOrElseAsyncFromResult as unwrapOrElseAsync,
} from '../unwrapOrElseAsync.js';

import { expectOk, expectErr, unwrapOk } from '../Result.js';
import {
    toOptionFromOk as toOptionFromOkFn,
    toOptionFromErr as toOptionFromErrFn,
} from '../toOption.js';

/**
 *  @deprecated
 *  This is an alias for backward compatibility.
 *  Please use {@link expectOk} instead.
 */
export const expect: typeof expectOk = expectOk;

/**
 *  @deprecated
 *  This is an alias for backward compatibility.
 *  Please use {@link expectOk} instead.
 */
export const expectIsOk: typeof expectOk = expectOk;

/**
 *  @deprecated
 *  This is an alias for backward compatibility.
 *  Please use {@link expectErr} instead.
 */
export const expectIsErr: typeof expectErr = expectErr;

/**
 *  @deprecated
 *  This is an alias for backward compatibility.
 *  Please use {@link unwrapOk} instead.
 */
export const unwrap: typeof unwrapOk = unwrapOk;

/**
 *  @deprecated
 *  This is an alias for backward compatibility.
 *  __But this will be removed in the future by deprecating `PlainOption`.__
 *  Please import from `./PlainResult/toOption` instead.
 */
export const toOptionFromOk: typeof toOptionFromOkFn = toOptionFromOkFn;

/**
 *  @deprecated
 *  This is an alias for backward compatibility.
 *  __But this will be removed in the future by deprecating `PlainOption`.__
 *  Please import from `./PlainResult/toOption` instead.
 */
export const toOptionFromErr: typeof toOptionFromErrFn = toOptionFromErrFn;
