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

// TODO: #2063
export { andThenForResult as andThen } from './and_then.js';
export { andThenAsyncForResult as andThenAsync } from './and_then_async.js';
// - We don't expose items from as_mut.js that is unsafe operation.
// - We don't expose items from drop.js that is unsafe operation.
// - We don't expose items from equal.js that is provided for exception case.
//   We don't recommend to compare this result type's value.
export { flattenForResult as flatten } from './flatten.js';
export { fromPromiseSettledResultToResult as fromPromiseSettledResult } from './from_promise_settled_result.js';
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
// TODO: #2067
export { orElseForResult as orElse } from './or_else.js';
export { orElseAsyncForResult as orElseAsync } from './or_else_async.js';
export { toNullableFromErr, toNullableFromOk } from './to_nullable.js';
// We don't export to_option since its type has been deprecated. #2062
export { toUndefinableFromErr, toUndefinableFromOk } from './to_undefinable.js';
export {
    transposeNullableForResult as transposeNullable,
    transposeUndefinableForResult as transposeUndefinable,
} from './transpose.js';
export {
    tryCatchIntoResult as tryCatchInto,
    tryCatchIntoResultWithEnsureError as tryCatchIntoWithEnsureError,
} from './try_catch.js';
export {
    tryCatchIntoResultAsync as tryCatchIntoAsync,
    tryCatchIntoResultWithEnsureErrorAsync as tryCatchIntoWithEnsureErrorAsync,
} from './try_catch_async.js';
export { unwrapOrFromResult as unwrapOr } from './unwrap_or.js';
export { unwrapOrElseFromResult as unwrapOrElse } from './unwrap_or_else.js';
export { unwrapOrElseAsyncFromResult as unwrapOrElseAsync } from './unwrap_or_else_async.js';
// - From this module, we don't expose items from unwrap_or_throw_error.js.
//   that is provided only for the case to bridge with exist codes.
//   We recommend to handle result type in that style.
