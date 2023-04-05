/**
 *  @fileoverview
 *  This module is kept for backward compatibility.
 *  Please use `option-t/Undefinable/Undefinable` directly.
 *
 *  @deprecated 33.5.0
 */
import { unwrapUndefinable as unwrapUndefinableOriginal } from './undefinable.js';

/**
 *  This is an alias for backward compatibility.
 *  Please use `unwrapNullable` instead.
 *
 *  @deprecated 33.5.0
 *  @see `unwrapUndefinable` in `option-t/Undefinable/Undefinable`.
 */
export const unwrapUndefinable: typeof unwrapUndefinableOriginal = unwrapUndefinableOriginal;
