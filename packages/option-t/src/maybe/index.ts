export {
    expectNotNullOrUndefined,
    isNotNullOrUndefined,
    isNullOrUndefined,
    unwrapMaybe,
    type Maybe,
    type NotNullOrUndefined,
} from './maybe.js';

// XXX: `and()` operation is equivalent of `a && b` so we don't ship it by default set.
//export { andForMaybe } from './and.js';
export { andThenForMaybe } from './and_then.js';
export { andThenAsyncForMaybe } from './and_then_async.js';
export { inspectMaybe } from './inspect.js';
export { mapForMaybe } from './map.js';
export { mapAsyncForMaybe } from './map_async.js';
export { mapOrForMaybe } from './map_or.js';
export { mapOrAsyncForMaybe } from './map_or_async.js';
export { mapOrElseForMaybe } from './map_or_else.js';
export { mapOrElseAsyncForMaybe } from './map_or_else_async.js';
// XXX: `or()` operation is equivalent of `a || b` so we don't ship it by default set.
// export { orForMaybe } from './or.js';
export { orElseForMaybe } from './or_else.js';
export { orElseAsyncForMaybe } from './or_else_async.js';
export { unwrapOrFromMaybe } from './unwrap_or.js';
export { unwrapOrElseFromMaybe } from './unwrap_or_else.js';
export { unwrapOrElseAsyncFromMaybe } from './unwrap_or_else_async.js';
