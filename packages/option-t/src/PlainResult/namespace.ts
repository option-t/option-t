/**
 *  XXX:
 *  This module is designed to use as `import * as PlainResult from 'option-t/PlainResult/namespace';`.
 *  This is not designed for other usecases. Please do not use for other cases.
 */
export {
    type Result,
    type Ok,
    type Err,
    createOk,
    createErr,
    isOk,
    isErr,
    unwrapOk,
    unwrapErr,
    expectOk,
    expectErr,
} from './Result.js';

export { andThenForResult as andThen } from './andThen.js';
export { andThenAsyncForResult as andThenAsync } from './andThenAsync.js';
export { flattenForResult as flatten } from './flatten.js';
export {
    inspectOkOfResult as inspectOk,
    inspectErrOfResult as inspectErr,
    inspectBothOfResult as inspectBoth,
} from './inspect.js';
export { mapForResult as map } from './map.js';
export { mapAsyncForResult as mapAsync } from './mapAsync.js';
export { mapOrForResult as mapOr } from './mapOr.js';
export { mapOrAsyncForResult as mapOrAsync } from './mapOrAsync.js';
export { mapOrElseForResult as mapOrElse } from './mapOrElse.js';
export { mapOrElseAsyncForResult as mapOrElseAsync } from './mapOrElseAsync.js';
export { mapErrForResult as mapErr } from './mapErr.js';
export { mapErrAsyncForResult as mapErrAsync } from './mapErrAsync.js';
export { orElseForResult as orElse } from './orElse.js';
export { orElseAsyncForResult as orElseAsync } from './orElseAsync.js';
export { toNullableFromErr, toNullableFromOk } from './toNullable.js';
export { toUndefinableFromErr, toUndefinableFromOk } from './toUndefinable.js';
export {
    transposeNullableForResult as transposeNullable,
    transposeUndefinableForResult as transposeUndefinable,
} from './transpose.js';
export { unwrapOrFromResult as unwrapOr } from './unwrapOr.js';
export { unwrapOrElseFromResult as unwrapOrElse } from './unwrapOrElse.js';
export { unwrapOrElseAsyncFromResult as unwrapOrElseAsync } from './unwrapOrElseAsync.js';
