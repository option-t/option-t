import test from 'ava';
import { testImportExposedPath } from './helper.mjs';

testImportExposedPath(
    test,
    Object.keys({
        './ClassicResult': null,
        './cjs/ClassicResult': null,
        './esm/ClassicResult': null,
    }),
);
