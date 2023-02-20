export {
    type NotNull,
    type Nullable,
    isNotNull,
    isNull,
    expectNotNull,
    unwrapNullable,
} from './Nullable.js';
// XXX: `and()` operation is equivalent of `a && b` so we don't ship it by default set.
//export { andForNullable } from './and.js';
export { andThenForNullable } from './andThen.js';
export { andThenAsyncForNullable } from './andThenAsync.js';
export { inspectNullable } from './inspect.js';
export { mapForNullable } from './map.js';
export { mapAsyncForNullable } from './mapAsync.js';
export { mapOrForNullable } from './mapOr.js';
export { mapOrAsyncForNullable } from './mapOrAsync.js';
export { mapOrElseForNullable } from './mapOrElse.js';
export { mapOrElseAsyncForNullable } from './mapOrElseAsync.js';
// XXX: `or()` operation is equivalent of `a || b` so we don't ship it by default set.
// export { orForNullable } from './or.js';
export { orElseForNullable } from './orElse.js';
export { orElseAsyncForNullable } from './orElseAsync.js';
export { unwrapOrFromNullable } from './unwrapOr.js';
export { unwrapOrElseFromNullable } from './unwrapOrElse.js';
export { unwrapOrElseAsyncFromNullable } from './unwrapOrElseAsync.js';

import { expectNotNull, unwrapNullable } from './Nullable.js';
import { andThenForNullable } from './andThen.js';
import { andThenAsyncForNullable } from './andThenAsync.js';
import { inspectNullable } from './inspect.js';
import { mapForNullable } from './map.js';
import { mapAsyncForNullable } from './mapAsync.js';
import { mapOrForNullable } from './mapOr.js';
import { mapOrAsyncForNullable } from './mapOrAsync.js';
import { mapOrElseForNullable } from './mapOrElse.js';
import { mapOrElseAsyncForNullable } from './mapOrElseAsync.js';
import { orElseForNullable } from './orElse.js';
import { orElseAsyncForNullable } from './orElseAsync.js';
import { unwrapOrFromNullable } from './unwrapOr.js';
import { unwrapOrElseFromNullable } from './unwrapOrElse.js';
import { unwrapOrElseAsyncFromNullable } from './unwrapOrElseAsync.js';

/**
 *  @deprecated
 *  This is an alias for backward compatibility.
 *  Please use {@link expectNotNull} instead.
 *  This might be removed in v34 or later.
 */
export const expect: typeof expectNotNull = expectNotNull;

/**
 *  @deprecated
 *  This is an alias for backward compatibility.
 *  Please use {@link unwrapNullable} instead.
 *  This might be removed in v34 or later.
 */
export const unwrap: typeof unwrapNullable = unwrapNullable;

/**
 *  @deprecated
 *  Please use {@link andThenForNullable}
 *  This might be removed in v34 or later.
 */
export const andThen: typeof andThenForNullable = andThenForNullable;

/**
 *  @deprecated
 *  Please use {@link andThenAsyncForNullable}
 *  This might be removed in v34 or later.
 */
export const andThenAsync: typeof andThenAsyncForNullable = andThenAsyncForNullable;

/**
 *  @deprecated
 *  Please use {@link inspectNullable}
 *  This might be removed in v34 or later.
 */
export const inspect: typeof inspectNullable = inspectNullable;

/**
 *  @deprecated
 *  Please use {@link mapForNullable}
 *  This might be removed in v34 or later.
 */
export const map: typeof mapForNullable = mapForNullable;

/**
 *  @deprecated
 *  Please use {@link mapAsyncForNullable}
 *  This might be removed in v34 or later.
 */
export const mapAsync: typeof mapAsyncForNullable = mapAsyncForNullable;

/**
 *  @deprecated
 *  Please use {@link mapOrForNullable}
 *  This might be removed in v34 or later.
 */
export const mapOr: typeof mapOrForNullable = mapOrForNullable;

/**
 *  @deprecated
 *  Please use {@link mapOrAsyncForNullable}
 *  This might be removed in v34 or later.
 */
export const mapOrAsync: typeof mapOrAsyncForNullable = mapOrAsyncForNullable;

/**
 *  @deprecated
 *  Please use {@link mapOrElseForNullable}
 *  This might be removed in v34 or later.
 */
export const mapOrElse: typeof mapOrElseForNullable = mapOrElseForNullable;

/**
 *  @deprecated
 *  Please use {@link mapOrElseAsyncForNullable}
 *  This might be removed in v34 or later.
 */
export const mapOrElseAsync: typeof mapOrElseAsyncForNullable = mapOrElseAsyncForNullable;

/**
 *  @deprecated
 *  Please use {@link orElseForNullable}
 *  This might be removed in v34 or later.
 */
export const orElse: typeof orElseForNullable = orElseForNullable;

/**
 *  @deprecated
 *  Please use {@link orElseAsyncForNullable}
 *  This might be removed in v34 or later.
 */
export const orElseAsync: typeof orElseAsyncForNullable = orElseAsyncForNullable;

/**
 *  @deprecated
 *  Please use {@link unwrapOrFromNullable}
 *  This might be removed in v34 or later.
 */
export const unwrapOr: typeof unwrapOrFromNullable = unwrapOrFromNullable;

/**
 *  @deprecated
 *  Please use {@link unwrapOrElseFromNullable}
 *  This might be removed in v34 or later.
 */
export const unwrapOrElse: typeof unwrapOrElseFromNullable = unwrapOrElseFromNullable;

/**
 *  @deprecated
 *  Please use {@link unwrapOrElseAsyncFromNullable}
 *  This might be removed in v34 or later.
 */
export const unwrapOrElseAsync: typeof unwrapOrElseAsyncFromNullable =
    unwrapOrElseAsyncFromNullable;
