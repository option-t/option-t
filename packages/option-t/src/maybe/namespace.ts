/**
 *  XXX:
 *  This module is designed to use as `import * as Maybe from 'option-t/Maybe/namespace';`.
 *  This is not designed for other usecases. Please do not use for other cases.
 */
export {
    type NotNullOrUndefined,
    type Maybe,
    isNotNullOrUndefined,
    isNullOrUndefined,
    expectNotNullOrUndefined,
    unwrapMaybe,
} from './maybe.js';
// XXX: `and()` operation is equivalent of `a && b` so we don't ship it by
// default set.
// export { andForMaybe as and } from './and.js';
export { andThenForMaybe as andThen } from './and_then.js';
export { andThenAsyncForMaybe as andThenAsync } from './and_then_async.js';
// XXX:
//  We exposed filter once from here during v41 but it was too early decision.
export { inspectMaybe as inspect } from './inspect.js';
export { mapForMaybe as map } from './map.js';
export { mapAsyncForMaybe as mapAsync } from './map_async.js';
export { mapOrForMaybe as mapOr } from './map_or.js';
export { mapOrAsyncForMaybe as mapOrAsync } from './map_or_async.js';
export { mapOrElseForMaybe as mapOrElse } from './map_or_else.js';
export { mapOrElseAsyncForMaybe as mapOrElseAsync } from './map_or_else_async.js';
// XXX: `or()` operation is equivalent of `a || b` so we don't ship it by
// default set. export { orForMaybe as or } from './or.js';
export { okOrForMaybe as okOr } from './ok_or.js';
export { okOrElseForMaybe as okOrElse } from './ok_or_else.js';
export { okOrElseAsyncForMaybe as okOrElseAsync } from './ok_or_else_async.js';
export { orElseForMaybe as orElse } from './or_else.js';
export { orElseAsyncForMaybe as orElseAsync } from './or_else_async.js';
export { toNullableFromMaybe as toNullable } from './to_nullable.js';
export {
    toResultErrFromMaybe as toResultErr,
    toResultOkFromMaybe as toResultOk,
} from './to_plain_result.js';
export { toUndefinableFromMaybe as toUndefinable } from './to_undefinable.js';
export { unwrapOrForMaybe as unwrapOr } from './unwrap_or.js';
export { unwrapOrElseForMaybe as unwrapOrElse } from './unwrap_or_else.js';
export { unwrapOrElseAsyncForMaybe as unwrapOrElseAsync } from './unwrap_or_else_async.js';
// TODO: #2088
// TODO: #2089
// TODO: #2090
// TODO: #2091
