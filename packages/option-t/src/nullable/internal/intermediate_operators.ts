// XXX:
// This module only exports _complement operators_.
// Do not export _core primitives_.

export { andThenForNullable as andThen } from '../operators/and_then.js';
export { andThenAsyncForNullable as andThenAsync } from '../operators/and_then_async.js';
export { inspectNullable as inspect } from '../operators/inspect.js';
export { mapForNullable as map } from '../operators/map.js';
export { mapAsyncForNullable as mapAsync } from '../operators/map_async.js';
export { mapOrForNullable as mapOr } from '../operators/map_or.js';
export { mapOrAsyncForNullable as mapOrAsync } from '../operators/map_or_async.js';
export { mapOrElseForNullable as mapOrElse } from '../operators/map_or_else.js';
export { mapOrElseAsyncForNullable as mapOrElseAsync } from '../operators/map_or_else_async.js';
export { okOrForNullable as okOr } from '../operators/ok_or.js';
export { okOrElseForNullable as okOrElse } from '../operators/ok_or_else.js';
export { okOrElseAsyncForNullable as okOrElseAsync } from '../operators/ok_or_else_async.js';
export { orElseForNullable as orElse } from '../operators/or_else.js';
export { orElseAsyncForNullable as orElseAsync } from '../operators/or_else_async.js';
export {
    toResultErrFromNullable as toResultErr,
    toResultOkFromNullable as toResultOk,
} from '../operators/to_plain_result.js';
export { toUndefinableFromNullable as toUndefinable } from '../operators/to_undefinable.js';
export { transposeNullableToResult as transposeToResult } from '../operators/transpose.js';
export { unwrapOrForNullable as unwrapOr } from '../operators/unwrap_or.js';
export { unwrapOrElseForNullable as unwrapOrElse } from '../operators/unwrap_or_else.js';
export { unwrapOrElseAsyncForNullable as unwrapOrElseAsync } from '../operators/unwrap_or_else_async.js';

// XXX:
//  _and_ operator is equivalent of `a && b` so we don't ship it by this default set.
//
// XXX:
//  _or_ operation is equivalent of `a || b` so we don't ship it by default set.
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
