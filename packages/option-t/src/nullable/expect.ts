/**
 *  @fileoverview
 *  This module is kept for backward compatibility.
 *  Please use `option-t/Nullable/Nullable` directly.
 *
 *  @deprecated 33.5.0
 */
import { expectNotNull as expectNotNullOriginal } from './nullable.js';

/**
 *  This is an alias for backward compatibility.
 *  Please use `expectNotNull` in `option-t/Nullable/Nullable`. instead.
 *
 *  @deprecated 33.5.0
 */
export const expectNotNull: typeof expectNotNullOriginal = expectNotNullOriginal;
