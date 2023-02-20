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
export { andThenForUndefinable } from '../andThen.js';
export { andThenAsyncForUndefinable } from '../andThenAsync.js';
export { inspectUndefinable } from '../inspect.js';
export { mapForUndefinable } from '../map.js';
export { mapAsyncForUndefinable } from '../mapAsync.js';
export { mapOrForUndefinable } from '../mapOr.js';
export { mapOrAsyncForUndefinable } from '../mapOrAsync.js';
export { mapOrElseForUndefinable } from '../mapOrElse.js';
export { mapOrElseAsyncForUndefinable } from '../mapOrElseAsync.js';
export { orElseForUndefinable } from '../orElse.js';
export { orElseAsyncForUndefinable } from '../orElseAsync.js';
export { unwrapOrFromUndefinable } from '../unwrapOr.js';
export { unwrapOrElseFromUndefinable } from '../unwrapOrElse.js';
export { unwrapOrElseAsyncFromUndefinable } from '../unwrapOrElseAsync.js';

import { expectNotUndefined, unwrapUndefinable } from '../Undefinable.js';
import { andThenForUndefinable } from '../andThen.js';
import { andThenAsyncForUndefinable } from '../andThenAsync.js';
import { inspectUndefinable } from '../inspect.js';
import { mapForUndefinable } from '../map.js';
import { mapAsyncForUndefinable } from '../mapAsync.js';
import { mapOrForUndefinable } from '../mapOr.js';
import { mapOrAsyncForUndefinable } from '../mapOrAsync.js';
import { mapOrElseForUndefinable } from '../mapOrElse.js';
import { mapOrElseAsyncForUndefinable } from '../mapOrElseAsync.js';
import { orElseForUndefinable } from '../orElse.js';
import { orElseAsyncForUndefinable } from '../orElseAsync.js';
import { unwrapOrFromUndefinable } from '../unwrapOr.js';
import { unwrapOrElseFromUndefinable } from '../unwrapOrElse.js';
import { unwrapOrElseAsyncFromUndefinable } from '../unwrapOrElseAsync.js';

/**
 *  @deprecated
 *  Please use {@link expectNotUndefined} in `option-t/Undefinable/Undefinable` or `option-t/Undefinable`.
 */
export const expect: typeof expectNotUndefined = expectNotUndefined;

/**
 *  @deprecated
 *  Please use {@link unwrapUndefinable} in `option-t/Undefinable/unwrap` or `option-t/Undefinable`.
 */
export const unwrap: typeof unwrapUndefinable = unwrapUndefinable;

/**
 *  @deprecated
 *  Please use {@link andThenForUndefinable} in `option-t/Undefinable/andThen` or `option-t/Undefinable`.
 */
export const andThen: typeof andThenForUndefinable = andThenForUndefinable;

/**
 *  @deprecated
 *  Please use {@link andThenAsyncForUndefinable} in `option-t/Undefinable/andThenAsync` or `option-t/Undefinable`.
 */
export const andThenAsync: typeof andThenAsyncForUndefinable = andThenAsyncForUndefinable;

/**
 *  @deprecated
 *  Please use {@link inspectUndefinable} in `option-t/Undefinable/inspect` or `option-t/Undefinable`.
 */
export const inspect: typeof inspectUndefinable = inspectUndefinable;

/**
 *  @deprecated
 *  Please use {@link mapForUndefinable} in `option-t/Undefinable/map` or `option-t/Undefinable`.
 */
export const map: typeof mapForUndefinable = mapForUndefinable;

/**
 *  @deprecated
 *  Please use {@link mapAsyncForUndefinable} in `option-t/Undefinable/mapAsync` or `option-t/Undefinable`.
 */
export const mapAsync: typeof mapAsyncForUndefinable = mapAsyncForUndefinable;

/**
 *  @deprecated
 *  Please use {@link mapOrForUndefinable} in `option-t/Undefinable/mapOr` or `option-t/Undefinable`.
 */
export const mapOr: typeof mapOrForUndefinable = mapOrForUndefinable;

/**
 *  @deprecated
 *  Please use {@link mapOrAsyncForUndefinable} in `option-t/Undefinable/mapOrAsync` or `option-t/Undefinable`.
 */
export const mapOrAsync: typeof mapOrAsyncForUndefinable = mapOrAsyncForUndefinable;

/**
 *  @deprecated
 *  Please use {@link mapOrElseForUndefinable} in `option-t/Undefinable/mapOrElse` or `option-t/Undefinable`.
 */
export const mapOrElse: typeof mapOrElseForUndefinable = mapOrElseForUndefinable;

/**
 *  @deprecated
 *  Please use {@link mapOrElseAsyncForUndefinable} in `option-t/Undefinable/mapOrElseAsync` or `option-t/Undefinable`.
 */
export const mapOrElseAsync: typeof mapOrElseAsyncForUndefinable = mapOrElseAsyncForUndefinable;

/**
 *  @deprecated
 *  Please use {@link orElseForUndefinable} in `option-t/Undefinable/orElse` or `option-t/Undefinable`.
 */
export const orElse: typeof orElseForUndefinable = orElseForUndefinable;

/**
 *  @deprecated
 *  Please use {@link orElseAsyncForUndefinable} in `option-t/Undefinable/orElseAsync` or `option-t/Undefinable`.
 */
export const orElseAsync: typeof orElseAsyncForUndefinable = orElseAsyncForUndefinable;

/**
 *  @deprecated
 *  Please use {@link unwrapOrFromUndefinable} in `option-t/Undefinable/unwrapOr` or `option-t/Undefinable`.
 */
export const unwrapOr: typeof unwrapOrFromUndefinable = unwrapOrFromUndefinable;

/**
 *  @deprecated
 *  Please use {@link unwrapOrElseFromUndefinable} in `option-t/Undefinable/unwrapOrElse` or `option-t/Undefinable`.
 */
export const unwrapOrElse: typeof unwrapOrElseFromUndefinable = unwrapOrElseFromUndefinable;

/**
 *  @deprecated
 *  Please use {@link unwrapOrElseAsyncFromUndefinable} in `option-t/Undefinable/unwrapOrElseAsync` or `option-t/Undefinable`.
 */
export const unwrapOrElseAsync: typeof unwrapOrElseAsyncFromUndefinable =
    unwrapOrElseAsyncFromUndefinable;
