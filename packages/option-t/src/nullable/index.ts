// We expose _core primitive_ directly.
export {
    expectNotNull,
    isNotNull,
    isNull,
    unwrapNullable,
    type NotNull,
    type Nullable,
} from './core/nullable.js';

export { andThenForNullable } from './operators/and_then.js';
export { andThenAsyncForNullable } from './operators/and_then_async.js';
export { inspectNullable } from './operators/inspect.js';
export { mapForNullable } from './operators/map.js';
export { mapAsyncForNullable } from './operators/map_async.js';
export { mapOrForNullable } from './operators/map_or.js';
export { mapOrAsyncForNullable } from './operators/map_or_async.js';
export { mapOrElseForNullable } from './operators/map_or_else.js';
export { mapOrElseAsyncForNullable } from './operators/map_or_else_async.js';
export { okOrForNullable } from './operators/ok_or.js';
export { okOrElseForNullable } from './operators/ok_or_else.js';
export { okOrElseAsyncForNullable } from './operators/ok_or_else_async.js';
export { orElseForNullable } from './operators/or_else.js';
export { orElseAsyncForNullable } from './operators/or_else_async.js';
export { toResultErrFromNullable, toResultOkFromNullable } from './operators/to_plain_result.js';
export { toUndefinableFromNullable } from './operators/to_undefinable.js';
export { unwrapOrForNullable } from './operators/unwrap_or.js';
export { unwrapOrElseForNullable } from './operators/unwrap_or_else.js';
export { unwrapOrElseAsyncForNullable } from './operators/unwrap_or_else_async.js';

// We expose _operators_ (typically named as `~ForNullable`) as bundled.
export * as NullableOperator from './internal/intermediate_operators.js';
