/**
 *  @fileoverview
 *  This module is kept for backward compatibility.
 *  Please use `option-t/PlainResult/Result` directly.
 *
 *  @deprecated 33.4.0
 */
import { expectOk, expectErr } from './result.js';

/**
 *  This is an alias for backward compatibility.
 *  Please use {@link expectOk} instead.
 *
 *  @deprecated 33.4.0
 *  @see {@link expectOk} in `option-t/PlainResult/Result`
 */
export const expectOkForResult: typeof expectOk = expectOk;

/**
 *  This is an alias for backward compatibility.
 *  Please use {@link expectErr} instead.
 *
 *  @deprecated 33.4.0
 *  @see {@link expectErr} in `option-t/PlainResult/Result`
 */
export const expectErrForResult: typeof expectErr = expectErr;

/**
 *  This is an alias for backward compatibility.
 *  Please use {@link expectOk} instead.
 *
 *  @deprecated 32.1.0
 *  @see {@link expectOk} in `option-t/PlainResult/Result`
 */
export const expectIsOk: typeof expectOk = expectOk;

/**
 *  This is an alias for backward compatibility.
 *  Please use {@link expectErr} instead.
 *
 *  @deprecated 32.1.0
 *  @see {@link expectErr} in `option-t/PlainResult/Result`
 */
export const expectIsErr: typeof expectErr = expectErr;
