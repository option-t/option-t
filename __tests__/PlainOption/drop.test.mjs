/* eslint-disable no-param-reassign */
import test from 'ava';

import { createSome, createNone } from '../../__dist/cjs/PlainOption/Option.js';
import { unsafeDropForOption } from '../../__dist/cjs/PlainOption/drop.js';

test('unsafeDropForOption() with Some', (t) => {
    const expected = Symbol('');
    const actual = createSome(null);
    unsafeDropForOption(actual, (v) => {
        v.ok = false;
        v.val = expected;
    });

    t.is(actual.ok, false);
    t.is(actual.val, expected);
});

test('unsafeDropForOption() with None', (t) => {
    const actual = createNone();
    unsafeDropForOption(actual, (_v) => {
        t.fail('Do not enter this path.');
    });

    t.is(actual.ok, false);
});
