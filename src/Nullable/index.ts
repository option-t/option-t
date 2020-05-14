export {
    NotNull,
    Nullable,
    isNotNull,
    isNull,
} from './Nullable.ts';
// XXX: `and()` operation is equivalent of `a && b` so we don't ship it by default set.
//export { andForNullable as and } from './and.ts';
export { andThenForNullable as andThen } from './andThen.ts';
export { expectNotNull as expect } from './expect.ts';
export { mapForNullable as map } from './map.ts';
export { mapOrForNullable as mapOr } from './mapOr.ts';
export { mapOrElseForNullable as mapOrElse } from './mapOrElse.ts';
// XXX: `or()` operation is equivalent of `a || b` so we don't ship it by default set.
// export { orForNullable as or } from './or.ts';
export { orElseForNullable as orElse } from './orElse.ts';
export { tapNullable as tap } from './tap.ts';
export { unwrapNullable as unwrap } from './unwrap.ts';
export { unwrapOrFromNullable as unwrapOr } from './unwrapOr.ts';
export { unwrapOrElseFromNullable as unwrapOrElse } from './unwrapOrElse.ts';
