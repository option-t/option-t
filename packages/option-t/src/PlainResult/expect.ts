/**
 *  @deprecated
 *  This module is kept for backward compatibility.
 *  Please use `option-t/PlainResult/Result` directly.
 */
import { expectOk, expectErr } from './result_.js';

/**
 *  This is an alias for backward compatibility.
 *  Please use {@link expectOk} instead.
 *
 *  @see {@link expectOk}
 */
export const expectOkForResult: typeof expectOk = expectOk;

/**
 *  This is an alias for backward compatibility.
 *  Please use {@link expectErr} instead.
 *
 *  @see {@link expectErr}
 */
export const expectErrForResult: typeof expectErr = expectErr;

/**
 *  @deprecated
 *  This is an alias for backward compatibility.
 *  Please use {@link expectOk} instead.
 */
export const expectIsOk: typeof expectOk = expectOk;

/**
 *  @deprecated
 *  This is an alias for backward compatibility.
 *  Please use {@link expectErr} instead.
 */
export const expectIsErr: typeof expectErr = expectErr;
