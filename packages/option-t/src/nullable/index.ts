// We expose _core primitive_ directly.
export {
    expectNotNull,
    isNotNull,
    isNull,
    unwrapNullable,
    type NotNull,
    type Nullable,
} from './core/nullable.js';

// We expose _operators_ (typically named as `~ForNullable`) as bundled.
export * as NullableOperator from './internal/intermediate_operators.js';
