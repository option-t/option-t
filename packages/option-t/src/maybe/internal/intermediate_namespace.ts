export {
    type NotNullOrUndefined,
    type Maybe,
    isNotNullOrUndefined,
    isNullOrUndefined,
    expectNotNullOrUndefined,
    unwrapMaybe,
} from '../maybe.js';

export { andThenForMaybe as andThen } from '../and_then.js';
export { andThenAsyncForMaybe as andThenAsync } from '../and_then_async.js';
export { inspectMaybe as inspect } from '../inspect.js';
export { mapForMaybe as map } from '../map.js';
export { mapAsyncForMaybe as mapAsync } from '../map_async.js';
export { mapOrForMaybe as mapOr } from '../map_or.js';
export { mapOrAsyncForMaybe as mapOrAsync } from '../map_or_async.js';
export { mapOrElseForMaybe as mapOrElse } from '../map_or_else.js';
export { mapOrElseAsyncForMaybe as mapOrElseAsync } from '../map_or_else_async.js';
export { okOrForMaybe as okOr } from '../ok_or.js';
export { okOrElseForMaybe as okOrElse } from '../ok_or_else.js';
export { okOrElseAsyncForMaybe as okOrElseAsync } from '../ok_or_else_async.js';
export { orElseForMaybe as orElse } from '../or_else.js';
export { orElseAsyncForMaybe as orElseAsync } from '../or_else_async.js';
export { toNullableFromMaybe as toNullable } from '../to_nullable.js';
export {
    toResultErrFromMaybe as toResultErr,
    toResultOkFromMaybe as toResultOk,
} from '../to_plain_result.js';
export { toUndefinableFromMaybe as toUndefinable } from '../to_undefinable.js';
export { unwrapOrForMaybe as unwrapOr } from '../unwrap_or.js';
export { unwrapOrElseForMaybe as unwrapOrElse } from '../unwrap_or_else.js';
export { unwrapOrElseAsyncForMaybe as unwrapOrElseAsync } from '../unwrap_or_else_async.js';

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
