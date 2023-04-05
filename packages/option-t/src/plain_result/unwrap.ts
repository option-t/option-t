/**
 *  @fileoverview
 *  This module is kept for backward compatibility.
 *  Please use `option-t/PlainResult/Result` directly.
 *
 *  @deprecated 33.4.0
 */
import { unwrapOk, unwrapErr } from './result.js';

/**
 *  This is an alias for backward compatibility.
 *  Please use {@link unwrapOk} instead.
 *
 *  @deprecated 33.4.0
 *  @see {@link unwrapOk} in `option-t/PlainResult/Result`.
 */
export const unwrapOkFromResult: typeof unwrapOk = unwrapOk;

/**
 *  This is an alias for backward compatibility.
 *  Please use {@link unwrapOk} instead.
 *
 *  @deprecated 33.4.0
 *  @see {@link unwrapErr} in `option-t/PlainResult/Result`.
 */
export const unwrapErrFromResult: typeof unwrapErr = unwrapErr;

/**
 *  This is an alias for backward compatibility.
 *  Please use {@link unwrapOk} instead.
 *
 *  @deprecated 32.1.0
 *  @see {@link unwrapOk} in `option-t/PlainResult/Result`.
 */
export const unwrapFromResult: typeof unwrapOk = unwrapOk;
