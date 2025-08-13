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
} from '../core/result.js';

export { andThenForResult as andThen } from '../operators/and_then.js';
export { andThenAsyncForResult as andThenAsync } from '../operators/and_then_async.js';
export { flattenForResult as flatten } from '../operators/flatten.js';
export { fromPromiseSettledResultToResult as fromPromiseSettledResult } from '../operators/from_promise_settled_result.js';
export {
    inspectBothForResult as inspectBoth,
    inspectErrForResult as inspectErr,
    inspectOkForResult as inspectOk,
} from '../operators/inspect.js';
export {
    isErrAndForResult as isErrAnd,
    isErrAndWithEnsureTypeForResult as isErrAndWithEnsureType,
} from '../operators/is_err_and.js';
export {
    isOkAndForResult as isOkAnd,
    isOkAndWithEnsureTypeForResult as isOkAndWithEnsureType,
} from '../operators/is_ok_and.js';
export { mapForResult as map } from '../operators/map.js';
export { mapAsyncForResult as mapAsync } from '../operators/map_async.js';
export { mapErrForResult as mapErr } from '../operators/map_err.js';
export { mapErrAsyncForResult as mapErrAsync } from '../operators/map_err_async.js';
export { mapOrForResult as mapOr } from '../operators/map_or.js';
export { mapOrAsyncForResult as mapOrAsync } from '../operators/map_or_async.js';
export { mapOrElseForResult as mapOrElse } from '../operators/map_or_else.js';
export { mapOrElseAsyncForResult as mapOrElseAsync } from '../operators/map_or_else_async.js';
export { orElseForResult as orElse } from '../operators/or_else.js';
export { orElseAsyncForResult as orElseAsync } from '../operators/or_else_async.js';
export { toNullableFromErr, toNullableFromOk } from '../operators/to_nullable.js';
export { toUndefinableFromErr, toUndefinableFromOk } from '../operators/to_undefinable.js';
export {
    transposeResultToNullable as transposeToNullable,
    transposeResultToUndefinable as transposeToUndefinable,
} from '../operators/transpose.js';
export {
    tryCatchIntoResult as tryCatchInto,
    tryCatchIntoResultWithEnsureError as tryCatchIntoWithEnsureError,
} from '../operators/try_catch.js';
export {
    tryCatchIntoResultAsync as tryCatchIntoAsync,
    tryCatchIntoResultWithEnsureErrorAsync as tryCatchIntoWithEnsureErrorAsync,
} from '../operators/try_catch_async.js';
export { unwrapOrForResult as unwrapOr } from '../operators/unwrap_or.js';
export { unwrapOrElseForResult as unwrapOrElse } from '../operators/unwrap_or_else.js';
export { unwrapOrElseAsyncForResult as unwrapOrElseAsync } from '../operators/unwrap_or_else_async.js';
export { unwrapOrThrowForResult as unwrapOrThrow } from '../operators/unwrap_or_throw.js';

// XXX:
//  We don't expose these itens that is unsafe operation.
//
//  - unsafe/as_mut
//  - unsafe/drop
//
// XXX:
//  _equals, we don't expose it by this due to that is provided for exception case
//
// XXX:
//  To keep a simple API set,
//  we don't expose APIs from here that takes multiple values to compose a data flow pipeline.
//  We may reconsider it if pipeline operator syntax proposal is advanced to the standard.
//  But please import them directly from their path at this moment.
//
//  - and
//  - or
//  - filter
//  - xor
//  - zip
//  - zipWith
//  - zipWithAsync
