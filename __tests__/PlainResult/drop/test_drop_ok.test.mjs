/* eslint-disable no-param-reassign */
import test from 'ava';

import { createOk, createErr } from '../../../__dist/esm/PlainResult/Result.js';
import { unsafeDropOkForResult } from '../../../__dist/esm/PlainResult/drop.js';

test('with Ok', (t) => {
    const expected = Symbol('');
    const actual = createOk(1);

    unsafeDropOkForResult(actual, (ok) => {
        ok.ok = false;
        ok.val = expected;
    });

    t.is(actual.ok, false, 'should be modified');
    t.is(actual.val, undefined, 'should be released');
    t.true(Object.isFrozen(actual), 'should be frozen');
});

test('with Err', (t) => {
    const actual = createErr(1);

    unsafeDropOkForResult(actual, (_ok) => {
        t.fail('Do not enter this path.');
    });

    t.is(actual.ok, false, 'should not be modified');
    t.true(Object.isFrozen(actual), 'should be frozen');
});
