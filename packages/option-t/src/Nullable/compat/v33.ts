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
} from '../Nullable.js';
export { andThenForNullable } from '../andThen.js';
export { andThenAsyncForNullable } from '../andThenAsync.js';
export { inspectNullable } from '../inspect.js';
export { mapForNullable } from '../map.js';
export { mapAsyncForNullable } from '../mapAsync.js';
export { mapOrForNullable } from '../mapOr.js';
export { mapOrAsyncForNullable } from '../mapOrAsync.js';
export { mapOrElseForNullable } from '../mapOrElse.js';
export { mapOrElseAsyncForNullable } from '../mapOrElseAsync.js';
export { orElseForNullable } from '../orElse.js';
export { orElseAsyncForNullable } from '../orElseAsync.js';
export { unwrapOrFromNullable } from '../unwrapOr.js';
export { unwrapOrElseFromNullable } from '../unwrapOrElse.js';
export { unwrapOrElseAsyncFromNullable } from '../unwrapOrElseAsync.js';

import { expectNotNull, unwrapNullable } from '../Nullable.js';
import { andThenForNullable } from '../andThen.js';
import { andThenAsyncForNullable } from '../andThenAsync.js';
import { inspectNullable } from '../inspect.js';
import { mapForNullable } from '../map.js';
import { mapAsyncForNullable } from '../mapAsync.js';
import { mapOrForNullable } from '../mapOr.js';
import { mapOrAsyncForNullable } from '../mapOrAsync.js';
import { mapOrElseForNullable } from '../mapOrElse.js';
import { mapOrElseAsyncForNullable } from '../mapOrElseAsync.js';
import { orElseForNullable } from '../orElse.js';
import { orElseAsyncForNullable } from '../orElseAsync.js';
import { unwrapOrFromNullable } from '../unwrapOr.js';
import { unwrapOrElseFromNullable } from '../unwrapOrElse.js';
import { unwrapOrElseAsyncFromNullable } from '../unwrapOrElseAsync.js';

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
