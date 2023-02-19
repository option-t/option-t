export {
    type NotNullOrUndefined,
    type Maybe,
    isNotNullOrUndefined,
    isNullOrUndefined,
    expectNotNullOrUndefined,
    unwrapMaybe,
} from './Maybe.js';
// XXX: `and()` operation is equivalent of `a && b` so we don't ship it by default set.
//export { andForMaybe as and } from './and.js';
export { andThenForMaybe, andThenForMaybe as andThen } from './andThen.js';
export { andThenAsyncForMaybe, andThenAsyncForMaybe as andThenAsync } from './andThenAsync.js';
export { inspectMaybe, inspectMaybe as inspect } from './inspect.js';
export { mapForMaybe, mapForMaybe as map } from './map.js';
export { mapAsyncForMaybe, mapAsyncForMaybe as mapAsync } from './mapAsync.js';
export { mapOrForMaybe, mapOrForMaybe as mapOr } from './mapOr.js';
export { mapOrAsyncForMaybe, mapOrAsyncForMaybe as mapOrAsync } from './mapOrAsync.js';
export { mapOrElseForMaybe, mapOrElseForMaybe as mapOrElse } from './mapOrElse.js';
export {
    mapOrElseAsyncForMaybe,
    mapOrElseAsyncForMaybe as mapOrElseAsync,
} from './mapOrElseAsync.js';
// XXX: `or()` operation is equivalent of `a || b` so we don't ship it by default set.
// export { orForMaybe as or } from './or.js';
export { orElseForMaybe, orElseForMaybe as orElse } from './orElse.js';
export { orElseAsyncForMaybe, orElseAsyncForMaybe as orElseAsync } from './orElseAsync.js';
export { unwrapOrFromMaybe, unwrapOrFromMaybe as unwrapOr } from './unwrapOr.js';
export { unwrapOrElseFromMaybe, unwrapOrElseFromMaybe as unwrapOrElse } from './unwrapOrElse.js';
export {
    unwrapOrElseAsyncFromMaybe,
    unwrapOrElseAsyncFromMaybe as unwrapOrElseAsync,
} from './unwrapOrElseAsync.js';

import {
    expectNotNullOrUndefined,
    unwrapMaybe,
    isNotNullOrUndefined,
    type NotNullOrUndefined,
} from './Maybe.js';

/**
 *  @deprecated
 *  Use {@link NotNullOrUndefined} instead.
 */
export type NotNullAndUndefined<T> = NotNullOrUndefined<T>;

/**
 *  @deprecated
 *  This is an alias for backward compatibility.
 *  Use {@link isNotNullOrUndefined} instead.
 */
export const isNotNullAndUndefined: typeof isNotNullOrUndefined = isNotNullOrUndefined;

/**
 *  @deprecated
 *  This is an alias for backward compatibility.
 *  Please use {@link expectNotNullOrUndefined} instead.
 */
export const expectNotNullAndUndefined: typeof expectNotNullOrUndefined = expectNotNullOrUndefined;

/**
 *  @deprecated
 *  This is an alias for backward compatibility.
 *  Please use {@link expectNotNullOrUndefined} instead.
 */
export const expect: typeof expectNotNullOrUndefined = expectNotNullOrUndefined;

/**
 *  @deprecated
 *  This is an alias for backward compatibility.
 *  Please use {@link unwrapMaybe} instead.
 */
export const unwrap: typeof unwrapMaybe = unwrapMaybe;
