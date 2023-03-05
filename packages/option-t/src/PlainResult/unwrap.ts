/**
 *  @deprecated
 *  This module is kept for backward compatibility.
 *  Please use `option-t/PlainResult/Result` directly.
 */
import { unwrapOk, unwrapErr } from './result_.js';

/**
 *  This is an alias for backward compatibility.
 *  Please use {@link unwrapOk} instead.
 *
 *  @see {@link unwrapOk}
 */
export const unwrapOkFromResult: typeof unwrapOk = unwrapOk;

/**
 *  This is an alias for backward compatibility.
 *  Please use {@link unwrapOk} instead.
 *
 *  @see {@link unwrapErr}
 */
export const unwrapErrFromResult: typeof unwrapErr = unwrapErr;

/**
 *  @deprecated
 *  This is an alias for backward compatibility.
 *  Please use {@link unwrapOk} instead.
 */
export const unwrapFromResult: typeof unwrapOk = unwrapOk;
