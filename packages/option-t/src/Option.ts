/**
 *  @deprecated
 *      Use `option-t/lib/ClassicOption` instead.
 *      We'll remove this alias in v34 or later.
 *
 *      We keep this file only for backward compatibility.
 *      See https://github.com/option-t/option-t/issues/459
 */
export {
    type FlatmapFn,
    type MayRecoveryFn,
    OptionBase,
    type Option,
    createSome,
    createNone,
    Some,
    None,
    compatToClassicOption,
    compatToPlainOption,
    compatToClassicOptionFromNullable,
    compatToNullableFromClassicOption,
    compatToClassicOptionFromUndefinable,
    compatToUndefinableFromClassicOption,
    compatToClassicOptionFromMaybe,
} from './ClassicOption/index.js';
