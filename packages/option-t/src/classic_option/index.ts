export {
    type ClassicTryTransformFn,
    type ClassicTryRecoveryFn,
    ClassicOptionBase,
    type ClassicOption,
    createClassicSome,
    createClassicNone,
    ClassicSomeConstructor,
    ClassicNoneConstructor,
} from './classic_option.js';

export {
    compatToClassicOption,
    compatToPlainOption,
    compatToClassicOptionFromNullable,
    compatToNullableFromClassicOption,
    compatToClassicOptionFromUndefinable,
    compatToUndefinableFromClassicOption,
    compatToClassicOptionFromMaybe,
} from './compat.js';
