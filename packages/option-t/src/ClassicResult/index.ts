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

import {
    type ClassicTryTransformFn,
    type ClassicTryRecoverFromErrorFn,
    ClassicResultBase,
    type ClassicResult,
    createClassicOk,
    createClassicErr,
    ClassicOkConstructor,
    ClassicErrConstructor,
} from './ClassicResult.js';

/**
 *  @deprecated
 *  Use {@link ClassicTryTransformFn}.
 *  We'll remove this alias in v34 or later.
 */
export type FlatmapOkFn<T, U, E> = ClassicTryTransformFn<T, U, E>;

/**
 *  @deprecated
 *  Use {@link ClassicTryRecoverFromErrorFn}.
 *  We'll remove this alias in v34 or later.
 */
export type FlatmapErrFn<T, E, F> = ClassicTryRecoverFromErrorFn<T, E, F>;

/**
 *  @deprecated
 *  Use {@link ClassicResultBase}.
 *  We'll remove this alias in v34 or later.
 */
// eslint-disable-next-line @typescript-eslint/naming-convention
export const ResultBase: typeof ClassicResultBase = ClassicResultBase;

/**
 *  @deprecated
 *  Use {@link ClassicResult}.
 *  We'll remove this alias in v34 or later.
 */
export type Result<T, E> = ClassicResult<T, E>;

/**
 *  @deprecated
 *  Use {@link createClassicOk}.
 *  We'll remove this alias in v34 or later.
 */
export const createOk: typeof createClassicOk = createClassicOk;

/**
 *  @deprecated
 *  Use {@link createClassicErr}.
 *  We'll remove this alias in v34 or later.
 */
export const createErr: typeof createClassicErr = createClassicErr;

/**
 *  @deprecated
 *  Use {@link ClassicOkConstructor}.
 *  We'll remove this alias in v34 or later.
 */
// eslint-disable-next-line @typescript-eslint/naming-convention
export const Ok: typeof ClassicOkConstructor = ClassicOkConstructor;

/**
 *  @deprecated
 *  Use {@link ClassicErrConstructor}.
 *  We'll remove this alias in v34 or later.
 */
// eslint-disable-next-line @typescript-eslint/naming-convention
export const Err: typeof ClassicErrConstructor = ClassicErrConstructor;
