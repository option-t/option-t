/* eslint-disable no-param-reassign */
import test from 'ava';

import { createOk, createErr } from '../../../__dist/esm/PlainResult/Result.js';
import { unsafeDropErrForResult } from '../../../__dist/esm/PlainResult/drop.js';

test('with Ok', (t) => {
    const actual = createOk(1);

    unsafeDropErrForResult(actual, (_err) => {
        t.fail('Do not enter this path.');
    });

    t.is(actual.ok, true, 'should not be modified');
    t.true(Object.isFrozen(actual), 'should be frozen');
});

test('with Err', (t) => {
    const expected = Symbol('');
    const actual = createErr(1);

    unsafeDropErrForResult(actual, (err) => {
        err.ok = true;
        err.err = expected;
    });

    t.is(actual.ok, true, 'should be modified');
    t.is(actual.err, undefined, 'should be released');
    t.true(Object.isFrozen(actual), 'should be frozen');
});
