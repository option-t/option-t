export {
    type ClassicTryTransformFn,
    type ClassicTryRecoverFromErrorFn,
    ClassicResultBase,
    type ClassicResult,
    createClassicOk,
    createClassicErr,
    ClassicOkConstructor,
    ClassicErrConstructor,
} from './ClassicResult.js';

export { compatToPlainResult, compatToClassicResult } from './compat.js';
