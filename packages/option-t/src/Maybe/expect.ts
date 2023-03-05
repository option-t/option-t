/**
 *  @deprecated
 *  This module is kept for backward compatibility.
 *  Please use `option-t/Maybe/Maybe` directly.
 */
import { expectNotNullOrUndefined } from './maybe_.js';

export { expectNotNullOrUndefined };

/**
 *  @deprecated
 *  This is an alias for backward compatibility.
 *  Please use {@link expectNotNullOrUndefined} instead.
 */
export const expectNotNullAndUndefined: typeof expectNotNullOrUndefined = expectNotNullOrUndefined;
