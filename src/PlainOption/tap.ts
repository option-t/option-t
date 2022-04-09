import { inspectOption, type EffectFn } from './inspect';

export type { EffectFn };

/**
 *  @deprecated
 *  This will be removed in a future release.
 *  Use {@link inspectOption}
 */
export const tapOption: typeof inspectOption = inspectOption;
