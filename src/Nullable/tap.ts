import { inspectNullable, type EffectFn } from './inspect';

export type { EffectFn };

/**
 *  @deprecated
 *  This will be removed in a future release.
 *  Use {@link inspectNullable}
 */
export const tapNullable: typeof inspectNullable = inspectNullable;
