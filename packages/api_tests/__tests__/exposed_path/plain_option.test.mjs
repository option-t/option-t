/* eslint sort-keys: ["error", "asc", { caseSensitive: true }] */

import test from 'ava';
import { testImportExposedPath } from './helper.mjs';

testImportExposedPath(
    test,
    Object.keys({
        './plain_option': null,
        './plain_option/and': null,
        './plain_option/and_then': null,
        './plain_option/and_then_async': null,
        './plain_option/equal': null,
        './plain_option/filter': null,
        './plain_option/flatten': null,
        './plain_option/from_result': null,
        './plain_option/inspect': null,
        './plain_option/map': null,
        './plain_option/map_async': null,
        './plain_option/map_or': null,
        './plain_option/map_or_async': null,
        './plain_option/map_or_else': null,
        './plain_option/map_or_else_async': null,
        './plain_option/namespace': null,
        './plain_option/ok_or': null,
        './plain_option/ok_or_else': null,
        './plain_option/option': null,
        './plain_option/or': null,
        './plain_option/or_else': null,
        './plain_option/or_else_async': null,
        './plain_option/to_nullable': null,
        './plain_option/to_undefinable': null,
        './plain_option/transpose': null,
        './plain_option/unsafe/as_mut': null,
        './plain_option/unsafe/drop': null,
        './plain_option/unwrap_or': null,
        './plain_option/unwrap_or_else': null,
        './plain_option/unwrap_or_else_async': null,
        './plain_option/xor': null,
    }),
);
