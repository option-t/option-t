import test from 'ava';
import { testImportExposedPath } from './helper.mjs';

testImportExposedPath(
    test,
    Object.keys({
        './cjs/ClassicResult': null,
        './esm/ClassicResult': null,
    })
);
