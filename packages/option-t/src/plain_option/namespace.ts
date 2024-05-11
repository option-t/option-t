/**
 *  @deprecated 37.1.0
 *
 *  Consider to use `Nullable<T>`, `Undefinable<T>`, or `Maybe<T>` to express an absence of a value.
 *  In JavaScript, they satisfy almost use cases. Probably, you might not have to use this type.
 *
 *  --------
 *
 *  XXX:
 *  This module is designed to use as `import * as PlainOption from 'option-t/PlainOption/namespace';`.
 *  This is not designed for other usecases. Please do not use for other cases.
 */
export {
    createNone,
    createSome,
    expectSome,
    isNone,
    isSome,
    unwrapSome,
    type Option,
    // XXX:
    //  If we export self type as `Type`, vscode's IntelliSense (tsserver) will try to import `Type`
    //  or import it directly from this path when you input `T` of `Type` or some case you want to import `Type`.
    //  Because this module path is exposed to userland via `exports` field.
    //  It's less ergonomic so we don't export here.
    type Some,
    type None,
    andThen,
    andThenAsync,
    filter,
    flatten,
    fromErrToOption,
    fromOkToOption,
    inspect,
    map,
    mapAsync,
    mapOr,
    mapOrAsync,
    mapOrElse,
    mapOrElseAsync,
    okOr,
    okOrElse,
    orElse,
    orElseAsync,
    toNullable,
    toUndefinable,
    transpose,
    transposeFromResult,
    unwrapOr,
    unwrapOrElse,
    unwrapOrElseAsync,
} from './internal/intermediate_namespace.js';
