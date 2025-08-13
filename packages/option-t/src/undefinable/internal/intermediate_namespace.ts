export {
    type NotUndefined,
    type Undefinable,
    isNotUndefined,
    isUndefined,
    expectNotUndefined,
    unwrapUndefinable,
} from '../core/undefinable.js';

export { andThenForUndefinable as andThen } from '../operators/and_then.js';
export { andThenAsyncForUndefinable as andThenAsync } from '../operators/and_then_async.js';
export { inspectUndefinable as inspect } from '../operators/inspect.js';
export { mapForUndefinable as map } from '../operators/map.js';
export { mapAsyncForUndefinable as mapAsync } from '../operators/map_async.js';
export { mapOrForUndefinable as mapOr } from '../operators/map_or.js';
export { mapOrAsyncForUndefinable as mapOrAsync } from '../operators/map_or_async.js';
export { mapOrElseForUndefinable as mapOrElse } from '../operators/map_or_else.js';
export { mapOrElseAsyncForUndefinable as mapOrElseAsync } from '../operators/map_or_else_async.js';
export { okOrForUndefinable as okOr } from '../operators/ok_or.js';
export { okOrElseForUndefinable as okOrElse } from '../operators/ok_or_else.js';
export { okOrElseAsyncForUndefinable as okOrElseAsync } from '../operators/ok_or_else_async.js';
export { orElseForUndefinable as orElse } from '../operators/or_else.js';
export { orElseAsyncForUndefinable as orElseAsync } from '../operators/or_else_async.js';
export { toNullableFromUndefinable as toNullable } from '../operators/to_nullable.js';
export {
    toResultErrFromUndefinable as toResultErr,
    toResultOkFromUndefinable as toResultOk,
} from '../operators/to_plain_result.js';
export { unwrapOrForUndefinable as unwrapOr } from '../operators/unwrap_or.js';
export { unwrapOrElseForUndefinable as unwrapOrElse } from '../operators/unwrap_or_else.js';
export { unwrapOrElseAsyncForUndefinable as unwrapOrElseAsync } from '../operators/unwrap_or_else_async.js';

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
