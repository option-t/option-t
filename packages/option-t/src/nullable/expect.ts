/**
 *  @deprecated
 *  This module is kept for backward compatibility.
 *  Please use `option-t/Nullable/Nullable` directly.
 */
import { expectNotNull as expectNotNullOriginal } from './nullable.js';

/**
 *  @deprecated
 *  This is an alias for backward compatibility.
 *  Please use `expectNotNull` in `option-t/Nullable/Nullable`. instead.
 */
export const expectNotNull: typeof expectNotNullOriginal = expectNotNullOriginal;
