/**
 *  @fileoverview
 *  This might be removed in v35 or later.
 *  Please use `option-t/PlainOption` instead.
 *
 *  @deprecated 34.0.0.
 */
export {
    type Option,
    type Some,
    type None,
    createSome,
    createNone,
    isSome,
    isNone,
    unwrapSome,
    expectSome,
} from '../option.js';

export { andThenForOption } from '../and_then.js';
export { andThenAsyncForOption } from '../and_then_async.js';
export { filterForOption } from '../filter.js';
export { flattenForOption } from '../flatten.js';
export { inspectOption } from '../inspect.js';
export { mapForOption } from '../map.js';
export { mapAsyncForOption } from '../map_async.js';
export { mapOrForOption } from '../map_or.js';
export { mapOrAsyncForOption } from '../map_or_async.js';
export { mapOrElseForOption } from '../map_or_else.js';
export { mapOrElseAsyncForOption } from '../map_or_else_async.js';
export { orElseForOption } from '../or_else.js';
export { orElseAsyncForOption } from '../or_else_async.js';
export { transposeForOption } from '../transpose.js';
export { unwrapOrFromOption } from '../unwrap_or.js';
export { unwrapOrElseFromOption } from '../unwrap_or_else.js';
export { unwrapOrElseAsyncFromOption } from '../unwrap_or_else_async.js';

import { expectSome, unwrapSome } from '../option.js';
import { andForOption as andForOptionOriginal } from '../and.js';
import { andThenForOption } from '../and_then.js';
import { andThenAsyncForOption } from '../and_then_async.js';
import { equalForOption as equalForOptionOriginal } from '../equal.js';
import { filterForOption } from '../filter.js';
import { flattenForOption } from '../flatten.js';
import { inspectOption } from '../inspect.js';
import { mapForOption } from '../map.js';
import { mapAsyncForOption } from '../map_async.js';
import { mapOrForOption } from '../map_or.js';
import { mapOrAsyncForOption } from '../map_or_async.js';
import { mapOrElseForOption } from '../map_or_else.js';
import { mapOrElseAsyncForOption } from '../map_or_else_async.js';
import { orForOption as orForOptionOriginal } from '../or.js';
import { orElseForOption } from '../or_else.js';
import { orElseAsyncForOption } from '../or_else_async.js';
import { transposeForOption } from '../transpose.js';
import { unwrapOrFromOption } from '../unwrap_or.js';
import { unwrapOrElseFromOption } from '../unwrap_or_else.js';
import { unwrapOrElseAsyncFromOption } from '../unwrap_or_else_async.js';

/**
 *  @deprecated
 *  Please use {@link expectSome} in `option-t/PlainOption/Option` or `option-t/PlainOption`.
 */
export const expect: typeof expectSome = expectSome;

/**
 *  @deprecated
 *  Please use {@link unwrapSome} in `option-t/PlainOption/Option` or `option-t/PlainOption`.
 */
export const unwrap: typeof unwrapSome = unwrapSome;

/**
 *  @deprecated
 *  Please use `andForOption` in `option-t/PlainOption/and`.
 */
export const and: typeof andForOptionOriginal = andForOptionOriginal;

/**
 *  @deprecated
 *  Please use `andForOption` in `option-t/PlainOption/and`.
 */
export const andForOption: typeof andForOptionOriginal = andForOptionOriginal;

/**
 *  @deprecated
 *  Please use {@link andThenForOption} in `option-t/PlainOption/andThen`.
 */
export const andThen: typeof andThenForOption = andThenForOption;

/**
 *  @deprecated
 *  Please use {@link andThenAsyncForOption} in `option-t/PlainOption/andThenAsync`.
 */
export const andThenAsync: typeof andThenAsyncForOption = andThenAsyncForOption;

/**
 *  @deprecated
 *  Please use `equalForOption` in `option-t/PlainOption/equal`.
 */
export const equal: typeof equalForOptionOriginal = equalForOptionOriginal;

/**
 *  @deprecated
 *  Please use `equalForOption` in `option-t/PlainOption/equal`.
 */
export const equalForOption: typeof equalForOptionOriginal = equalForOptionOriginal;

/**
 *  @deprecated
 *  Please use {@link filterForOption} in `option-t/PlainOption/filter`.
 */
export const filter: typeof filterForOption = filterForOption;

/**
 *  @deprecated
 *  Please use {@link flattenForOption} in `option-t/PlainOption/flatten`.
 */
export const flatten: typeof flattenForOption = flattenForOption;

/**
 *  @deprecated
 *  Please use {@link inspectOption} in `option-t/PlainOption/inspect`.
 */
export const inspect: typeof inspectOption = inspectOption;

/**
 *  @deprecated
 *  Please use {@link mapForOption} in `option-t/PlainOption/map`.
 */
export const map: typeof mapForOption = mapForOption;

/**
 *  @deprecated
 *  Please use {@link mapAsyncForOption} in `option-t/PlainOption/mapAsync`.
 */
export const mapAsync: typeof mapAsyncForOption = mapAsyncForOption;

/**
 *  @deprecated
 *  Please use {@link mapOrForOption} in `option-t/PlainOption/mapOr`.
 */
export const mapOr: typeof mapOrForOption = mapOrForOption;

/**
 *  @deprecated
 *  Please use {@link mapOrAsyncForOption} in `option-t/PlainOption/mapOrAsync`.
 */
export const mapOrAsync: typeof mapOrAsyncForOption = mapOrAsyncForOption;

/**
 *  @deprecated
 *  Please use {@link mapOrElseForOption} in `option-t/PlainOption/mapOrElse`.
 */
export const mapOrElse: typeof mapOrElseForOption = mapOrElseForOption;

/**
 *  @deprecated
 *  Please use {@link mapOrElseAsyncForOption} in `option-t/PlainOption/mapOrElseAsync`.
 */
export const mapOrElseAsync: typeof mapOrElseAsyncForOption = mapOrElseAsyncForOption;

/**
 *  @deprecated
 *  Please use `orForOption` in `option-t/PlainOption/or`.
 */
export const or: typeof orForOptionOriginal = orForOptionOriginal;

/**
 *  @deprecated
 *  Please use `orForOption` in `option-t/PlainOption/or`.
 */
export const orForOption: typeof orForOptionOriginal = orForOptionOriginal;

/**
 *  @deprecated
 *  Please use {@link orElseForOption} in `option-t/PlainOption/orElse`.
 */
export const orElse: typeof orElseForOption = orElseForOption;

/**
 *  @deprecated
 *  Please use {@link orElseAsyncForOption} in `option-t/PlainOption/orElseAsync`.
 */
export const orElseAsync: typeof orElseAsyncForOption = orElseAsyncForOption;

/**
 *  @deprecated
 *  Please use {@link transposeForOption} in `option-t/PlainOption/transpose`.
 */
export const transpose: typeof transposeForOption = transposeForOption;

/**
 *  @deprecated
 *  Please use {@link unwrapOrFromOption} in `option-t/PlainOption/unwrapOr`.
 */
export const unwrapOr: typeof unwrapOrFromOption = unwrapOrFromOption;

/**
 *  @deprecated
 *  Please use {@link unwrapOrElseFromOption} in `option-t/PlainOption/unwrapOrElse`.
 */
export const unwrapOrElse: typeof unwrapOrElseFromOption = unwrapOrElseFromOption;

/**
 *  @deprecated
 *  Please use {@link unwrapOrElseAsyncFromOption} in `option-t/PlainOption/unwrapOrElseAsync`.
 */
export const unwrapOrElseAsync: typeof unwrapOrElseAsyncFromOption = unwrapOrElseAsyncFromOption;
