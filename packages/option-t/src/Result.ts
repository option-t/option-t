/**
 *  @deprecated
 *      Use `option-t/lib/ClassicResult` instead.
 *      We'll remove this alias in v34 or later.
 *
 *      We keep this file only for backward compatibility.
 *      See https://github.com/option-t/option-t/issues/459
 */
export {
    type FlatmapOkFn,
    type FlatmapErrFn,
    ResultBase,
    type Result,
    createOk,
    createErr,
    Ok,
    Err,
    compatToClassicResult,
    compatToPlainResult,
} from './ClassicResult/index.js';
