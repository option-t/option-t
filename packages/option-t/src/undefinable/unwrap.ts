/**
 *  @deprecated
 *  This module is kept for backward compatibility.
 *  Please use `option-t/Undefinable/Undefinable` directly.
 */
import { unwrapUndefinable as unwrapUndefinableOriginal } from './undefinable.js';

/**
 *  @deprecated
 *  This is an alias for backward compatibility.
 *  Please use `unwrapNullable` instead.
 *
 *  @see `unwrapUndefinable` in `option-t/Undefinable/Undefinable`.
 */
export const unwrapUndefinable: typeof unwrapUndefinableOriginal = unwrapUndefinableOriginal;
