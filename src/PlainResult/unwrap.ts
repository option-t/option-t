import { unwrapOk, unwrapErr } from './Result.js';

export { unwrapOk as unwrapOkFromResult, unwrapErr as unwrapErrFromResult };

/**
 *  @deprecated
 *  Use {@link unwrapOk}
 */
export const unwrapFromResult: typeof unwrapOk = unwrapOk;
