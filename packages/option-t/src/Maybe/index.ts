export {
    type NotNullOrUndefined,
    type Maybe,
    isNotNullOrUndefined,
    isNullOrUndefined,
    expectNotNullOrUndefined,
    unwrapMaybe,
} from './Maybe.js';
// XXX: `and()` operation is equivalent of `a && b` so we don't ship it by default set.
//export { andForMaybe } from './and.js';
export { andThenForMaybe } from './andThen.js';
export { andThenAsyncForMaybe } from './andThenAsync.js';
export { inspectMaybe } from './inspect.js';
export { mapForMaybe } from './map.js';
export { mapAsyncForMaybe } from './mapAsync.js';
export { mapOrForMaybe } from './mapOr.js';
export { mapOrAsyncForMaybe } from './mapOrAsync.js';
export { mapOrElseForMaybe } from './mapOrElse.js';
export { mapOrElseAsyncForMaybe } from './mapOrElseAsync.js';
// XXX: `or()` operation is equivalent of `a || b` so we don't ship it by default set.
// export { orForMaybe } from './or.js';
export { orElseForMaybe } from './orElse.js';
export { orElseAsyncForMaybe } from './orElseAsync.js';
export { unwrapOrFromMaybe } from './unwrapOr.js';
export { unwrapOrElseFromMaybe } from './unwrapOrElse.js';
export { unwrapOrElseAsyncFromMaybe } from './unwrapOrElseAsync.js';

import {
    expectNotNullOrUndefined,
    unwrapMaybe,
    isNotNullOrUndefined,
    type NotNullOrUndefined,
} from './Maybe.js';
import { andThenForMaybe } from './andThen.js';
import { andThenAsyncForMaybe } from './andThenAsync.js';
import { inspectMaybe } from './inspect.js';
import { mapForMaybe } from './map.js';
import { mapAsyncForMaybe } from './mapAsync.js';
import { mapOrForMaybe } from './mapOr.js';
import { mapOrAsyncForMaybe } from './mapOrAsync.js';
import { mapOrElseForMaybe } from './mapOrElse.js';
import { mapOrElseAsyncForMaybe } from './mapOrElseAsync.js';
import { orElseForMaybe } from './orElse.js';
import { orElseAsyncForMaybe } from './orElseAsync.js';
import { unwrapOrFromMaybe } from './unwrapOr.js';
import { unwrapOrElseFromMaybe } from './unwrapOrElse.js';
import { unwrapOrElseAsyncFromMaybe } from './unwrapOrElseAsync.js';

/**
 *  @deprecated
 *  Use {@link NotNullOrUndefined} instead.
 *  This might be removed in v34 or later.
 */
export type NotNullAndUndefined<T> = NotNullOrUndefined<T>;

/**
 *  @deprecated
 *  This is an alias for backward compatibility.
 *  Use {@link isNotNullOrUndefined} instead.
 *  This might be removed in v34 or later.
 */
export const isNotNullAndUndefined: typeof isNotNullOrUndefined = isNotNullOrUndefined;

/**
 *  @deprecated
 *  This is an alias for backward compatibility.
 *  Please use {@link expectNotNullOrUndefined} instead.
 *  This might be removed in v34 or later.
 */
export const expectNotNullAndUndefined: typeof expectNotNullOrUndefined = expectNotNullOrUndefined;

/**
 *  @deprecated
 *  This is an alias for backward compatibility.
 *  Please use {@link expectNotNullOrUndefined} instead.
 *  This might be removed in v34 or later.
 */
export const expect: typeof expectNotNullOrUndefined = expectNotNullOrUndefined;

/**
 *  @deprecated
 *  This is an alias for backward compatibility.
 *  Please use {@link unwrapMaybe} instead.
 *  This might be removed in v34 or later.
 */
export const unwrap: typeof unwrapMaybe = unwrapMaybe;

/**
 *  @deprecated
 *  Please use {@link andThenForMaybe}
 *  This might be removed in v34 or later.
 */
export const andThen: typeof andThenForMaybe = andThenForMaybe;

/**
 *  @deprecated
 *  Please use {@link andThenAsyncForMaybe}
 *  This might be removed in v34 or later.
 */
export const andThenAsync: typeof andThenAsyncForMaybe = andThenAsyncForMaybe;

/**
 *  @deprecated
 *  Please use {@link inspectMaybe}
 *  This might be removed in v34 or later.
 */
export const inspect: typeof inspectMaybe = inspectMaybe;

/**
 *  @deprecated
 *  Please use {@link mapForMaybe}
 *  This might be removed in v34 or later.
 */
export const map: typeof mapForMaybe = mapForMaybe;

/**
 *  @deprecated
 *  Please use {@link mapAsyncForMaybe}
 *  This might be removed in v34 or later.
 */
export const mapAsync: typeof mapAsyncForMaybe = mapAsyncForMaybe;

/**
 *  @deprecated
 *  Please use {@link mapOrForMaybe}
 *  This might be removed in v34 or later.
 */
export const mapOr: typeof mapOrForMaybe = mapOrForMaybe;

/**
 *  @deprecated
 *  Please use {@link mapOrAsyncForMaybe}
 *  This might be removed in v34 or later.
 */
export const mapOrAsync: typeof mapOrAsyncForMaybe = mapOrAsyncForMaybe;

/**
 *  @deprecated
 *  Please use {@link mapOrElseForMaybe}
 *  This might be removed in v34 or later.
 */
export const mapOrElse: typeof mapOrElseForMaybe = mapOrElseForMaybe;

/**
 *  @deprecated
 *  Please use {@link mapOrElseAsyncForMaybe}
 *  This might be removed in v34 or later.
 */
export const mapOrElseAsync: typeof mapOrElseAsyncForMaybe = mapOrElseAsyncForMaybe;

/**
 *  @deprecated
 *  Please use {@link orElseForMaybe}
 *  This might be removed in v34 or later.
 */
export const orElse: typeof orElseForMaybe = orElseForMaybe;

/**
 *  @deprecated
 *  Please use {@link orElseAsyncForMaybe}
 *  This might be removed in v34 or later.
 */
export const orElseAsync: typeof orElseAsyncForMaybe = orElseAsyncForMaybe;

/**
 *  @deprecated
 *  Please use {@link unwrapOrFromMaybe}
 *  This might be removed in v34 or later.
 */
export const unwrapOr: typeof unwrapOrFromMaybe = unwrapOrFromMaybe;

/**
 *  @deprecated
 *  Please use {@link unwrapOrElseFromMaybe}
 *  This might be removed in v34 or later.
 */
export const unwrapOrElse: typeof unwrapOrElseFromMaybe = unwrapOrElseFromMaybe;

/**
 *  @deprecated
 *  Please use {@link unwrapOrElseAsyncFromMaybe}
 *  This might be removed in v34 or later.
 */
export const unwrapOrElseAsync: typeof unwrapOrElseAsyncFromMaybe = unwrapOrElseAsyncFromMaybe;
