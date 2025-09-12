export {
    type NotNullOrUndefined,
    type Maybe,
    isNotNullOrUndefined,
    isNullOrUndefined,
    expectNotNullOrUndefined,
    unwrapMaybe,
} from '../core/maybe.js';

export { andThenForMaybe as andThen } from '../operators/and_then.js';
export { andThenAsyncForMaybe as andThenAsync } from '../operators/and_then_async.js';
export { inspectMaybe as inspect } from '../operators/inspect.js';
export { mapForMaybe as map } from '../operators/map.js';
export { mapAsyncForMaybe as mapAsync } from '../operators/map_async.js';
export { mapOrForMaybe as mapOr } from '../operators/map_or.js';
export { mapOrAsyncForMaybe as mapOrAsync } from '../operators/map_or_async.js';
export { mapOrElseForMaybe as mapOrElse } from '../operators/map_or_else.js';
export { mapOrElseAsyncForMaybe as mapOrElseAsync } from '../operators/map_or_else_async.js';
export { okOrForMaybe as okOr } from '../operators/ok_or.js';
export { okOrElseForMaybe as okOrElse } from '../operators/ok_or_else.js';
export { okOrElseAsyncForMaybe as okOrElseAsync } from '../operators/ok_or_else_async.js';
export { orElseForMaybe as orElse } from '../operators/or_else.js';
export { orElseAsyncForMaybe as orElseAsync } from '../operators/or_else_async.js';
export { toNullableFromMaybe as toNullable } from '../operators/to_nullable.js';
export {
    toResultErrFromMaybe as toResultErr,
    toResultOkFromMaybe as toResultOk,
} from '../operators/to_plain_result.js';
export { toUndefinableFromMaybe as toUndefinable } from '../operators/to_undefinable.js';
export { transposeMaybeToResult as transposeToResult } from '../operators/transpose.js';
export { unwrapOrForMaybe as unwrapOr } from '../operators/unwrap_or.js';
export { unwrapOrElseForMaybe as unwrapOrElse } from '../operators/unwrap_or_else.js';
export { unwrapOrElseAsyncForMaybe as unwrapOrElseAsync } from '../operators/unwrap_or_else_async.js';

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
