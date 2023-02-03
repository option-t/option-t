import { expectOk, expectErr } from './Result.js';

export { expectOk as expectOkForResult, expectErr as expectErrForResult };

/**
 *  @deprecated
 *  Please use {@link expectOk}
 */
export const expectIsOk: typeof expectOk = expectOk;

/**
 *  @deprecated
 *  Please use {@link expectErr}
 */
export const expectIsErr: typeof expectErr = expectErr;
