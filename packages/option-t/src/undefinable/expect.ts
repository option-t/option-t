/**
 *  @fileoverview
 *  This module is kept for backward compatibility.
 *  Please use `option-t/Undefinable/Undefinable` directly.
 *
 *  @deprecated 33.5.0
 */
import { expectNotUndefined as expectNotUndefinedOriginal } from './undefinable.js';

/**
 *  This is an alias for backward compatibility.
 *  Please use `expectNotUndefined` in `option-t/Undefinable/Undefinable`. instead.
 *
 *  @deprecated 33.5.0
 */
export const expectNotUndefined: typeof expectNotUndefinedOriginal = expectNotUndefinedOriginal;
