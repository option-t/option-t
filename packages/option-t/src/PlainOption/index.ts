/**
 *  This module provies that the Option type interface whose APIs are inspired
 *  by Rust's [`std::option::Option<T>`](https://doc.rust-lang.org/std/option/index.html).
 *
 *  We don't use a class to provides this module by these reason:
 *
 *  - Make treeshaking friendly.
 *      - Almost minifier cannot remove functions by default on `.prototype` even if they are unused.
 *  - Relax the incompatible problem by mixing multiple versions of this package
 *    in module dependency tree.
 *      - e.g. `instanceof` will be a problem. See ([#337](https://github.com/karen-irc/option-t/pull/337)).
 *
 *  And some operators might not return a new object and reuse the input
 *  to reduce an object allocation. Thus comparing _this `Option<T>`` is meaningless like a following code.
 *  This is by design because we think this pattern is meaningless.
 *
 *  ```typescript
 *      const a: Option<number> = createSome(1);
 *      const b: Option<number> = someOperator(a);
 *
 *      // Results of these comparison are undefined.
 *      a === b;
 *      Object.is(a, b);
 *  ```
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
} from './Option.js';

export { andThenForOption } from './andThen.js';
export { andThenAsyncForOption } from './andThenAsync.js';
export { filterForOption } from './filter.js';
export { flattenForOption } from './flatten.js';
export { inspectOption } from './inspect.js';
export { mapForOption } from './map.js';
export { mapAsyncForOption } from './mapAsync.js';
export { mapOrForOption } from './mapOr.js';
export { mapOrAsyncForOption } from './mapOrAsync.js';
export { mapOrElseForOption } from './mapOrElse.js';
export { mapOrElseAsyncForOption } from './mapOrElseAsync.js';
export { orElseForOption } from './orElse.js';
export { orElseAsyncForOption } from './orElseAsync.js';
export { transposeForOption } from './transpose.js';
export { unwrapOrFromOption } from './unwrapOr.js';
export { unwrapOrElseFromOption } from './unwrapOrElse.js';
export { unwrapOrElseAsyncFromOption } from './unwrapOrElseAsync.js';

import { expectSome, unwrapSome } from './Option.js';

/**
 *  @deprecated
 *  This is an alias for backward compatibility.
 *  Please use {@link expectSome} instead.
 *  This might be removed in v34 or later.
 */
export const expect: typeof expectSome = expectSome;

/**
 *  @deprecated
 *  This is an alias for backward compatibility.
 *  Please use {@link unwrapSome} instead.
 *  This might be removed in v34 or later.
 */
export const unwrap: typeof unwrapSome = unwrapSome;

import { andForOption as andForOptionOriginal } from './and.js';
import { andThenForOption } from './andThen.js';
import { andThenAsyncForOption } from './andThenAsync.js';
import { equalForOption as equalForOptionOriginal } from './equal.js';
import { filterForOption } from './filter.js';
import { flattenForOption } from './flatten.js';
import { inspectOption } from './inspect.js';
import { mapForOption } from './map.js';
import { mapAsyncForOption } from './mapAsync.js';
import { mapOrForOption } from './mapOr.js';
import { mapOrAsyncForOption } from './mapOrAsync.js';
import { mapOrElseForOption } from './mapOrElse.js';
import { mapOrElseAsyncForOption } from './mapOrElseAsync.js';
import { orForOption as orForOptionOriginal } from './or.js';
import { orElseForOption } from './orElse.js';
import { orElseAsyncForOption } from './orElseAsync.js';
import { transposeForOption } from './transpose.js';
import { unwrapOrFromOption } from './unwrapOr.js';
import { unwrapOrElseFromOption } from './unwrapOrElse.js';
import { unwrapOrElseAsyncFromOption } from './unwrapOrElseAsync.js';

/**
 *  @deprecated
 *  Please use `andForOption` in `option-t/PlainOption/and`.
 *  This might be removed in v34 or later.
 */
export const and: typeof andForOptionOriginal = andForOptionOriginal;

/**
 *  @deprecated
 *  Please use `andForOption` in `option-t/PlainOption/and`.
 *  This might be removed in v34 or later.
 */
export const andForOption: typeof andForOptionOriginal = andForOptionOriginal;

/**
 *  @deprecated
 *  Please use {@link andThenForOption}
 *  This might be removed in v34 or later.
 */
export const andThen: typeof andThenForOption = andThenForOption;

/**
 *  @deprecated
 *  Please use {@link andThenAsyncForOption}
 *  This might be removed in v34 or later.
 */
export const andThenAsync: typeof andThenAsyncForOption = andThenAsyncForOption;

/**
 *  @deprecated
 *  Please use `equalForOption` in `option-t/PlainOption/equal`
 *  This might be removed in v34 or later.
 */
export const equal: typeof equalForOptionOriginal = equalForOptionOriginal;

/**
 *  @deprecated
 *  Please use `equalForOption` in `option-t/PlainOption/equal`
 *  This might be removed in v34 or later.
 */
export const equalForOption: typeof equalForOptionOriginal = equalForOptionOriginal;

/**
 *  @deprecated
 *  Please use {@link filterForOption}
 *  This might be removed in v34 or later.
 */
export const filter: typeof filterForOption = filterForOption;

/**
 *  @deprecated
 *  Please use {@link flattenForOption}
 *  This might be removed in v34 or later.
 */
export const flatten: typeof flattenForOption = flattenForOption;

/**
 *  @deprecated
 *  Please use {@link inspectOption}
 *  This might be removed in v34 or later.
 */
export const inspect: typeof inspectOption = inspectOption;

/**
 *  @deprecated
 *  Please use {@link mapForOption}
 *  This might be removed in v34 or later.
 */
export const map: typeof mapForOption = mapForOption;

/**
 *  @deprecated
 *  Please use {@link mapAsyncForOption}
 *  This might be removed in v34 or later.
 */
export const mapAsync: typeof mapAsyncForOption = mapAsyncForOption;

/**
 *  @deprecated
 *  Please use {@link mapOrForOption}
 *  This might be removed in v34 or later.
 */
export const mapOr: typeof mapOrForOption = mapOrForOption;

/**
 *  @deprecated
 *  Please use {@link mapOrAsyncForOption}
 *  This might be removed in v34 or later.
 */
export const mapOrAsync: typeof mapOrAsyncForOption = mapOrAsyncForOption;

/**
 *  @deprecated
 *  Please use {@link mapOrElseForOption}
 *  This might be removed in v34 or later.
 */
export const mapOrElse: typeof mapOrElseForOption = mapOrElseForOption;

/**
 *  @deprecated
 *  Please use {@link mapOrElseAsyncForOption}
 *  This might be removed in v34 or later.
 */
export const mapOrElseAsync: typeof mapOrElseAsyncForOption = mapOrElseAsyncForOption;

/**
 *  @deprecated
 *  Please use `orForOption` in `option-t/PlainOption/or`
 *  This might be removed in v34 or later.
 */
export const orForOption: typeof orForOptionOriginal = orForOptionOriginal;

/**
 *  @deprecated
 *  Please use `orForOption` in `option-t/PlainOption/or`
 *  This might be removed in v34 or later.
 */
export const or: typeof orForOptionOriginal = orForOptionOriginal;

/**
 *  @deprecated
 *  Please use {@link orElseForOption}
 *  This might be removed in v34 or later.
 */
export const orElse: typeof orElseForOption = orElseForOption;

/**
 *  @deprecated
 *  Please use {@link orElseAsyncForOption}
 *  This might be removed in v34 or later.
 */
export const orElseAsync: typeof orElseAsyncForOption = orElseAsyncForOption;

/**
 *  @deprecated
 *  Please use {@link transposeForOption}
 *  This might be removed in v34 or later.
 */
export const transpose: typeof transposeForOption = transposeForOption;

/**
 *  @deprecated
 *  Please use {@link unwrapOrFromOption}
 *  This might be removed in v34 or later.
 */
export const unwrapOr: typeof unwrapOrFromOption = unwrapOrFromOption;

/**
 *  @deprecated
 *  Please use {@link unwrapOrElseFromOption}
 *  This might be removed in v34 or later.
 */
export const unwrapOrElse: typeof unwrapOrElseFromOption = unwrapOrElseFromOption;

/**
 *  @deprecated
 *  Please use {@link unwrapOrElseAsyncFromOption}
 *  This might be removed in v34 or later.
 */
export const unwrapOrElseAsync: typeof unwrapOrElseAsyncFromOption = unwrapOrElseAsyncFromOption;
