/**
 *  @fileoverview
 *  This might be removed in v35 or later.
 *  Please use `option-t/Undefinable` instead.
 *
 *  @deprecated 34.0.0.
 */
export {
    type NotUndefined,
    type Undefinable,
    isNotUndefined,
    isUndefined,
    expectNotUndefined,
    unwrapUndefinable,
} from '../undefinable.js';
export { andThenForUndefinable } from '../and_then.js';
export { andThenAsyncForUndefinable } from '../and_then_async.js';
export { inspectUndefinable } from '../inspect.js';
export { mapForUndefinable } from '../map.js';
export { mapAsyncForUndefinable } from '../map_async.js';
export { mapOrForUndefinable } from '../map_or.js';
export { mapOrAsyncForUndefinable } from '../map_or_async.js';
export { mapOrElseForUndefinable } from '../map_or_else.js';
export { mapOrElseAsyncForUndefinable } from '../map_or_else_async.js';
export { orElseForUndefinable } from '../or_else.js';
export { orElseAsyncForUndefinable } from '../or_else_async.js';
export { unwrapOrFromUndefinable } from '../unwrap_or.js';
export { unwrapOrElseFromUndefinable } from '../unwrap_or_else.js';
export { unwrapOrElseAsyncFromUndefinable } from '../unwrap_or_else_async.js';

import { andThenForUndefinable } from '../and_then.js';
import { andThenAsyncForUndefinable } from '../and_then_async.js';
import { inspectUndefinable } from '../inspect.js';
import { mapForUndefinable } from '../map.js';
import { mapAsyncForUndefinable } from '../map_async.js';
import { mapOrForUndefinable } from '../map_or.js';
import { mapOrAsyncForUndefinable } from '../map_or_async.js';
import { mapOrElseForUndefinable } from '../map_or_else.js';
import { mapOrElseAsyncForUndefinable } from '../map_or_else_async.js';
import { orElseForUndefinable } from '../or_else.js';
import { orElseAsyncForUndefinable } from '../or_else_async.js';
import { expectNotUndefined, unwrapUndefinable } from '../undefinable.js';
import { unwrapOrFromUndefinable } from '../unwrap_or.js';
import { unwrapOrElseFromUndefinable } from '../unwrap_or_else.js';
import { unwrapOrElseAsyncFromUndefinable } from '../unwrap_or_else_async.js';

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
