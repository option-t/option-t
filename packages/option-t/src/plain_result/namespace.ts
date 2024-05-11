/**
 *  XXX:
 *  This module is designed to use as `import * as PlainResult from 'option-t/PlainResult/namespace';`.
 *  This is not designed for other usecases. Please do not use for other cases.
 */
export {
    type Err,
    type Ok,
    type Result,
    // XXX:
    //  If we export self type as `Type`, vscode's IntelliSense (tsserver) will try to import `Type`
    //  or import it directly from this path when you input `T` of `Type` or some case you want to import `Type`.
    //  Because this module path is exposed to userland via `exports` field.
    //  It's less ergonomic so we don't export here.
    createErr,
    createOk,
    expectErr,
    expectOk,
    isErr,
    isOk,
    unwrapErr,
    unwrapOk,
    andThen,
    andThenAsync,
    flatten,
    fromPromiseSettledResult,
    inspectBoth,
    inspectErr,
    inspectOk,
    map,
    mapAsync,
    mapErr,
    mapErrAsync,
    mapOr,
    mapOrAsync,
    mapOrElse,
    mapOrElseAsync,
    orElse,
    orElseAsync,
    toNullableFromOk,
    toNullableFromErr,
    toUndefinableFromErr,
    toUndefinableFromOk,
    transposeToNullable,
    transposeToUndefinable,
    tryCatchInto,
    tryCatchIntoWithEnsureError,
    tryCatchIntoAsync,
    tryCatchIntoWithEnsureErrorAsync,
    unwrapOr,
    unwrapOrElse,
    unwrapOrElseAsync,
} from './internal/intermediate_namespace.js';
