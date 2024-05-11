/**
 *  XXX:
 *  This module is designed to use as `import * as Nullable from 'option-t/Nullable/namespace';`.
 *  This is not designed for other usecases. Please do not use for other cases.
 */
export {
    type NotNull,
    type Nullable,
    expectNotNull,
    isNotNull,
    isNull,
    unwrapNullable,
    andThen,
    andThenAsync,
    inspect,
    map,
    mapAsync,
    mapOr,
    mapOrAsync,
    mapOrElse,
    mapOrElseAsync,
    okOr,
    okOrElse,
    okOrElseAsync,
    orElse,
    orElseAsync,
    toResultErr,
    toResultOk,
    toUndefinable,
    unwrapOr,
    unwrapOrElse,
    unwrapOrElseAsync,
} from './internal/intermediate_namespace.js';
