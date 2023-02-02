export {
    type ClassicTryTransformFn,
    type ClassicTryRecoveryFn,
    ClassicOptionBase,
    type ClassicOption,
    createClassicSome,
    createClassicNone,
    ClassicSomeConstructor,
    ClassicNoneConstructor,
    type ClassicTryTransformFn as FlatmapFn,
    type ClassicTryRecoveryFn as MayRecoveryFn,
    ClassicOptionBase as OptionBase,
    type ClassicOption as Option,
    createClassicSome as createSome,
    createClassicNone as createNone,
    ClassicSomeConstructor as Some,
    ClassicNoneConstructor as None,
} from './ClassicOption.js';

export { compatToClassicOption, compatToPlainOption } from './compat.js';
