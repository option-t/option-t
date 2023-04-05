/**
 *  @deprecated
 *  This module is kept for backward compatibility.
 *  Please use `option-t/PlainResult/Result` directly.
 */
import { unwrapOk, unwrapErr } from './result.js';

/**
 *  @deprecated
 *  This is an alias for backward compatibility.
 *  Please use {@link unwrapOk} instead.
 *
 *  @see {@link unwrapOk} in `option-t/PlainResult/Result`.
 */
export const unwrapOkFromResult: typeof unwrapOk = unwrapOk;

/**
 *  @deprecated
 *  This is an alias for backward compatibility.
 *  Please use {@link unwrapOk} instead.
 *
 *  @see {@link unwrapErr} in `option-t/PlainResult/Result`.
 */
export const unwrapErrFromResult: typeof unwrapErr = unwrapErr;

/**
 *  @deprecated
 *  This is an alias for backward compatibility.
 *  Please use {@link unwrapOk} instead.
 *
 *  @see {@link unwrapOk} in `option-t/PlainResult/Result`.
 */
export const unwrapFromResult: typeof unwrapOk = unwrapOk;
