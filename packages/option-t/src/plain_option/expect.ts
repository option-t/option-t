/**
 *  @fileoverview
 *  This module is kept for backward compatibility.
 *  Please use `option-t/PlainOption/Option` directly.
 *
 *  @deprecated 33.4.0
 */
import { expectSome } from './option.js';

/**
 *  This is an alias for backward compatibility.
 *  Please use {@link expectSome} instead.
 *
 *  @deprecated 33.4.0
 *  @see {@link expectSome} in `option-t/PlainOption/Option`
 */
export const expectSomeForOption: typeof expectSome = expectSome;

/**
 *  This is an alias for backward compatibility.
 *  Please use {@link expectSome} instead.
 *
 *  @deprecated 32.2.0
 *  @see {@link expectSome} in `option-t/PlainOption/Option`
 */
export const expectIsSome: typeof expectSome = expectSome;
