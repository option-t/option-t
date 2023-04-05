/**
 *  @deprecated
 *  This module is kept for backward compatibility.
 *  Please use `option-t/PlainResult/Result` directly.
 */
import { expectOk, expectErr } from './result.js';

/**
 *  @deprecated
 *  This is an alias for backward compatibility.
 *  Please use {@link expectOk} instead.
 *
 *  @see {@link expectOk} in `option-t/PlainResult/Result`
 */
export const expectOkForResult: typeof expectOk = expectOk;

/**
 *  @deprecated
 *  This is an alias for backward compatibility.
 *  Please use {@link expectErr} instead.
 *
 *  @see {@link expectErr} in `option-t/PlainResult/Result`
 */
export const expectErrForResult: typeof expectErr = expectErr;

/**
 *  @deprecated
 *  This is an alias for backward compatibility.
 *  Please use {@link expectOk} instead.
 *
 *  @see {@link expectOk} in `option-t/PlainResult/Result`
 */
export const expectIsOk: typeof expectOk = expectOk;

/**
 *  @deprecated
 *  This is an alias for backward compatibility.
 *  Please use {@link expectErr} instead.
 *
 *  @see {@link expectErr} in `option-t/PlainResult/Result`
 */
export const expectIsErr: typeof expectErr = expectErr;
