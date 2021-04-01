/**
 *  @deprecated
 *      We keep this file only for backward compatibility.
 *      See https://github.com/karen-irc/option-t/issues/459
 */
export {
    ClassicFlatmapFn as FlatmapFn,
    ClassicMayRecoveryFn as MayRecoveryFn,
    ClassicOptionBase as OptionBase,
    ClassicOption as Option,
    createClassicSome as createSome,
    createClassicNone as createNone,
    ClassicSomeConstructor as Some,
    ClassicNoneConstructor as None,
} from './ClassOption/ClassicOption';

export { compatToClassicOption, compatToPlainOption } from './ClassOption/compat';
