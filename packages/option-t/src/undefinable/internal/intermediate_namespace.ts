export {
    type NotUndefined,
    type Undefinable,
    isNotUndefined,
    isUndefined,
    expectNotUndefined,
    unwrapUndefinable,
} from '../undefinable.js';

export { andThenForUndefinable as andThen } from '../and_then.js';
export { andThenAsyncForUndefinable as andThenAsync } from '../and_then_async.js';
export { inspectUndefinable as inspect } from '../inspect.js';
export { mapForUndefinable as map } from '../map.js';
export { mapAsyncForUndefinable as mapAsync } from '../map_async.js';
export { mapOrForUndefinable as mapOr } from '../map_or.js';
export { mapOrAsyncForUndefinable as mapOrAsync } from '../map_or_async.js';
export { mapOrElseForUndefinable as mapOrElse } from '../map_or_else.js';
export { mapOrElseAsyncForUndefinable as mapOrElseAsync } from '../map_or_else_async.js';
export { okOrForUndefinable as okOr } from '../ok_or.js';
export { okOrElseForUndefinable as okOrElse } from '../ok_or_else.js';
export { okOrElseAsyncForUndefinable as okOrElseAsync } from '../ok_or_else_async.js';
export { orElseForUndefinable as orElse } from '../or_else.js';
export { orElseAsyncForUndefinable as orElseAsync } from '../or_else_async.js';
export { toNullableFromUndefinable as toNullable } from '../to_nullable.js';
export {
    toResultErrFromUndefinable as toResultErr,
    toResultOkFromUndefinable as toResultOk,
} from '../to_plain_result.js';
export { unwrapOrForUndefinable as unwrapOr } from '../unwrap_or.js';
export { unwrapOrElseForUndefinable as unwrapOrElse } from '../unwrap_or_else.js';
export { unwrapOrElseAsyncForUndefinable as unwrapOrElseAsync } from '../unwrap_or_else_async.js';

// XXX:
//  _and_ operator is equivalent of `a && b` so we don't ship it by this default set.
//
// XXX:
//  _or_ operation is equivalent of `a || b` so we don't ship it by this default set.
//
// XXX:
//  To keep a simple API set,
//  we don't expose APIs from here that takes multiple values to compose a data flow pipeline.
//  We may reconsider it if pipeline operator syntax proposal is advanced to the standard.
//  But please import them directly from their path at this moment.
//
//  - filter
//  - xor
//  - zip
//  - zipWith
//  - zipWithAsync
