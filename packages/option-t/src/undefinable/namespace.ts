/**
 *  XXX:
 *  This module is designed to use as `import * as Undefinable from 'option-t/Undefinable/namespace';`.
 *  This is not designed for other usecases. Please do not use for other cases.
 */
export {
    type NotUndefined,
    type Undefinable,
    isNotUndefined,
    isUndefined,
    expectNotUndefined,
    unwrapUndefinable,
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
    toResultOk,
    toResultErr,
    unwrapOr,
    unwrapOrElse,
    unwrapOrElseAsync,
} from './internal/intermediate_namespace.js';
