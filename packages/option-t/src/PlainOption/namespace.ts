/**
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
} from './Option.js';

export { andThenForOption as andThen } from './andThen.js';
export { andThenAsyncForOption as andThenAsync } from './andThenAsync.js';
export { filterForOption as filter } from './filter.js';
export { flattenForOption as flatten } from './flatten.js';
export { inspectOption as inspect } from './inspect.js';
export { mapForOption as map } from './map.js';
export { mapAsyncForOption as mapAsync } from './mapAsync.js';
export { mapOrForOption as mapOr } from './mapOr.js';
export { mapOrAsyncForOption as mapOrAsync } from './mapOrAsync.js';
export { mapOrElseForOption as mapOrElse } from './mapOrElse.js';
export { mapOrElseAsyncForOption as mapOrElseAsync } from './mapOrElseAsync.js';
export { okOrForPlainOption as okOr } from './okOr.js';
export { okOrElseForPlainOption as okOrElse } from './okOrElse.js';
export { orElseForOption as orElse } from './orElse.js';
export { orElseAsyncForOption as orElseAsync } from './orElseAsync.js';
export { transposeForOption as transpose } from './transpose.js';
export { unwrapOrFromOption as unwrapOr } from './unwrapOr.js';
export { unwrapOrElseFromOption as unwrapOrElse } from './unwrapOrElse.js';
export { unwrapOrElseAsyncFromOption as unwrapOrElseAsync } from './unwrapOrElseAsync.js';
