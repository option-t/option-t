/* eslint-disable no-param-reassign */
import test from 'ava';

import { createOk, createErr } from '../../../__dist/esm/PlainResult/Result.mjs';
import { unsafeDropBothForResult } from '../../../__dist/esm/PlainResult/drop.mjs';

test('with Ok', (t) => {
    const expected = Symbol('');
    const actual = createOk(1);

    unsafeDropBothForResult(
        actual,
        (ok) => {
            ok.ok = false;
            ok.val = expected;
        },
        (_e) => {
            t.fail('Do not enter this path.');
        }
    );

    t.is(actual.ok, false, 'should be modified');
    t.is(actual.val, undefined, 'should be released');
    t.true(Object.isFrozen(actual), 'should be frozen');
});

test('with Err', (t) => {
    const expected = Symbol('');
    const actual = createErr(1);

    unsafeDropBothForResult(
        actual,
        (_ok) => {
            t.fail('Do not enter this path.');
        },
        (err) => {
            err.ok = true;
            err.err = expected;
        }
    );

    t.is(actual.ok, true, 'should be modified');
    t.is(actual.err, undefined, 'should be released');
    t.true(Object.isFrozen(actual), 'should be frozen');
});
