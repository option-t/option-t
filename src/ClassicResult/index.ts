export {
    type ClassicTryTransformFn,
    type ClassicTryRecoverFromErrorFn,
    ClassicResultBase,
    type ClassicResult,
    createClassicOk,
    createClassicErr,
    ClassicOkConstructor,
    ClassicErrConstructor,
    type ClassicTryTransformFn as FlatmapOkFn,
    type ClassicTryRecoverFromErrorFn as FlatmapErrFn,
    ClassicResultBase as ResultBase,
    type ClassicResult as Result,
    createClassicOk as createOk,
    createClassicErr as createErr,
    ClassicOkConstructor as Ok,
    ClassicErrConstructor as Err,
} from './ClassicResult.js';

export { compatToPlainResult, compatToClassicResult } from './compat.js';
