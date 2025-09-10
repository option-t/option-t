/* eslint sort-keys: ["error", "asc", { caseSensitive: true }] */

import test from 'ava';
import { testImportExposedPath } from './helper.mjs';

testImportExposedPath(
    test,
    Object.keys({
        './nullable': null,
        './nullable/and': null,
        './nullable/and_then': null,
        './nullable/and_then_async': null,
        './nullable/compat/v54': null,
        './nullable/filter': null,
        './nullable/filter_async': null,
        './nullable/inspect': null,
        './nullable/map': null,
        './nullable/map_async': null,
        './nullable/map_or': null,
        './nullable/map_or_async': null,
        './nullable/map_or_else': null,
        './nullable/map_or_else_async': null,
        './nullable/namespace': null,
        './nullable/nullable': null,
        './nullable/ok_or': null,
        './nullable/ok_or_else': null,
        './nullable/ok_or_else_async': null,
        './nullable/or': null,
        './nullable/or_else': null,
        './nullable/or_else_async': null,
        './nullable/to_plain_result': null,
        './nullable/to_undefinable': null,
        './nullable/unwrap_or': null,
        './nullable/unwrap_or_else': null,
        './nullable/unwrap_or_else_async': null,
        './nullable/xor': null,
        './nullable/zip': null,
        './nullable/zip_with': null,
        './nullable/zip_with_async': null,
    }),
);
