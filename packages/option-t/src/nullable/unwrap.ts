/**
 *  @fileoverview
 *  This module is kept for backward compatibility.
 *  Please use `option-t/Nullable/Nullable` directly.
 *
 *  @deprecated 33.5.0
 */
import { unwrapNullable as unwrapNullableOriginal } from './nullable.js';

/**
 *  This is an alias for backward compatibility.
 *  Please use `unwrapNullable` in `option-t/Nullable/Nullable` instead.
 *
 *  @deprecated 33.5.0
 *  @see `unwrapNullable` in `option-t/Nullable/Nullable`.
 */
export const unwrapNullable: typeof unwrapNullableOriginal = unwrapNullableOriginal;
