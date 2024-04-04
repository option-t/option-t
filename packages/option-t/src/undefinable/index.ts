export {
    expectNotUndefined,
    isNotUndefined,
    isUndefined,
    unwrapUndefinable,
    type NotUndefined,
    type Undefinable,
} from './undefinable.js';

export { andThenForUndefinable } from './and_then.js';
export { andThenAsyncForUndefinable } from './and_then_async.js';
export { inspectUndefinable } from './inspect.js';
export { mapForUndefinable } from './map.js';
export { mapAsyncForUndefinable } from './map_async.js';
export { mapOrForUndefinable } from './map_or.js';
export { mapOrAsyncForUndefinable } from './map_or_async.js';
export { mapOrElseForUndefinable } from './map_or_else.js';
export { mapOrElseAsyncForUndefinable } from './map_or_else_async.js';
export { okOrForUndefinable } from './ok_or.js';
export { okOrElseForUndefinable } from './ok_or_else.js';
export { okOrElseAsyncForUndefinable } from './ok_or_else_async.js';
export { orElseForUndefinable } from './or_else.js';
export { orElseAsyncForUndefinable } from './or_else_async.js';
export { toNullableFromUndefinable } from './to_nullable.js';
export { toResultErrFromUndefinable, toResultOkFromUndefinable } from './to_plain_result.js';
export { unwrapOrForUndefinable } from './unwrap_or.js';
export { unwrapOrElseForUndefinable } from './unwrap_or_else.js';
export { unwrapOrElseAsyncForUndefinable } from './unwrap_or_else_async.js';

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
