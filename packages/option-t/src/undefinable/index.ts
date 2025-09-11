// We expose _core primitive_ directly.
export {
    expectNotUndefined,
    isNotUndefined,
    isUndefined,
    unwrapUndefinable,
    type NotUndefined,
    type Undefinable,
} from './core/undefinable.js';

// We expose _operators_ (typically named as `~ForUndefinable`) as bundled.
export * as UndefinableOperator from './internal/intermediate_operators.js';
