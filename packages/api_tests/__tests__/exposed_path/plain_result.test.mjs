import test from 'ava';
import { testImportExposedPath } from './helper.mjs';

testImportExposedPath(
    test,
    Object.keys({
        './PlainResult': null,
        './PlainResult/and': null,
        './PlainResult/andThen': null,
        './PlainResult/andThenAsync': null,
        './PlainResult/asMut': null,
        './PlainResult/drop': null,
        './PlainResult/equal': null,
        './PlainResult/flatten': null,
        './PlainResult/fromPromiseSettledResult': null,
        './PlainResult/inspect': null,
        './PlainResult/map': null,
        './PlainResult/mapAsync': null,
        './PlainResult/mapErr': null,
        './PlainResult/mapErrAsync': null,
        './PlainResult/mapOr': null,
        './PlainResult/mapOrAsync': null,
        './PlainResult/mapOrElse': null,
        './PlainResult/mapOrElseAsync': null,
        './PlainResult/namespace': null,
        './PlainResult/or': null,
        './PlainResult/orElse': null,
        './PlainResult/orElseAsync': null,
        './PlainResult/Result': null,
        './PlainResult/toNullable': null,
        './PlainResult/toUndefinable': null,
        './PlainResult/tryCatch': null,
        './PlainResult/tryCatchAsync': null,
        './PlainResult/transpose': null,
        './PlainResult/unwrapOr': null,
        './PlainResult/unwrapOrElse': null,
        './PlainResult/unwrapOrElseAsync': null,
        './PlainResult/unwrapOrThrowError': null,
    }),
);
