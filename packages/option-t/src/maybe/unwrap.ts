/**
 *  @fileoverview
 *  This module is kept for backward compatibility.
 *  Please use `option-t/Maybe/Maybe` directly.
 *
 *  @deprecated 33.5.0
 */
import { unwrapMaybe as unwrapMaybeOriginal } from './maybe.js';

/**
 *  This is an alias for backward compatibility.
 *  Please use `unwrapMaybe` in `option-t/Maybe/Maybe` instead.
 *
 *  @deprecated 33.5.0
 *  @see `unwrapMaybe` in `option-t/Maybe/Maybe`.
 */
export const unwrapMaybe: typeof unwrapMaybeOriginal = unwrapMaybeOriginal;
