export {
    type NotUndefined,
    type Undefinable,
    isNotUndefined,
    isUndefined,
    expectNotUndefined,
    unwrapUndefinable,
} from './Undefinable.js';
// XXX: `and()` operation is equivalent of `a && b` so we don't ship it by default set.
//export { andForUndefinable } from './and.js';
export { andThenForUndefinable } from './andThen.js';
export { andThenAsyncForUndefinable } from './andThenAsync.js';
export { inspectUndefinable } from './inspect.js';
export { mapForUndefinable } from './map.js';
export { mapAsyncForUndefinable } from './mapAsync.js';
export { mapOrForUndefinable } from './mapOr.js';
export { mapOrAsyncForUndefinable } from './mapOrAsync.js';
export { mapOrElseForUndefinable } from './mapOrElse.js';
export { mapOrElseAsyncForUndefinable } from './mapOrElseAsync.js';
// XXX: `or()` operation is equivalent of `a || b` so we don't ship it by default set.
// export { orForUndefinable } from './or.js';
export { orElseForUndefinable } from './orElse.js';
export { orElseAsyncForUndefinable } from './orElseAsync.js';
export { unwrapOrFromUndefinable } from './unwrapOr.js';
export { unwrapOrElseFromUndefinable } from './unwrapOrElse.js';
export { unwrapOrElseAsyncFromUndefinable } from './unwrapOrElseAsync.js';

import { expectNotUndefined, unwrapUndefinable } from './Undefinable.js';
import { andThenForUndefinable } from './andThen.js';
import { andThenAsyncForUndefinable } from './andThenAsync.js';
import { inspectUndefinable } from './inspect.js';
import { mapForUndefinable } from './map.js';
import { mapAsyncForUndefinable } from './mapAsync.js';
import { mapOrForUndefinable } from './mapOr.js';
import { mapOrAsyncForUndefinable } from './mapOrAsync.js';
import { mapOrElseForUndefinable } from './mapOrElse.js';
import { mapOrElseAsyncForUndefinable } from './mapOrElseAsync.js';
import { orElseForUndefinable } from './orElse.js';
import { orElseAsyncForUndefinable } from './orElseAsync.js';
import { unwrapOrFromUndefinable } from './unwrapOr.js';
import { unwrapOrElseFromUndefinable } from './unwrapOrElse.js';
import { unwrapOrElseAsyncFromUndefinable } from './unwrapOrElseAsync.js';

/**
 *  @deprecated
 *  This is an alias for backward compatibility.
 *  Please use {@link expectNotUndefined} instead.
 *  This might be removed in v34 or later.
 */
export const expect: typeof expectNotUndefined = expectNotUndefined;

/**
 *  @deprecated
 *  This is an alias for backward compatibility.
 *  Please use {@link unwrapUndefinable} instead.
 *  This might be removed in v34 or later.
 */
export const unwrap: typeof unwrapUndefinable = unwrapUndefinable;

/**
 *  @deprecated
 *  Please use {@link andThenForUndefinable}
 *  This might be removed in v34 or later.
 */
export const andThen: typeof andThenForUndefinable = andThenForUndefinable;

/**
 *  @deprecated
 *  Please use {@link andThenAsyncForUndefinable}
 *  This might be removed in v34 or later.
 */
export const andThenAsync: typeof andThenAsyncForUndefinable = andThenAsyncForUndefinable;

/**
 *  @deprecated
 *  Please use {@link inspectUndefinable}
 *  This might be removed in v34 or later.
 */
export const inspect: typeof inspectUndefinable = inspectUndefinable;

/**
 *  @deprecated
 *  Please use {@link mapForUndefinable}
 *  This might be removed in v34 or later.
 */
export const map: typeof mapForUndefinable = mapForUndefinable;

/**
 *  @deprecated
 *  Please use {@link mapAsyncForUndefinable}
 *  This might be removed in v34 or later.
 */
export const mapAsync: typeof mapAsyncForUndefinable = mapAsyncForUndefinable;

/**
 *  @deprecated
 *  Please use {@link mapOrForUndefinable}
 *  This might be removed in v34 or later.
 */
export const mapOr: typeof mapOrForUndefinable = mapOrForUndefinable;

/**
 *  @deprecated
 *  Please use {@link mapOrAsyncForUndefinable}
 *  This might be removed in v34 or later.
 */
export const mapOrAsync: typeof mapOrAsyncForUndefinable = mapOrAsyncForUndefinable;

/**
 *  @deprecated
 *  Please use {@link mapOrElseForUndefinable}
 *  This might be removed in v34 or later.
 */
export const mapOrElse: typeof mapOrElseForUndefinable = mapOrElseForUndefinable;

/**
 *  @deprecated
 *  Please use {@link mapOrElseAsyncForUndefinable}
 *  This might be removed in v34 or later.
 */
export const mapOrElseAsync: typeof mapOrElseAsyncForUndefinable = mapOrElseAsyncForUndefinable;

/**
 *  @deprecated
 *  Please use {@link orElseForUndefinable}
 *  This might be removed in v34 or later.
 */
export const orElse: typeof orElseForUndefinable = orElseForUndefinable;

/**
 *  @deprecated
 *  Please use {@link orElseAsyncForUndefinable}
 *  This might be removed in v34 or later.
 */
export const orElseAsync: typeof orElseAsyncForUndefinable = orElseAsyncForUndefinable;

/**
 *  @deprecated
 *  Please use {@link unwrapOrFromUndefinable}
 *  This might be removed in v34 or later.
 */
export const unwrapOr: typeof unwrapOrFromUndefinable = unwrapOrFromUndefinable;

/**
 *  @deprecated
 *  Please use {@link unwrapOrElseFromUndefinable}
 *  This might be removed in v34 or later.
 */
export const unwrapOrElse: typeof unwrapOrElseFromUndefinable = unwrapOrElseFromUndefinable;

/**
 *  @deprecated
 *  Please use {@link unwrapOrElseAsyncFromUndefinable}
 *  This might be removed in v34 or later.
 */
export const unwrapOrElseAsync: typeof unwrapOrElseAsyncFromUndefinable =
    unwrapOrElseAsyncFromUndefinable;
