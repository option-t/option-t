/**
 *  XXX:
 *  This module is designed to use as `import * as Undefinable from 'option-t/Undefinable/namespace';`.
 *  This is not designed for other usecases. Please do not use for other cases.
 */
export {
    type NotUndefined,
    type Undefinable,
    isNotUndefined,
    isUndefined,
    expectNotUndefined,
    unwrapUndefinable,
} from './undefinable.js';
// XXX: `and()` operation is equivalent of `a && b` so we don't ship it by default set.
//export { andForUndefinable as and } from './and.js';
export { andThenForUndefinable as andThen } from './and_then.js';
export { andThenAsyncForUndefinable as andThenAsync } from './and_then_async.js';
export { inspectUndefinable as inspect } from './inspect.js';
export { mapForUndefinable as map } from './map.js';
export { mapAsyncForUndefinable as mapAsync } from './map_async.js';
export { mapOrForUndefinable as mapOr } from './map_or.js';
export { mapOrAsyncForUndefinable as mapOrAsync } from './map_or_async.js';
export { mapOrElseForUndefinable as mapOrElse } from './map_or_else.js';
export { mapOrElseAsyncForUndefinable as mapOrElseAsync } from './map_or_else_async.js';
// XXX: `or()` operation is equivalent of `a || b` so we don't ship it by default set.
// export { orForUndefinable as or } from './or.js';
export { okOrForUndefinable as okOr } from './ok_or.js';
export { okOrElseForUndefinable as okOrElse } from './ok_or_else.js';
export { orElseForUndefinable as orElse } from './or_else.js';
export { orElseAsyncForUndefinable as orElseAsync } from './or_else_async.js';
export { toNullableFromUndefinable as toNullable } from './to_nullable.js';
export {
    toResultErrFromUndefinable as toResultErr,
    toResultOkFromUndefinable as toResultOk,
} from './to_plain_result.js';
export { unwrapOrFromUndefinable as unwrapOr } from './unwrap_or.js';
export { unwrapOrElseFromUndefinable as unwrapOrElse } from './unwrap_or_else.js';
export { unwrapOrElseAsyncFromUndefinable as unwrapOrElseAsync } from './unwrap_or_else_async.js';
