export {
    expectNotUndefined,
    isNotUndefined,
    isUndefined,
    unwrapUndefinable,
    type NotUndefined,
    type Undefinable,
} from './undefinable.js';
// XXX: `and()` operation is equivalent of `a && b` so we don't ship it by default set.
//export { andForUndefinable } from './and.js';
export { andThenForUndefinable } from './and_then.js';
export { andThenAsyncForUndefinable } from './and_then_async.js';
export { inspectUndefinable } from './inspect.js';
export { mapForUndefinable } from './map.js';
export { mapAsyncForUndefinable } from './map_async.js';
export { mapOrForUndefinable } from './map_or.js';
export { mapOrAsyncForUndefinable } from './map_or_async.js';
export { mapOrElseForUndefinable } from './map_or_else.js';
export { mapOrElseAsyncForUndefinable } from './map_or_else_async.js';
export { okOrForUndefinable } from './ok_or.js';
export { okOrElseForUndefinable } from './ok_or_else.js';
export { okOrElseAsyncForUndefinable } from './ok_or_else_async.js';
// XXX: `or()` operation is equivalent of `a || b` so we don't ship it by default set.
// export { orForUndefinable } from './or.js';
export { orElseForUndefinable } from './or_else.js';
export { orElseAsyncForUndefinable } from './or_else_async.js';
export { toNullableFromUndefinable } from './to_nullable.js';
export { toResultErrFromUndefinable, toResultOkFromUndefinable } from './to_plain_result.js';
export { unwrapOrForUndefinable } from './unwrap_or.js';
export { unwrapOrElseForUndefinable } from './unwrap_or_else.js';
export { unwrapOrElseAsyncForUndefinable } from './unwrap_or_else_async.js';
// TODO: #2071
// TODO: #2072
// TODO: #2073
// TODO: #2074

/**
 *  Backward Compatibility
 */
import { unwrapOrForUndefinable } from './unwrap_or.js';
import { unwrapOrElseForUndefinable } from './unwrap_or_else.js';
import { unwrapOrElseAsyncForUndefinable } from './unwrap_or_else_async.js';

/**
 *  @deprecated
 *  This is kept for backward compatibility.
 *  Use {@link unwrapOrForUndefinable} instead.
 */
export const unwrapOrFromUndefinable: typeof unwrapOrForUndefinable = unwrapOrForUndefinable;

/**
 *  @deprecated
 *  This is kept for backward compatibility.
 *  Use {@link unwrapOrElseForUndefinable} instead.
 */
export const unwrapOrElseFromUndefinable: typeof unwrapOrElseForUndefinable =
    unwrapOrElseForUndefinable;

/**
 *  @deprecated
 *  This is kept for backward compatibility.
 *  Use {@link unwrapOrElseAsyncForUndefinable} instead.
 */
export const unwrapOrElseAsyncFromUndefinable: typeof unwrapOrElseAsyncForUndefinable =
    unwrapOrElseAsyncForUndefinable;
