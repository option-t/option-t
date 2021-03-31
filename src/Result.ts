/**
 *  @deprecated
 *      We keep this file only for backward compatibility.
 *      See https://github.com/karen-irc/option-t/issues/459
 */
export {
    ClassicFlatmapOkFn as FlatmapOkFn,
    ClassicFlatmapErrFn as FlatmapErrFn,
    ClassicResultBase as ResultBase,
    ClassicResult as Result,
    createClassicOk as createOk,
    createClassicErr as createErr,
} from './ClassResult/ClassicResult';

export { compatToClassicResult, compatToPlainResult } from './ClassResult/compat';
