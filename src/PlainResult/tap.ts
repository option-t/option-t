import { inspectBoth, inspectErr, inspectOk, type EffectFn } from './inspect';

export type { EffectFn };

/**
 *  @deprecated
 *  This will be removed in a future release.
 *  Use {@link inspectOk}
 */
export const tapOk: typeof inspectOk = inspectOk;

/**
 *  @deprecated
 *  This will be removed in a future release.
 *  Use {@link inspectErr}
 */
export const tapErr: typeof inspectErr = inspectErr;

/**
 *  @deprecated
 *  This will be removed in a future release.
 *  Use {@link inspectBoth}
 */
export const tapBoth: typeof inspectBoth = inspectBoth;
