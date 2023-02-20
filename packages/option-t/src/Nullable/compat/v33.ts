/**
 *  @deprecated
 *  This might be removed in v35 or later.
 *  Please use `option-t/Undefinable` instead.
 */
export {
    type NotNull,
    type Nullable,
    isNotNull,
    isNull,
    expectNotNull,
    unwrapNullable,
} from '../Nullable.js';
// XXX: `and()` operation is equivalent of `a && b` so we don't ship it by default set.
//export { andForNullable as and } from '../and.js';
export { andThenForNullable, andThenForNullable as andThen } from '../andThen.js';
export {
    andThenAsyncForNullable,
    andThenAsyncForNullable as andThenAsync,
} from '../andThenAsync.js';
export { inspectNullable, inspectNullable as inspect } from '../inspect.js';
export { mapForNullable, mapForNullable as map } from '../map.js';
export { mapAsyncForNullable, mapAsyncForNullable as mapAsync } from '../mapAsync.js';
export { mapOrForNullable, mapOrForNullable as mapOr } from '../mapOr.js';
export { mapOrAsyncForNullable, mapOrAsyncForNullable as mapOrAsync } from '../mapOrAsync.js';
export { mapOrElseForNullable, mapOrElseForNullable as mapOrElse } from '../mapOrElse.js';
export {
    mapOrElseAsyncForNullable,
    mapOrElseAsyncForNullable as mapOrElseAsync,
} from '../mapOrElseAsync.js';
// XXX: `or()` operation is equivalent of `a || b` so we don't ship it by default set.
// export { orForNullable as or } from '../or.js';
export { orElseForNullable, orElseForNullable as orElse } from '../orElse.js';
export { orElseAsyncForNullable, orElseAsyncForNullable as orElseAsync } from '../orElseAsync.js';
export { unwrapOrFromNullable, unwrapOrFromNullable as unwrapOr } from '../unwrapOr.js';
export {
    unwrapOrElseFromNullable,
    unwrapOrElseFromNullable as unwrapOrElse,
} from '../unwrapOrElse.js';
export {
    unwrapOrElseAsyncFromNullable,
    unwrapOrElseAsyncFromNullable as unwrapOrElseAsync,
} from '../unwrapOrElseAsync.js';

import { expectNotNull, unwrapNullable } from '../Nullable.js';

/**
 *  @deprecated
 *  This is an alias for backward compatibility.
 *  Please use {@link expectNotNull} instead.
 */
export const expect: typeof expectNotNull = expectNotNull;

/**
 *  @deprecated
 *  This is an alias for backward compatibility.
 *  Please use {@link unwrapNullable} instead.
 */
export const unwrap: typeof unwrapNullable = unwrapNullable;
