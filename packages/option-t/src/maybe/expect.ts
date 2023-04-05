/**
 *  @deprecated
 *  This module is kept for backward compatibility.
 *  Please use `option-t/Maybe/Maybe` directly.
 */
import { expectNotNullOrUndefined as expectNotNullOrUndefinedOriginal } from './maybe.js';

/**
 *  @deprecated
 *  This is an alias for backward compatibility.
 *  Please use `expectNotNullOrUndefined` in `option-t/Maybe/Maybe`. instead.
 */
export const expectNotNullOrUndefined: typeof expectNotNullOrUndefinedOriginal =
    expectNotNullOrUndefinedOriginal;

/**
 *  @deprecated
 *  This is an alias for backward compatibility.
 *  Please use `expectNotNullOrUndefined` in `option-t/Maybe/Maybe`. instead.
 */
export const expectNotNullAndUndefined: typeof expectNotNullOrUndefinedOriginal =
    expectNotNullOrUndefinedOriginal;
