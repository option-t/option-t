export {
    type NotNullOrUndefined,
    type Maybe,
    isNotNullOrUndefined,
    isNullOrUndefined,
    expectNotNullOrUndefined,
    unwrapMaybe,
} from './Maybe.js';
// XXX: `and()` operation is equivalent of `a && b` so we don't ship it by default set.
//export { andForMaybe } from './and.js';
export { andThenForMaybe } from './andThen.js';
export { andThenAsyncForMaybe } from './andThenAsync.js';
export { inspectMaybe } from './inspect.js';
export { mapForMaybe } from './map.js';
export { mapAsyncForMaybe } from './mapAsync.js';
export { mapOrForMaybe } from './mapOr.js';
export { mapOrAsyncForMaybe } from './mapOrAsync.js';
export { mapOrElseForMaybe } from './mapOrElse.js';
export { mapOrElseAsyncForMaybe } from './mapOrElseAsync.js';
// XXX: `or()` operation is equivalent of `a || b` so we don't ship it by default set.
// export { orForMaybe } from './or.js';
export { orElseForMaybe } from './orElse.js';
export { orElseAsyncForMaybe } from './orElseAsync.js';
export { unwrapOrFromMaybe } from './unwrapOr.js';
export { unwrapOrElseFromMaybe } from './unwrapOrElse.js';
export { unwrapOrElseAsyncFromMaybe } from './unwrapOrElseAsync.js';
