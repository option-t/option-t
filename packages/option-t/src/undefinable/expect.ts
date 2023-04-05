/**
 *  @deprecated
 *  This module is kept for backward compatibility.
 *  Please use `option-t/Undefinable/Undefinable` directly.
 */
import { expectNotUndefined as expectNotUndefinedOriginal } from './undefinable.js';

/**
 *  @deprecated
 *  This is an alias for backward compatibility.
 *  Please use `expectNotUndefined` in `option-t/Undefinable/Undefinable`. instead.
 */
export const expectNotUndefined: typeof expectNotUndefinedOriginal = expectNotUndefinedOriginal;
