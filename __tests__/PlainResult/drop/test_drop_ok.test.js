/* eslint-disable no-param-reassign */
import test from 'ava';

import { createOk, createErr } from '../../../__dist/cjs/PlainResult/Result';
import { unsafeDropOkForResult } from '../../../__dist/cjs/PlainResult/drop';

test('with Ok', (t) => {
    const expected = Symbol('');
    const actual = createOk(1);

    unsafeDropOkForResult(actual, (ok) => {
        ok.ok = false;
        ok.val = expected;
    });

    t.is(actual.ok, false);
    t.is(actual.val, expected);
});

test('with Err', (t) => {
    const actual = createErr(1);

    unsafeDropOkForResult(actual, (_ok) => {
        t.fail('Do not enter this path.');
    });

    t.is(actual.ok, false);
});
