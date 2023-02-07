/**
 *  @deprecated
 *      Use `option-t/lib/ClassicOption` instead.
 *
 *      We keep this file only for backward compatibility.
 *      See https://github.com/karen-irc/option-t/issues/459
 */
export {
    type ClassicTryTransformFn as FlatmapFn,
    type ClassicTryRecoveryFn as MayRecoveryFn,
    ClassicOptionBase as OptionBase,
    type ClassicOption as Option,
    createClassicSome as createSome,
    createClassicNone as createNone,
    ClassicSomeConstructor as Some,
    ClassicNoneConstructor as None,
    compatToClassicOption,
    compatToPlainOption,
    compatToClassicOptionFromNullable,
    compatToNullableFromClassicOption,
    compatToClassicOptionFromUndefinable,
    compatToUndefinableFromClassicOption,
    compatToClassicOptionFromMaybe,
} from './ClassicOption/index.js';
