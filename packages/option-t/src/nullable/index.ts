export {
    expectNotNull,
    isNotNull,
    isNull,
    unwrapNullable,
    type NotNull,
    type Nullable,
} from './nullable.js';
// XXX: `and()` operation is equivalent of `a && b` so we don't ship it by default set.
//export { andForNullable } from './and.js';
export { andThenForNullable } from './and_then.js';
export { andThenAsyncForNullable } from './and_then_async.js';
export { inspectNullable } from './inspect.js';
export { mapForNullable } from './map.js';
export { mapAsyncForNullable } from './map_async.js';
export { mapOrForNullable } from './map_or.js';
export { mapOrAsyncForNullable } from './map_or_async.js';
export { mapOrElseForNullable } from './map_or_else.js';
export { mapOrElseAsyncForNullable } from './map_or_else_async.js';
export { okOrForNullable } from './ok_or.js';
export { okOrElseForNullable } from './ok_or_else.js';
export { okOrElseAsyncForNullable } from './ok_or_else_async.js';
// XXX: `or()` operation is equivalent of `a || b` so we don't ship it by default set.
// export { orForNullable } from './or.js';
export { orElseForNullable } from './or_else.js';
export { orElseAsyncForNullable } from './or_else_async.js';
export { toResultErrFromNullable, toResultOkFromNullable } from './to_plain_result.js';
export { toUndefinableFromNullable } from './to_undefinable.js';
export { unwrapOrForNullable } from './unwrap_or.js';
export { unwrapOrElseForNullable } from './unwrap_or_else.js';
export { unwrapOrElseAsyncForNullable } from './unwrap_or_else_async.js';
// TODO: #2084
// TODO: #2085
// TODO: #2087
// TODO: #2086

/**
 *  Backward Compatibility
 */
import { unwrapOrElseAsyncForNullable } from './unwrap_or_else_async.js';

/**
 *  @deprecated 40.6.0
 *  This is kept for backward compatibility.
 *  Use {@link unwrapOrElseAsyncForNullable} instead.
 */
export const unwrapOrElseAsyncFromNullable: typeof unwrapOrElseAsyncForNullable =
    unwrapOrElseAsyncForNullable;
