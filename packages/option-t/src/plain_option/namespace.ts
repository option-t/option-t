/**
 *  @deprecated 37.1.0
 *
 *  Consider to use `Nullable<T>`, `Undefinable<T>`, or `Maybe<T>` to express an absence of a value.
 *  In JavaScript, they satisfy almost use cases. Probably, you might not have to use this type.
 *
 *  --------
 *
 *  XXX:
 *  This module is designed to use as `import * as PlainOption from 'option-t/PlainOption/namespace';`.
 *  This is not designed for other usecases. Please do not use for other cases.
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
} from './option.js';

export { andThenForOption as andThen } from './and_then.js';
export { andThenAsyncForOption as andThenAsync } from './and_then_async.js';
export { filterForOption as filter } from './filter.js';
export { flattenForOption as flatten } from './flatten.js';
export { inspectOption as inspect } from './inspect.js';
export { mapForOption as map } from './map.js';
export { mapAsyncForOption as mapAsync } from './map_async.js';
export { mapOrForOption as mapOr } from './map_or.js';
export { mapOrAsyncForOption as mapOrAsync } from './map_or_async.js';
export { mapOrElseForOption as mapOrElse } from './map_or_else.js';
export { mapOrElseAsyncForOption as mapOrElseAsync } from './map_or_else_async.js';
export { okOrForPlainOption as okOr } from './ok_or.js';
export { okOrElseForPlainOption as okOrElse } from './ok_or_else.js';
export { orElseForOption as orElse } from './or_else.js';
export { orElseAsyncForOption as orElseAsync } from './or_else_async.js';
export { transposeForOption as transpose } from './transpose.js';
export { unwrapOrFromOption as unwrapOr } from './unwrap_or.js';
export { unwrapOrElseFromOption as unwrapOrElse } from './unwrap_or_else.js';
export { unwrapOrElseAsyncFromOption as unwrapOrElseAsync } from './unwrap_or_else_async.js';
