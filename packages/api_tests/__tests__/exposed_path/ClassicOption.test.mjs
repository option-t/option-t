import test from 'ava';
import { testImportExposedPath } from './helper.mjs';

testImportExposedPath(
    test,
    Object.keys({
        './ClassicOption': null,
        './cjs/ClassicOption': null,
        './esm/ClassicOption': null,
    })
);
