/**
 *  @deprecated
 *      We keep this file only for backward compatibility.
 *      See https://github.com/karen-irc/option-t/issues/459
 */
export {
    ClassicTryTransformFn as FlatmapOkFn,
    ClassicTryRecoverFromErrorFn as FlatmapErrFn,
    ClassicResultBase as ResultBase,
    ClassicResult as Result,
    createClassicOk as createOk,
    createClassicErr as createErr,
    ClassicOkConstructor as Ok,
    ClassicErrConstructor as Err,
} from './ClassResult/ClassicResult.js';

export { compatToClassicResult, compatToPlainResult } from './ClassResult/compat.js';
