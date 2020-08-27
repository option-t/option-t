/* eslint-disable no-param-reassign */
import test from 'ava';

import { createOk, createErr } from '../../../__dist/cjs/PlainResult/Result';
import { unsafeDropErrForResult } from '../../../__dist/cjs/PlainResult/drop';

test('with Ok', (t) => {
    const actual = createOk(1);

    unsafeDropErrForResult(actual, (_err) => {
        t.fail('Do not enter this path.');
    });

    t.is(actual.ok, true);
});

test('with Err', (t) => {
    const expected = Symbol('');
    const actual = createErr(1);

    unsafeDropErrForResult(actual, (err) => {
        err.ok = true;
        err.err = expected;
    });

    t.is(actual.ok, true);
    t.is(actual.err, expected);
});
