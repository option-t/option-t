/**
 *  XXX:
 *  This module is designed to use as `import * as Maybe from 'option-t/Maybe/namespace';`.
 *  This is not designed for other usecases. Please do not use for other cases.
 */
export {
    type NotNullOrUndefined,
    type Maybe,
    isNotNullOrUndefined,
    isNullOrUndefined,
    expectNotNullOrUndefined,
    unwrapMaybe,
} from './Maybe.js';
// XXX: `and()` operation is equivalent of `a && b` so we don't ship it by
// default set.
// export { andForMaybe as and } from './and.js';
export { andThenForMaybe as andThen } from './andThen.js';
export { andThenAsyncForMaybe as andThenAsync } from './andThenAsync.js';
export { inspectMaybe as inspect } from './inspect.js';
export { mapForMaybe as map } from './map.js';
export { mapAsyncForMaybe as mapAsync } from './mapAsync.js';
export { mapOrForMaybe as mapOr } from './mapOr.js';
export { mapOrAsyncForMaybe as mapOrAsync } from './mapOrAsync.js';
export { mapOrElseForMaybe as mapOrElse } from './mapOrElse.js';
export { mapOrElseAsyncForMaybe as mapOrElseAsync } from './mapOrElseAsync.js';
// XXX: `or()` operation is equivalent of `a || b` so we don't ship it by
// default set. export { orForMaybe as or } from './or.js';
export { okOrForMaybe as okOr } from './okOr.js';
export { okOrElseForMaybe as okOrElse } from './okOrElse.js';
export { orElseForMaybe as orElse } from './orElse.js';
export { orElseAsyncForMaybe as orElseAsync } from './orElseAsync.js';
export { toNullableFromMaybe as toNullable } from './toNullable.js';
export {
    toResultErrFromMaybe as toResultErr,
    toResultOkFromMaybe as toResultOk,
} from './toPlainResult.js';
export { toUndefinableFromMaybe as toUndefinable } from './toUndefinable.js';
export { unwrapOrFromMaybe as unwrapOr } from './unwrapOr.js';
export { unwrapOrElseFromMaybe as unwrapOrElse } from './unwrapOrElse.js';
export { unwrapOrElseAsyncFromMaybe as unwrapOrElseAsync } from './unwrapOrElseAsync.js';
