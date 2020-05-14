export {
    NotUndefined,
    Undefinable,
    isNotUndefined,
    isUndefined,
} from './Undefinable.ts';
// XXX: `and()` operation is equivalent of `a && b` so we don't ship it by default set.
//export { andForUndefinable as and} from './and.ts';
export { andThenForUndefinable as andThen} from './andThen.ts';
export { expectNotUndefined as expect } from './expect.ts';
export { mapForUndefinable as map } from './map.ts';
export { mapOrForUndefinable as mapOr } from './mapOr.ts';
export { mapOrElseForUndefinable as mapOrElse } from './mapOrElse.ts';
// XXX: `or()` operation is equivalent of `a || b` so we don't ship it by default set.
// export { orForUndefinable as or} from './or.ts';
export { orElseForUndefinable as orElse} from './orElse.ts';
export { tapUndefinable as tap } from './tap.ts';
export { unwrapUndefinable as unwrap } from './unwrap.ts';
export { unwrapOrFromUndefinable as unwrapOr } from './unwrapOr.ts';
export { unwrapOrElseFromUndefinable as unwrapOrElse } from './unwrapOrElse.ts';
