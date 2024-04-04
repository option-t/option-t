/* eslint sort-keys: ["error", "asc", { caseSensitive: true }] */

import test from 'ava';
import { testImportExposedPath } from './helper.mjs';

testImportExposedPath(
    test,
    Object.keys({
        './PlainOption': null,
        './PlainOption/Option': null,
        './PlainOption/and': null,
        './PlainOption/andThen': null,
        './PlainOption/andThenAsync': null,
        './PlainOption/asMut': null,
        './PlainOption/drop': null,
        './PlainOption/equal': null,
        './PlainOption/filter': null,
        './PlainOption/flatten': null,
        './PlainOption/fromResult': null,
        './PlainOption/inspect': null,
        './PlainOption/map': null,
        './PlainOption/mapAsync': null,
        './PlainOption/mapOr': null,
        './PlainOption/mapOrAsync': null,
        './PlainOption/mapOrElse': null,
        './PlainOption/mapOrElseAsync': null,
        './PlainOption/namespace': null,
        './PlainOption/okOr': null,
        './PlainOption/okOrElse': null,
        './PlainOption/or': null,
        './PlainOption/orElse': null,
        './PlainOption/orElseAsync': null,
        './PlainOption/toNullable': null,
        './PlainOption/toUndefinable': null,
        './PlainOption/transpose': null,
        './PlainOption/unwrapOr': null,
        './PlainOption/unwrapOrElse': null,
        './PlainOption/unwrapOrElseAsync': null,
        './PlainOption/xor': null,
    }),
);
