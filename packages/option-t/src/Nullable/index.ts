export {
    type NotNull,
    type Nullable,
    isNotNull,
    isNull,
    expectNotNull,
    unwrapNullable,
} from './Nullable.js';
// XXX: `and()` operation is equivalent of `a && b` so we don't ship it by default set.
//export { andForNullable as and } from './and.js';
export { andThenForNullable as andThen } from './andThen.js';
export { andThenAsyncForNullable as andThenAsync } from './andThenAsync.js';
export { inspectNullable as inspect } from './inspect.js';
export { mapForNullable as map } from './map.js';
export { mapAsyncForNullable as mapAsync } from './mapAsync.js';
export { mapOrForNullable as mapOr } from './mapOr.js';
export { mapOrAsyncForNullable as mapOrAsync } from './mapOrAsync.js';
export { mapOrElseForNullable as mapOrElse } from './mapOrElse.js';
export { mapOrElseAsyncForNullable as mapOrElseAsync } from './mapOrElseAsync.js';
// XXX: `or()` operation is equivalent of `a || b` so we don't ship it by default set.
// export { orForNullable as or } from './or.js';
export { orElseForNullable as orElse } from './orElse.js';
export { orElseAsyncForNullable as orElseAsync } from './orElseAsync.js';
export { unwrapOrFromNullable as unwrapOr } from './unwrapOr.js';
export { unwrapOrElseFromNullable as unwrapOrElse } from './unwrapOrElse.js';
export { unwrapOrElseAsyncFromNullable as unwrapOrElseAsync } from './unwrapOrElseAsync.js';

import { expectNotNull, unwrapNullable } from './Nullable.js';

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
