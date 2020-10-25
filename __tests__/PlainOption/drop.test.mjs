/* eslint-disable no-param-reassign */
import test from 'ava';

import { createSome, createNone } from '../../__dist/esm/PlainOption/Option.mjs';
import { unsafeDropForOption } from '../../__dist/esm/PlainOption/drop.mjs';

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
