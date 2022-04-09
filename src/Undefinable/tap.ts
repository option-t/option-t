import { inspectUndefinable, type EffectFn } from './inspect';

export type { EffectFn };

/**
 *  @deprecated
 *  This will be removed in a future release.
 *  Use {@link inspectUndefinable}
 */
export const tapUndefinable: typeof inspectUndefinable = inspectUndefinable;
