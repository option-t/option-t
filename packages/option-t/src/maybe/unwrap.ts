/**
 *  @deprecated
 *  This module is kept for backward compatibility.
 *  Please use `option-t/Maybe/Maybe` directly.
 */
import { unwrapMaybe as unwrapMaybeOriginal } from './maybe.js';

/**
 *  @deprecated
 *  This is an alias for backward compatibility.
 *  Please use `unwrapMaybe` in `option-t/Maybe/Maybe` instead.
 *
 *  @see `unwrapMaybe` in `option-t/Maybe/Maybe`.
 */
export const unwrapMaybe: typeof unwrapMaybeOriginal = unwrapMaybeOriginal;
