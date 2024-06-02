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
    // FIXME(#2173):
    // It's might better to expose this type as `Type`.
} from '../result.js';

export { andThenForResult as andThen } from '../and_then.js';
export { andThenAsyncForResult as andThenAsync } from '../and_then_async.js';
export { flattenForResult as flatten } from '../flatten.js';
export { fromPromiseSettledResultToResult as fromPromiseSettledResult } from '../from_promise_settled_result.js';
export {
    inspectBothForResult as inspectBoth,
    inspectErrForResult as inspectErr,
    inspectOkForResult as inspectOk,
} from '../inspect.js';
export { mapForResult as map } from '../map.js';
export { mapAsyncForResult as mapAsync } from '../map_async.js';
export { mapErrForResult as mapErr } from '../map_err.js';
export { mapErrAsyncForResult as mapErrAsync } from '../map_err_async.js';
export { mapOrForResult as mapOr } from '../map_or.js';
export { mapOrAsyncForResult as mapOrAsync } from '../map_or_async.js';
export { mapOrElseForResult as mapOrElse } from '../map_or_else.js';
export { mapOrElseAsyncForResult as mapOrElseAsync } from '../map_or_else_async.js';
export { orElseForResult as orElse } from '../or_else.js';
export { orElseAsyncForResult as orElseAsync } from '../or_else_async.js';
export { toNullableFromErr, toNullableFromOk } from '../to_nullable.js';
export { toUndefinableFromErr, toUndefinableFromOk } from '../to_undefinable.js';
export {
    transposeResultToNullable as transposeToNullable,
    transposeResultToUndefinable as transposeToUndefinable,
} from '../transpose.js';
export {
    tryCatchIntoResult as tryCatchInto,
    tryCatchIntoResultWithEnsureError as tryCatchIntoWithEnsureError,
} from '../try_catch.js';
export {
    tryCatchIntoResultAsync as tryCatchIntoAsync,
    tryCatchIntoResultWithEnsureErrorAsync as tryCatchIntoWithEnsureErrorAsync,
} from '../try_catch_async.js';
export { unwrapOrForResult as unwrapOr } from '../unwrap_or.js';
export { unwrapOrElseForResult as unwrapOrElse } from '../unwrap_or_else.js';
export { unwrapOrElseAsyncForResult as unwrapOrElseAsync } from '../unwrap_or_else_async.js';
export { unwrapOrThrowForResult as unwrapOrThrow } from '../unwrap_or_throw.js';
/**
 *  @deprecated 48.1.0
 */
export { unwrapOrThrowWithEnsureErrorForResult as unwrapOrThrowWithEnsureError } from '../deprecated/unwrap_or_throw_error.js';

// XXX:
//  We don't expose these itens that is unsafe operation.
//
//  - as_mut
//  - drop
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
//  - is_err_and
//  - is_ok_and
//  - xor
//  - zip
//  - zipWith
//  - zipWithAsync
