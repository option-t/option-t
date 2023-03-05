/**
 *  @deprecated
 *  This might be removed in v35 or later.
 *  Please use `option-t/Nullable` instead.
 */
export {
    type NotNull,
    type Nullable,
    isNotNull,
    isNull,
    expectNotNull,
    unwrapNullable,
} from '../nullable.js';
export { andThenForNullable } from '../and_then.js';
export { andThenAsyncForNullable } from '../and_then_async.js';
export { inspectNullable } from '../inspect.js';
export { mapForNullable } from '../map.js';
export { mapAsyncForNullable } from '../map_async.js';
export { mapOrForNullable } from '../map_or.js';
export { mapOrAsyncForNullable } from '../map_or_async.js';
export { mapOrElseForNullable } from '../map_or_else.js';
export { mapOrElseAsyncForNullable } from '../map_or_else_async.js';
export { orElseForNullable } from '../or_else.js';
export { orElseAsyncForNullable } from '../or_else_async.js';
export { unwrapOrFromNullable } from '../unwrap_or.js';
export { unwrapOrElseFromNullable } from '../unwrap_or_else.js';
export { unwrapOrElseAsyncFromNullable } from '../unwrap_or_else_async.js';

import { expectNotNull, unwrapNullable } from '../nullable.js';
import { andThenForNullable } from '../and_then.js';
import { andThenAsyncForNullable } from '../and_then_async.js';
import { inspectNullable } from '../inspect.js';
import { mapForNullable } from '../map.js';
import { mapAsyncForNullable } from '../map_async.js';
import { mapOrForNullable } from '../map_or.js';
import { mapOrAsyncForNullable } from '../map_or_async.js';
import { mapOrElseForNullable } from '../map_or_else.js';
import { mapOrElseAsyncForNullable } from '../map_or_else_async.js';
import { orElseForNullable } from '../or_else.js';
import { orElseAsyncForNullable } from '../or_else_async.js';
import { unwrapOrFromNullable } from '../unwrap_or.js';
import { unwrapOrElseFromNullable } from '../unwrap_or_else.js';
import { unwrapOrElseAsyncFromNullable } from '../unwrap_or_else_async.js';

/**
 *  @deprecated
 *  Please use {@link expectNotNull} in `option-t/Nullable/Nullable` or `option-t/Nullable`.
 */
export const expect: typeof expectNotNull = expectNotNull;

/**
 *  @deprecated
 *  Please use {@link unwrapNullable} in `option-t/Nullable/Nullable` or `option-t/Nullable`.
 */
export const unwrap: typeof unwrapNullable = unwrapNullable;

/**
 *  @deprecated
 *  Please use {@link andThenForNullable} in `option-t/Nullable/andThen` or `option-t/Nullable`.
 */
export const andThen: typeof andThenForNullable = andThenForNullable;

/**
 *  @deprecated
 *  Please use {@link andThenAsyncForNullable} in `option-t/Nullable/andThenAsync` or `option-t/Nullable`.
 */
export const andThenAsync: typeof andThenAsyncForNullable = andThenAsyncForNullable;

/**
 *  @deprecated
 *  Please use {@link inspectNullable} in `option-t/Nullable/inspect` or `option-t/Nullable`.
 */
export const inspect: typeof inspectNullable = inspectNullable;

/**
 *  @deprecated
 *  Please use {@link mapForNullable} in `option-t/Nullable/map` or `option-t/Nullable`.
 */
export const map: typeof mapForNullable = mapForNullable;

/**
 *  @deprecated
 *  Please use {@link mapAsyncForNullable} in `option-t/Nullable/mapAsync` or `option-t/Nullable`.
 */
export const mapAsync: typeof mapAsyncForNullable = mapAsyncForNullable;

/**
 *  @deprecated
 *  Please use {@link mapOrForNullable} in `option-t/Nullable/mapOr` or `option-t/Nullable`.
 */
export const mapOr: typeof mapOrForNullable = mapOrForNullable;

/**
 *  @deprecated
 *  Please use {@link mapOrAsyncForNullable} in `option-t/Nullable/mapOrAsync` or `option-t/Nullable`.
 */
export const mapOrAsync: typeof mapOrAsyncForNullable = mapOrAsyncForNullable;

/**
 *  @deprecated
 *  Please use {@link mapOrElseForNullable} in `option-t/Nullable/mapOrElse` or `option-t/Nullable`.
 */
export const mapOrElse: typeof mapOrElseForNullable = mapOrElseForNullable;

/**
 *  @deprecated
 *  Please use {@link mapOrElseAsyncForNullable} in `option-t/Nullable/mapOrElseAsync` or `option-t/Nullable`.
 */
export const mapOrElseAsync: typeof mapOrElseAsyncForNullable = mapOrElseAsyncForNullable;

/**
 *  @deprecated
 *  Please use {@link orElseForNullable} in `option-t/Nullable/orElse` or `option-t/Nullable`.
 */
export const orElse: typeof orElseForNullable = orElseForNullable;

/**
 *  @deprecated
 *  Please use {@link orElseAsyncForNullable} in `option-t/Nullable/orElseAsync` or `option-t/Nullable`.
 */
export const orElseAsync: typeof orElseAsyncForNullable = orElseAsyncForNullable;

/**
 *  @deprecated
 *  Please use {@link unwrapOrFromNullable} in `option-t/Nullable/unwrapOr` or `option-t/Nullable`.
 */
export const unwrapOr: typeof unwrapOrFromNullable = unwrapOrFromNullable;

/**
 *  @deprecated
 *  Please use {@link unwrapOrElseFromNullable} in `option-t/Nullable/unwrapOrElse` or `option-t/Nullable`.
 */
export const unwrapOrElse: typeof unwrapOrElseFromNullable = unwrapOrElseFromNullable;

/**
 *  @deprecated
 *  Please use {@link unwrapOrElseAsyncFromNullable} in `option-t/Nullable/unwrapOrElseAsync` or `option-t/Nullable`.
 */
export const unwrapOrElseAsync: typeof unwrapOrElseAsyncFromNullable =
    unwrapOrElseAsyncFromNullable;
