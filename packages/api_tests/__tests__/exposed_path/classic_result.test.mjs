import test from 'ava';
import { testImportExposedPath } from './helper.mjs';

testImportExposedPath(
    test,
    Object.keys({
        './ClassicResult': null,
        './esm/ClassicResult': null,
    }),
);
