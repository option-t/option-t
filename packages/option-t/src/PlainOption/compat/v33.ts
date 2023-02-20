/**
 *  @deprecated
 *  This might be removed in v35 or later.
 *  Please use `option-t/PlainOption` instead.
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
} from '../Option.js';

export { andForOption, andForOption as and } from '../and.js';
export { andThenForOption, andThenForOption as andThen } from '../andThen.js';
export { andThenAsyncForOption, andThenAsyncForOption as andThenAsync } from '../andThenAsync.js';
export { equalForOption, equalForOption as equal } from '../equal.js';
export { filterForOption, filterForOption as filter } from '../filter.js';
export { flattenForOption, flattenForOption as flatten } from '../flatten.js';
export { inspectOption, inspectOption as inspect } from '../inspect.js';
export { mapForOption, mapForOption as map } from '../map.js';
export { mapAsyncForOption, mapAsyncForOption as mapAsync } from '../mapAsync.js';
export { mapOrForOption, mapOrForOption as mapOr } from '../mapOr.js';
export { mapOrAsyncForOption, mapOrAsyncForOption as mapOrAsync } from '../mapOrAsync.js';
export { mapOrElseForOption, mapOrElseForOption as mapOrElse } from '../mapOrElse.js';
export {
    mapOrElseAsyncForOption,
    mapOrElseAsyncForOption as mapOrElseAsync,
} from '../mapOrElseAsync.js';
export { orForOption, orForOption as or } from '../or.js';
export { orElseForOption, orElseForOption as orElse } from '../orElse.js';
export { orElseAsyncForOption, orElseAsyncForOption as orElseAsync } from '../orElseAsync.js';
export { transposeForOption, transposeForOption as transpose } from '../transpose.js';
export { unwrapOrFromOption, unwrapOrFromOption as unwrapOr } from '../unwrapOr.js';
export { unwrapOrElseFromOption, unwrapOrElseFromOption as unwrapOrElse } from '../unwrapOrElse.js';
export {
    unwrapOrElseAsyncFromOption,
    unwrapOrElseAsyncFromOption as unwrapOrElseAsync,
} from '../unwrapOrElseAsync.js';

import { expectSome, unwrapSome } from '../Option.js';

/**
 *  @deprecated
 *  This is an alias for backward compatibility.
 *  Please use {@link expectSome} instead.
 */
export const expect: typeof expectSome = expectSome;

/**
 *  @deprecated
 *  This is an alias for backward compatibility.
 *  Please use {@link unwrapSome} instead.
 */
export const unwrap: typeof unwrapSome = unwrapSome;
