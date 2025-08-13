export {
    expectNotNullOrUndefined,
    isNotNullOrUndefined,
    isNullOrUndefined,
    unwrapMaybe,
    type Maybe,
    type NotNullOrUndefined,
} from './core/maybe.js';

export { andThenForMaybe } from './operators/and_then.js';
export { andThenAsyncForMaybe } from './operators/and_then_async.js';
export { inspectMaybe } from './operators/inspect.js';
export { mapForMaybe } from './operators/map.js';
export { mapAsyncForMaybe } from './operators/map_async.js';
export { mapOrForMaybe } from './operators/map_or.js';
export { mapOrAsyncForMaybe } from './operators/map_or_async.js';
export { mapOrElseForMaybe } from './operators/map_or_else.js';
export { mapOrElseAsyncForMaybe } from './operators/map_or_else_async.js';
export { okOrForMaybe } from './operators/ok_or.js';
export { okOrElseForMaybe } from './operators/ok_or_else.js';
export { okOrElseAsyncForMaybe } from './operators/ok_or_else_async.js';
export { orElseForMaybe } from './operators/or_else.js';
export { orElseAsyncForMaybe } from './operators/or_else_async.js';
export { toNullableFromMaybe } from './operators/to_nullable.js';
export { toResultErrFromMaybe, toResultOkFromMaybe } from './operators/to_plain_result.js';
export { toUndefinableFromMaybe } from './operators/to_undefinable.js';
export { unwrapOrForMaybe } from './operators/unwrap_or.js';
export { unwrapOrElseForMaybe } from './operators/unwrap_or_else.js';
export { unwrapOrElseAsyncForMaybe } from './operators/unwrap_or_else_async.js';

/**
 *  @experimental
 *      This API is still experimental. We might change this without any breaking changes.
 */
// FIXME: https://github.com/option-t/option-t/issues/2535
export * as experimental_MaybeOperators from './internal/intermediate_operators.js';

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
