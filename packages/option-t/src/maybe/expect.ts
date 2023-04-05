/**
 *  @fileoverview
 *  This module is kept for backward compatibility.
 *  Please use `option-t/Maybe/Maybe` directly.
 *
 *  @deprecated 33.5.0
 */
import { expectNotNullOrUndefined as expectNotNullOrUndefinedOriginal } from './maybe.js';

/**
 *  This is an alias for backward compatibility.
 *  Please use `expectNotNullOrUndefined` in `option-t/Maybe/Maybe`. instead.
 *
 *  @deprecated 33.8.0
 */
export const expectNotNullOrUndefined: typeof expectNotNullOrUndefinedOriginal =
    expectNotNullOrUndefinedOriginal;

/**
 *  This is an alias for backward compatibility.
 *  Please use `expectNotNullOrUndefined` in `option-t/Maybe/Maybe`. instead.
 *
 *  @deprecated 33.8.0
 */
export const expectNotNullAndUndefined: typeof expectNotNullOrUndefinedOriginal =
    expectNotNullOrUndefinedOriginal;
