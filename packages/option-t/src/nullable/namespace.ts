/**
 *  XXX:
 *  This module is designed to use as `import * as Nullable from 'option-t/Nullable/namespace';`.
 *  This is not designed for other usecases. Please do not use for other cases.
 */
export {
    expectNotNull,
    isNotNull,
    isNull,
    unwrapNullable,
    type NotNull,
    type Nullable,
} from './nullable.js';

// XXX: `and()` operation is equivalent of `a && b` so we don't ship it by default set.
//export { andForNullable as and } from './and.js';
export { andThenForNullable as andThen } from './and_then.js';
export { andThenAsyncForNullable as andThenAsync } from './and_then_async.js';
export {
    filterForNullable as filter,
    filterWithEnsureTypeForNullable as filterWithEnsureType,
} from './filter.js';
export { inspectNullable as inspect } from './inspect.js';
export { mapForNullable as map } from './map.js';
export { mapAsyncForNullable as mapAsync } from './map_async.js';
export { mapOrForNullable as mapOr } from './map_or.js';
export { mapOrAsyncForNullable as mapOrAsync } from './map_or_async.js';
export { mapOrElseForNullable as mapOrElse } from './map_or_else.js';
export { mapOrElseAsyncForNullable as mapOrElseAsync } from './map_or_else_async.js';
export { okOrForNullable as okOr } from './ok_or.js';
export { okOrElseForNullable as okOrElse } from './ok_or_else.js';
export { okOrElseAsyncForNullable as okOrElseAsync } from './ok_or_else_async.js';
// XXX: `or()` operation is equivalent of `a || b` so we don't ship it by default set.
// export { orForNullable as or } from './or.js';
export { orElseForNullable as orElse } from './or_else.js';
export { orElseAsyncForNullable as orElseAsync } from './or_else_async.js';
export {
    toResultErrFromNullable as toResultErr,
    toResultOkFromNullable as toResultOk,
} from './to_plain_result.js';
export { toUndefinableFromNullable as toUndefinable } from './to_undefinable.js';
export { unwrapOrForNullable as unwrapOr } from './unwrap_or.js';
export { unwrapOrElseForNullable as unwrapOrElse } from './unwrap_or_else.js';
export { unwrapOrElseAsyncForNullable as unwrapOrElseAsync } from './unwrap_or_else_async.js';
// TODO: #2058
// TODO: #2059
// TODO: #2060
// TODO: #2061
