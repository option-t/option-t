import test from 'ava';
import { testImportExposedPath } from './helper.mjs';

testImportExposedPath(
    test,
    Object.keys({
        './cjs/ClassicOption': null,
        './esm/ClassicOption': null,
    })
);
