export {
    expectNotNull,
    isNotNull,
    isNull,
    unwrapNullable,
    type NotNull,
    type Nullable,
} from './nullable.js';

export { andThenForNullable } from './and_then.js';
export { andThenAsyncForNullable } from './and_then_async.js';
export { inspectNullable } from './inspect.js';
export { mapForNullable } from './map.js';
export { mapAsyncForNullable } from './map_async.js';
export { mapOrForNullable } from './map_or.js';
export { mapOrAsyncForNullable } from './map_or_async.js';
export { mapOrElseForNullable } from './map_or_else.js';
export { mapOrElseAsyncForNullable } from './map_or_else_async.js';
export { okOrForNullable } from './ok_or.js';
export { okOrElseForNullable } from './ok_or_else.js';
export { okOrElseAsyncForNullable } from './ok_or_else_async.js';
export { orElseForNullable } from './or_else.js';
export { orElseAsyncForNullable } from './or_else_async.js';
export { toResultErrFromNullable, toResultOkFromNullable } from './to_plain_result.js';
export { toUndefinableFromNullable } from './to_undefinable.js';
export { unwrapOrForNullable } from './unwrap_or.js';
export { unwrapOrElseForNullable } from './unwrap_or_else.js';
export { unwrapOrElseAsyncForNullable } from './unwrap_or_else_async.js';

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
//  - is_some_and
//  - xor
//  - zip
//  - zipWith
//  - zipWithAsync
