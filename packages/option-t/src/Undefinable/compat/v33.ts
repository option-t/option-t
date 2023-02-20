/**
 *  @deprecated
 *  This might be removed in v35 or later.
 *  Please use `option-t/Undefinable` instead.
 */
export {
    type NotUndefined,
    type Undefinable,
    isNotUndefined,
    isUndefined,
    expectNotUndefined,
    unwrapUndefinable,
} from '../Undefinable.js';

export { andThenForUndefinable, andThenForUndefinable as andThen } from '../andThen.js';
export {
    andThenAsyncForUndefinable,
    andThenAsyncForUndefinable as andThenAsync,
} from '../andThenAsync.js';
export { inspectUndefinable, inspectUndefinable as inspect } from '../inspect.js';
export { mapForUndefinable, mapForUndefinable as map } from '../map.js';
export { mapAsyncForUndefinable, mapAsyncForUndefinable as mapAsync } from '../mapAsync.js';
export { mapOrForUndefinable, mapOrForUndefinable as mapOr } from '../mapOr.js';
export { mapOrAsyncForUndefinable, mapOrAsyncForUndefinable as mapOrAsync } from '../mapOrAsync.js';
export { mapOrElseForUndefinable, mapOrElseForUndefinable as mapOrElse } from '../mapOrElse.js';
export {
    mapOrElseAsyncForUndefinable,
    mapOrElseAsyncForUndefinable as mapOrElseAsync,
} from '../mapOrElseAsync.js';
export { orElseForUndefinable, orElseForUndefinable as orElse } from '../orElse.js';
export {
    orElseAsyncForUndefinable,
    orElseAsyncForUndefinable as orElseAsync,
} from '../orElseAsync.js';
export { unwrapOrFromUndefinable, unwrapOrFromUndefinable as unwrapOr } from '../unwrapOr.js';
export {
    unwrapOrElseFromUndefinable,
    unwrapOrElseFromUndefinable as unwrapOrElse,
} from '../unwrapOrElse.js';
export {
    unwrapOrElseAsyncFromUndefinable,
    unwrapOrElseAsyncFromUndefinable as unwrapOrElseAsync,
} from '../unwrapOrElseAsync.js';

import { expectNotUndefined, unwrapUndefinable } from '../Undefinable.js';

/**
 *  @deprecated
 *  This is an alias for backward compatibility.
 *  Please use {@link expectNotUndefined} instead.
 */
export const expect: typeof expectNotUndefined = expectNotUndefined;

/**
 *  @deprecated
 *  This is an alias for backward compatibility.
 *  Please use {@link unwrapUndefinable} instead.
 */
export const unwrap: typeof unwrapUndefinable = unwrapUndefinable;
