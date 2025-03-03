export {
    type ClassicTryTransformFn,
    type ClassicTryRecoverFromErrorFn,
    ClassicResultBase,
    type ClassicResult,
    createClassicOk,
    createClassicErr,
    ClassicOkConstructor,
    ClassicErrConstructor,
} from './classic_result.js';

export { compatToPlainResult, compatToClassicResult } from './compat.js';
