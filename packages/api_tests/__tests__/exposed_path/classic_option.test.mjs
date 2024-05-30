/* eslint sort-keys: ["error", "asc", { caseSensitive: true }] */

import test from 'ava';
import { testImportExposedPath } from './helper.mjs';

testImportExposedPath(
    test,
    Object.keys({
        './classic_option': null,
    }),
);
