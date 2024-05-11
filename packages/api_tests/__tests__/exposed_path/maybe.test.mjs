/* eslint sort-keys: ["error", "asc", { caseSensitive: true }] */

import test from 'ava';
import { testImportExposedPath } from './helper.mjs';

testImportExposedPath(
    test,
    Object.keys({
        './Maybe': null,
        './Maybe/Maybe': null,
        './Maybe/and': null,
        './Maybe/andThen': null,
        './Maybe/andThenAsync': null,
        './Maybe/experimental_ns': null,
        './Maybe/filter': null,
        './Maybe/filterAsync': null,
        './Maybe/inspect': null,
        './Maybe/map': null,
        './Maybe/mapAsync': null,
        './Maybe/mapOr': null,
        './Maybe/mapOrAsync': null,
        './Maybe/mapOrElse': null,
        './Maybe/mapOrElseAsync': null,
        './Maybe/namespace': null,
        './Maybe/okOr': null,
        './Maybe/okOrElse': null,
        './Maybe/okOrElseAsync': null,
        './Maybe/or': null,
        './Maybe/orElse': null,
        './Maybe/orElseAsync': null,
        './Maybe/toNullable': null,
        './Maybe/toPlainResult': null,
        './Maybe/toUndefinable': null,
        './Maybe/unwrapOr': null,
        './Maybe/unwrapOrElse': null,
        './Maybe/unwrapOrElseAsync': null,
        './Maybe/xor': null,
        './Maybe/zip': null,
        './Maybe/zipWith': null,
    }),
);
