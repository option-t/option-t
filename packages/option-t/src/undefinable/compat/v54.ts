/**
 *  @deprecated
 *  Please migrate to:
 *      1. `UndefinableOperator` of `option-t/undefinable`.
 *      2. Import `option-t/undefinable/***` directly.
 */

export {
    expectNotUndefined,
    isNotUndefined,
    isUndefined,
    unwrapUndefinable,
    type NotUndefined,
    type Undefinable,
} from '../core/undefinable.js';

export { andThenForUndefinable } from '../operators/and_then.js';
export { andThenAsyncForUndefinable } from '../operators/and_then_async.js';
export { inspectUndefinable } from '../operators/inspect.js';
export { mapForUndefinable } from '../operators/map.js';
export { mapAsyncForUndefinable } from '../operators/map_async.js';
export { mapOrForUndefinable } from '../operators/map_or.js';
export { mapOrAsyncForUndefinable } from '../operators/map_or_async.js';
export { mapOrElseForUndefinable } from '../operators/map_or_else.js';
export { mapOrElseAsyncForUndefinable } from '../operators/map_or_else_async.js';
export { okOrForUndefinable } from '../operators/ok_or.js';
export { okOrElseForUndefinable } from '../operators/ok_or_else.js';
export { okOrElseAsyncForUndefinable } from '../operators/ok_or_else_async.js';
export { orElseForUndefinable } from '../operators/or_else.js';
export { orElseAsyncForUndefinable } from '../operators/or_else_async.js';
export { toNullableFromUndefinable } from '../operators/to_nullable.js';
export {
    toResultErrFromUndefinable,
    toResultOkFromUndefinable,
} from '../operators/to_plain_result.js';
export { unwrapOrForUndefinable } from '../operators/unwrap_or.js';
export { unwrapOrElseForUndefinable } from '../operators/unwrap_or_else.js';
export { unwrapOrElseAsyncForUndefinable } from '../operators/unwrap_or_else_async.js';

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
