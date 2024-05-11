/**
 *  XXX:
 *  This module is designed to use as `import * as Maybe from 'option-t/Maybe/namespace';`.
 *  This is not designed for other usecases. Please do not use for other cases.
 */
export {
    type NotNullOrUndefined,
    type Maybe,
    isNotNullOrUndefined,
    isNullOrUndefined,
    expectNotNullOrUndefined,
    unwrapMaybe,
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
    toNullable,
    toResultErr,
    toResultOk,
    toUndefinable,
    unwrapOr,
    unwrapOrElse,
    unwrapOrElseAsync,
} from './internal/intermediate_namespace.js';
