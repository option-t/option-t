import { inspectBothOfResult, inspectErrOfResult, inspectOkOfResult } from './inspect';

/**
 *  @deprecated
 *  This will be removed in a future release.
 *  Use {@link inspectOkOfResult}
 */
export const tapOk: typeof inspectOkOfResult = inspectOkOfResult;

/**
 *  @deprecated
 *  This will be removed in a future release.
 *  Use {@link inspectErrOfResult}
 */
export const tapErr: typeof inspectErrOfResult = inspectErrOfResult;

/**
 *  @deprecated
 *  This will be removed in a future release.
 *  Use {@link inspectBothOfResult}
 */
export const tapBoth: typeof inspectBothOfResult = inspectBothOfResult;
