/**
 *  XXX:
 *  This module is designed to use as `import * as PlainResult from 'option-t/PlainResult/namespace';`.
 *  This is not designed for other usecases. Please do not use for other cases.
 */
export {
    createErr,
    createOk,
    expectErr,
    expectOk,
    isErr,
    isOk,
    unwrapErr,
    unwrapOk,
    type Err,
    type Ok,
    type Result,
} from './result.js';

export { andThenForResult as andThen } from './and_then.js';
export { andThenAsyncForResult as andThenAsync } from './and_then_async.js';
export { flattenForResult as flatten } from './flatten.js';
export {
    inspectBothOfResult as inspectBoth,
    inspectErrOfResult as inspectErr,
    inspectOkOfResult as inspectOk,
} from './inspect.js';
export { mapForResult as map } from './map.js';
export { mapAsyncForResult as mapAsync } from './map_async.js';
export { mapErrForResult as mapErr } from './map_err.js';
export { mapErrAsyncForResult as mapErrAsync } from './map_err_async.js';
export { mapOrForResult as mapOr } from './map_or.js';
export { mapOrAsyncForResult as mapOrAsync } from './map_or_async.js';
export { mapOrElseForResult as mapOrElse } from './map_or_else.js';
export { mapOrElseAsyncForResult as mapOrElseAsync } from './map_or_else_async.js';
export { orElseForResult as orElse } from './or_else.js';
export { orElseAsyncForResult as orElseAsync } from './or_else_async.js';
export { toNullableFromErr, toNullableFromOk } from './to_nullable.js';
export { toUndefinableFromErr, toUndefinableFromOk } from './to_undefinable.js';
export {
    transposeNullableForResult as transposeNullable,
    transposeUndefinableForResult as transposeUndefinable,
} from './transpose.js';
export { unwrapOrFromResult as unwrapOr } from './unwrap_or.js';
export { unwrapOrElseFromResult as unwrapOrElse } from './unwrap_or_else.js';
export { unwrapOrElseAsyncFromResult as unwrapOrElseAsync } from './unwrap_or_else_async.js';
