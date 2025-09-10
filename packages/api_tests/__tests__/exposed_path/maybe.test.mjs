/* eslint sort-keys: ["error", "asc", { caseSensitive: true }] */

import test from 'ava';
import { testImportExposedPath } from './helper.mjs';

testImportExposedPath(
    test,
    Object.keys({
        './maybe': null,
        './maybe/and': null,
        './maybe/and_then': null,
        './maybe/and_then_async': null,
        './maybe/compat/v54': null,
        './maybe/filter': null,
        './maybe/filter_async': null,
        './maybe/inspect': null,
        './maybe/map': null,
        './maybe/map_async': null,
        './maybe/map_or': null,
        './maybe/map_or_async': null,
        './maybe/map_or_else': null,
        './maybe/map_or_else_async': null,
        './maybe/maybe': null,
        './maybe/namespace': null,
        './maybe/ok_or': null,
        './maybe/ok_or_else': null,
        './maybe/ok_or_else_async': null,
        './maybe/or': null,
        './maybe/or_else': null,
        './maybe/or_else_async': null,
        './maybe/to_nullable': null,
        './maybe/to_plain_result': null,
        './maybe/to_undefinable': null,
        './maybe/unwrap_or': null,
        './maybe/unwrap_or_else': null,
        './maybe/unwrap_or_else_async': null,
        './maybe/xor': null,
        './maybe/zip': null,
        './maybe/zip_with': null,
    }),
);
