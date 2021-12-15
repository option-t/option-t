export { NotNullAndUndefined, Maybe, isNotNullAndUndefined, isNullOrUndefined } from './Maybe';
// XXX: `and()` operation is equivalent of `a && b` so we don't ship it by default set.
//export { andForMaybe as and } from './and';
export { andThenForMaybe as andThen } from './andThen';
export { andThenAsyncForMaybe as andThenAsync } from './andThenAsync';
export { expectNotNullAndUndefined as expect } from './expect';
export { mapForMaybe as map } from './map';
export { mapAsyncForMaybe as mapAsync } from './mapAsync';
export { mapOrForMaybe as mapOr } from './mapOr';
export { mapOrAsyncForMaybe as mapOrAsync } from './mapOrAsync';
export { mapOrElseForMaybe as mapOrElse } from './mapOrElse';
export { mapOrElseAsyncForMaybe as mapOrElseAsync } from './mapOrElseAsync';
// XXX: `or()` operation is equivalent of `a || b` so we don't ship it by default set.
// export { orForMaybe as or } from './or';
export { orElseForMaybe as orElse } from './orElse';
export { orElseAsyncForMaybe as orElseAsync } from './orElseAsync';
export { inspectMaybe as inspect } from './inspect';
export { unwrapMaybe as unwrap } from './unwrap';
export { unwrapOrFromMaybe as unwrapOr } from './unwrapOr';
export { unwrapOrElseFromMaybe as unwrapOrElse } from './unwrapOrElse';
export { unwrapOrElseAsyncFromMaybe as unwrapOrElseAsync } from './unwrapOrElseAsync';
