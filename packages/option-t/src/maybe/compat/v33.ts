/**
 *  @fileoverview
 *  This might be removed in v35 or later.
 *  Please use `option-t/Maybe` instead.
 *
 *  @deprecated 34.0.0.
 */
export {
    type NotNullOrUndefined,
    type Maybe,
    isNotNullOrUndefined,
    isNullOrUndefined,
    expectNotNullOrUndefined,
    unwrapMaybe,
} from '../maybe.js';
export { andThenForMaybe } from '../and_then.js';
export { andThenAsyncForMaybe } from '../and_then_async.js';
export { inspectMaybe } from '../inspect.js';
export { mapForMaybe } from '../map.js';
export { mapAsyncForMaybe } from '../map_async.js';
export { mapOrForMaybe } from '../map_or.js';
export { mapOrAsyncForMaybe } from '../map_or_async.js';
export { mapOrElseForMaybe } from '../map_or_else.js';
export { mapOrElseAsyncForMaybe } from '../map_or_else_async.js';
export { orElseForMaybe } from '../or_else.js';
export { orElseAsyncForMaybe } from '../or_else_async.js';
export { unwrapOrFromMaybe } from '../unwrap_or.js';
export { unwrapOrElseFromMaybe } from '../unwrap_or_else.js';
export { unwrapOrElseAsyncFromMaybe } from '../unwrap_or_else_async.js';

import { andThenForMaybe } from '../and_then.js';
import { andThenAsyncForMaybe } from '../and_then_async.js';
import { inspectMaybe } from '../inspect.js';
import { mapForMaybe } from '../map.js';
import { mapAsyncForMaybe } from '../map_async.js';
import { mapOrForMaybe } from '../map_or.js';
import { mapOrAsyncForMaybe } from '../map_or_async.js';
import { mapOrElseForMaybe } from '../map_or_else.js';
import { mapOrElseAsyncForMaybe } from '../map_or_else_async.js';
import {
    expectNotNullOrUndefined,
    unwrapMaybe,
    isNotNullOrUndefined,
    type NotNullOrUndefined,
} from '../maybe.js';
import { orElseForMaybe } from '../or_else.js';
import { orElseAsyncForMaybe } from '../or_else_async.js';
import { unwrapOrFromMaybe } from '../unwrap_or.js';
import { unwrapOrElseFromMaybe } from '../unwrap_or_else.js';
import { unwrapOrElseAsyncFromMaybe } from '../unwrap_or_else_async.js';

/**
 *  @deprecated
 *  Please use {@link NotNullOrUndefined} in `option-t/Maybe/Maybe` or `option-t/Maybe`.
 */
export type NotNullAndUndefined<T> = NotNullOrUndefined<T>;

/**
 *  @deprecated
 *  Please use {@link isNotNullOrUndefined} in `option-t/Maybe/Maybe` or `option-t/Maybe`.
 */
export const isNotNullAndUndefined: typeof isNotNullOrUndefined = isNotNullOrUndefined;

/**
 *  @deprecated
 *  Please use {@link expectNotNullOrUndefined} in `option-t/Maybe/Maybe` or `option-t/Maybe`.
 */
export const expectNotNullAndUndefined: typeof expectNotNullOrUndefined = expectNotNullOrUndefined;

/**
 *  @deprecated
 *  Please use {@link expectNotNullOrUndefined} in `option-t/Maybe/Maybe` or `option-t/Maybe`.
 */
export const expect: typeof expectNotNullOrUndefined = expectNotNullOrUndefined;

/**
 *  @deprecated
 *  Please use {@link unwrapMaybe} in `option-t/Maybe/Maybe` or `option-t/Maybe`.
 */
export const unwrap: typeof unwrapMaybe = unwrapMaybe;

/**
 *  @deprecated
 *  Please use {@link andThenForMaybe} in `option-t/Maybe/andThen` or `option-t/Maybe`.
 */
export const andThen: typeof andThenForMaybe = andThenForMaybe;

/**
 *  @deprecated
 *  Please use {@link andThenAsyncForMaybe} in `option-t/Maybe/andThenAsync` or `option-t/Maybe`.
 */
export const andThenAsync: typeof andThenAsyncForMaybe = andThenAsyncForMaybe;

/**
 *  @deprecated
 *  Please use {@link inspectMaybe} in `option-t/Maybe/inspect` or `option-t/Maybe`.
 */
export const inspect: typeof inspectMaybe = inspectMaybe;

/**
 *  @deprecated
 *  Please use {@link mapForMaybe} in `option-t/Maybe/map` or `option-t/Maybe`.
 */
export const map: typeof mapForMaybe = mapForMaybe;

/**
 *  @deprecated
 *  Please use {@link mapAsyncForMaybe} in `option-t/Maybe/mapAsync` or `option-t/Maybe`.
 */
export const mapAsync: typeof mapAsyncForMaybe = mapAsyncForMaybe;

/**
 *  @deprecated
 *  Please use {@link mapOrForMaybe} in `option-t/Maybe/mapOr` or `option-t/Maybe`.
 */
export const mapOr: typeof mapOrForMaybe = mapOrForMaybe;

/**
 *  @deprecated
 *  Please use {@link mapOrAsyncForMaybe} in `option-t/Maybe/mapOrAsync` or `option-t/Maybe`.
 */
export const mapOrAsync: typeof mapOrAsyncForMaybe = mapOrAsyncForMaybe;

/**
 *  @deprecated
 *  Please use {@link mapOrElseForMaybe} in `option-t/Maybe/mapOrElse` or `option-t/Maybe`.
 */
export const mapOrElse: typeof mapOrElseForMaybe = mapOrElseForMaybe;

/**
 *  @deprecated
 *  Please use {@link mapOrElseAsyncForMaybe} in `option-t/Maybe/mapOrElseAsync` or `option-t/Maybe`.
 */
export const mapOrElseAsync: typeof mapOrElseAsyncForMaybe = mapOrElseAsyncForMaybe;

/**
 *  @deprecated
 *  Please use {@link orElseForMaybe} in `option-t/Maybe/orElse` or `option-t/Maybe`.
 */
export const orElse: typeof orElseForMaybe = orElseForMaybe;

/**
 *  @deprecated
 *  Please use {@link orElseAsyncForMaybe} in `option-t/Maybe/orElseAsync` or `option-t/Maybe`.
 */
export const orElseAsync: typeof orElseAsyncForMaybe = orElseAsyncForMaybe;

/**
 *  @deprecated
 *  Please use {@link unwrapOrFromMaybe} in `option-t/Maybe/unwrapOr` or `option-t/Maybe`.
 */
export const unwrapOr: typeof unwrapOrFromMaybe = unwrapOrFromMaybe;

/**
 *  @deprecated
 *  Please use {@link unwrapOrElseFromMaybe} in `option-t/Maybe/unwrapOrElse` or `option-t/Maybe`.
 */
export const unwrapOrElse: typeof unwrapOrElseFromMaybe = unwrapOrElseFromMaybe;

/**
 *  @deprecated
 *  Please use {@link unwrapOrElseAsyncFromMaybe} in `option-t/Maybe/unwrapOrElseAsync` or `option-t/Maybe`.
 */
export const unwrapOrElseAsync: typeof unwrapOrElseAsyncFromMaybe = unwrapOrElseAsyncFromMaybe;
