export {
    type ClassicTryTransformFn,
    type ClassicTryRecoveryFn,
    ClassicOptionBase,
    type ClassicOption,
    createClassicSome,
    createClassicNone,
    ClassicSomeConstructor,
    ClassicNoneConstructor,
} from './ClassicOption.js';

export {
    compatToClassicOption,
    compatToPlainOption,
    compatToClassicOptionFromNullable,
    compatToNullableFromClassicOption,
    compatToClassicOptionFromUndefinable,
    compatToUndefinableFromClassicOption,
    compatToClassicOptionFromMaybe,
} from './compat.js';
