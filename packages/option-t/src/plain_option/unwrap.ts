/**
 *  @fileoverview
 *  This module is kept for backward compatibility.
 *  Please use `option-t/PlainOption/Option` directly.
 *
 *  @deprecated 33.4.0
 */
import { unwrapSome } from './option.js';

/**
 *  This is an alias for backward compatibility.
 *  Please use {@link unwrapSome} instead.
 *
 *  @deprecated 33.4.0
 *  @see {@link unwrapSome} in `option-t/PlainOption/Option`.
 */
export const unwrapOption: typeof unwrapSome = unwrapSome;

/**
 *  This is an alias for backward compatibility.
 *  Please use {@link unwrapSome} instead.
 *
 *  @deprecated 33.4.0
 *  @see {@link unwrapSome} in `option-t/PlainOption/Option`.
 */
export const unwrapSomeFromOption: typeof unwrapSome = unwrapSome;
