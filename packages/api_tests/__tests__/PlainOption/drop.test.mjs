/* eslint-disable no-param-reassign */
import test from 'ava';

import { createSome, createNone } from 'option-t/esm/PlainOption/Option';
import { unsafeDropForOption } from 'option-t/esm/PlainOption/drop';

test('unsafeDropForOption() with Some', (t) => {
    const expected = Symbol('');
    const actual = createSome(null);
    unsafeDropForOption(actual, (v) => {
        v.ok = false;
        v.val = expected;
    });

    t.is(actual.ok, false, 'should be modified');
    t.is(actual.val, undefined, 'should be released');
    t.true(Object.isFrozen(actual), 'should be frozen');
});

test('unsafeDropForOption() with None', (t) => {
    const actual = createNone();
    unsafeDropForOption(actual, (_v) => {
        t.fail('Do not enter this path.');
    });

    t.is(actual.ok, false, 'should not be modified');
    t.true(Object.isFrozen(actual), 'should be frozen');
});

test(`should throw if the input is frozen: Some`, (t) => {
    const inputValue = createSome(Math.random);
    const input = Object.freeze(inputValue);
    t.true(Object.isFrozen(input), 'input must be frozen');

    t.throws(
        () => {
            unsafeDropForOption(input, (_v) => {
                t.fail('Do not enter this path');
            });
        },
        {
            instanceOf: TypeError,
            message: `input is frozen, cannot cast to mutable`,
        }
    );
});

test(`should throw if the input is frozen: None`, (t) => {
    const inputValue = createNone();
    const input = Object.freeze(inputValue);
    t.true(Object.isFrozen(input), 'input must be frozen');

    t.throws(
        () => {
            unsafeDropForOption(input, (_v) => {
                t.fail('Do not enter this path');
            });
        },
        {
            instanceOf: TypeError,
            message: `input is frozen, cannot cast to mutable`,
        }
    );
});
