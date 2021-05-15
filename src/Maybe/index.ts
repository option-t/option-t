export { NotNullAndUndefined, Maybe, isNotNullAndUndefined, isNullOrUndefined } from './Maybe';
// XXX: `and()` operation is equivalent of `a && b` so we don't ship it by default set.
//export { andForMaybe as and } from './and';
export { andThenForMaybe as andThen } from './andThen';
export { andThenAsyncForMaybe as andThenAsync } from './andThenAsync';
export { expectNotNullAndUndefined as expect } from './expect';
export { mapForMaybe as map } from './map';
export { mapAsyncForMaybe as mapAsync } from './mapAsync';
export { mapOrForMaybe as mapOr } from './mapOr';
export { mapOrElseForMaybe as mapOrElse } from './mapOrElse';
// XXX: `or()` operation is equivalent of `a || b` so we don't ship it by default set.
// export { orForMaybe as or } from './or';
export { orElseForMaybe as orElse } from './orElse';
export { tapMaybe as tap } from './tap';
export { unwrapMaybe as unwrap } from './unwrap';
export { unwrapOrFromMaybe as unwrapOr } from './unwrapOr';
export { unwrapOrElseFromMaybe as unwrapOrElse } from './unwrapOrElse';
