import { inspectMaybe, type EffectFn } from './inspect';

export type { EffectFn };

/**
 *  @deprecated
 *  This will be removed in a future release.
 *  Use {@link inspectMaybe}
 */
export const tapMaybe: typeof inspectMaybe = inspectMaybe;
