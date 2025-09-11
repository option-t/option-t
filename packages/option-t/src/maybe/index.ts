// We expose _core primitive_ directly.
export {
    expectNotNullOrUndefined,
    isNotNullOrUndefined,
    isNullOrUndefined,
    unwrapMaybe,
    type Maybe,
    type NotNullOrUndefined,
} from './core/maybe.js';

// We expose _operators_ (typically named as `~ForMaybe`) as bundled.
export * as MaybeOperator from './internal/intermediate_operators.js';
