export {
    NotNullAndUndefined,
    Maybe,
    isNotNullAndUndefined,
    isNullOrUndefined,
} from './Maybe.ts';
// XXX: `and()` operation is equivalent of `a && b` so we don't ship it by default set.
//export { andForMaybe as and } from './and.ts';
export { andThenForMaybe as andThen } from './andThen.ts';
export { expectNotNullAndUndefined as expect } from './expect.ts';
export { mapForMaybe as map } from './map.ts';
export { mapOrForMaybe as mapOr } from './mapOr.ts';
export { mapOrElseForMaybe as mapOrElse } from './mapOrElse.ts';
// XXX: `or()` operation is equivalent of `a || b` so we don't ship it by default set.
// export { orForMaybe as or } from './or.ts';
export { orElseForMaybe as orElse } from './orElse.ts';
export { tapMaybe as tap } from './tap.ts';
export { unwrapMaybe as unwrap } from './unwrap.ts';
export { unwrapOrFromMaybe as unwrapOr } from './unwrapOr.ts';
export { unwrapOrElseFromMaybe as unwrapOrElse } from './unwrapOrElse.ts';
