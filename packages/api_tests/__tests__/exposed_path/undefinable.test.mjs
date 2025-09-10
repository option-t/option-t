/* eslint sort-keys: ["error", "asc", { caseSensitive: true }] */

import test from 'ava';
import { testImportExposedPath } from './helper.mjs';

testImportExposedPath(
    test,
    Object.keys({
        './undefinable': null,
        './undefinable/and': null,
        './undefinable/and_then': null,
        './undefinable/and_then_async': null,
        './undefinable/compat/v54': null,
        './undefinable/filter': null,
        './undefinable/filter_async': null,
        './undefinable/inspect': null,
        './undefinable/map': null,
        './undefinable/map_async': null,
        './undefinable/map_or': null,
        './undefinable/map_or_async': null,
        './undefinable/map_or_else': null,
        './undefinable/map_or_else_async': null,
        './undefinable/namespace': null,
        './undefinable/ok_or': null,
        './undefinable/ok_or_else': null,
        './undefinable/ok_or_else_async': null,
        './undefinable/or': null,
        './undefinable/or_else': null,
        './undefinable/or_else_async': null,
        './undefinable/to_nullable': null,
        './undefinable/to_plain_result': null,
        './undefinable/undefinable': null,
        './undefinable/unwrap_or': null,
        './undefinable/unwrap_or_else': null,
        './undefinable/unwrap_or_else_async': null,
        './undefinable/xor': null,
        './undefinable/zip': null,
        './undefinable/zip_with': null,
        './undefinable/zip_with_async': null,
    }),
);
