/* eslint sort-keys: ["error", "asc", { caseSensitive: true }] */

import test from 'ava';
import { testImportExposedPath } from './helper.mjs';

testImportExposedPath(
    test,
    Object.keys({
        './Undefinable': null,
        './Undefinable/Undefinable': null,
        './Undefinable/and': null,
        './Undefinable/andThen': null,
        './Undefinable/andThenAsync': null,
        './Undefinable/experimental_ns': null,
        './Undefinable/filter': null,
        './Undefinable/filterAsync': null,
        './Undefinable/inspect': null,
        './Undefinable/map': null,
        './Undefinable/mapAsync': null,
        './Undefinable/mapOr': null,
        './Undefinable/mapOrAsync': null,
        './Undefinable/mapOrElse': null,
        './Undefinable/mapOrElseAsync': null,
        './Undefinable/namespace': null,
        './Undefinable/okOr': null,
        './Undefinable/okOrElse': null,
        './Undefinable/okOrElseAsync': null,
        './Undefinable/or': null,
        './Undefinable/orElse': null,
        './Undefinable/orElseAsync': null,
        './Undefinable/toNullable': null,
        './Undefinable/toPlainResult': null,
        './Undefinable/unwrapOr': null,
        './Undefinable/unwrapOrElse': null,
        './Undefinable/unwrapOrElseAsync': null,
        './Undefinable/xor': null,
        './Undefinable/zip': null,
        './Undefinable/zipWith': null,
        './Undefinable/zipWithAsync': null,
    }),
);
