export {
    type NotNullAndUndefined,
    type Maybe,
    isNotNullAndUndefined,
    isNullOrUndefined,
    expectNotNullAndUndefined,
    unwrapMaybe,
} from './Maybe.js';
// XXX: `and()` operation is equivalent of `a && b` so we don't ship it by default set.
//export { andForMaybe as and } from './and.js';
export { andThenForMaybe as andThen } from './andThen.js';
export { andThenAsyncForMaybe as andThenAsync } from './andThenAsync.js';
export { inspectMaybe as inspect } from './inspect.js';
export { mapForMaybe as map } from './map.js';
export { mapAsyncForMaybe as mapAsync } from './mapAsync.js';
export { mapOrForMaybe as mapOr } from './mapOr.js';
export { mapOrAsyncForMaybe as mapOrAsync } from './mapOrAsync.js';
export { mapOrElseForMaybe as mapOrElse } from './mapOrElse.js';
export { mapOrElseAsyncForMaybe as mapOrElseAsync } from './mapOrElseAsync.js';
// XXX: `or()` operation is equivalent of `a || b` so we don't ship it by default set.
// export { orForMaybe as or } from './or.js';
export { orElseForMaybe as orElse } from './orElse.js';
export { orElseAsyncForMaybe as orElseAsync } from './orElseAsync.js';
export { unwrapOrFromMaybe as unwrapOr } from './unwrapOr.js';
export { unwrapOrElseFromMaybe as unwrapOrElse } from './unwrapOrElse.js';
export { unwrapOrElseAsyncFromMaybe as unwrapOrElseAsync } from './unwrapOrElseAsync.js';

import { expectNotNullAndUndefined, unwrapMaybe } from './Maybe.js';

/**
 *  @deprecated
 *  This is an alias for backward compatibility.
 *  Please use {@link expectNotNullAndUndefined} instead.
 */
export const expect: typeof expectNotNullAndUndefined = expectNotNullAndUndefined;

/**
 *  @deprecated
 *  This is an alias for backward compatibility.
 *  Please use {@link unwrapMaybe} instead.
 */
export const unwrap: typeof unwrapMaybe = unwrapMaybe;
