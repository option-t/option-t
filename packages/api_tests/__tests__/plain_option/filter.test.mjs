import test from 'ava';

import { createSome, createNone } from 'option-t/plain_option/option';
import { filterForOption } from 'option-t/plain_option/filter';

test('input is Some, and predicate return true', (t) => {
    t.plan(3);

    const expected = Symbol('input');
    const input = createSome(expected);
    const actual = filterForOption(input, (_inner) => {
        t.pass();
        return true;
    });

    t.true(actual.ok, 'should be Some');
    t.is(actual.val, expected, 'should be expected');
});

test('input is Some, and predicate return false', (t) => {
    t.plan(2);

    const INNER_VAL = Symbol('input');
    const input = createSome(INNER_VAL);
    const actual = filterForOption(input, (_inner) => {
        t.pass();
        return false;
    });
    t.false(actual.ok, 'should be None');
});

test('input is None', (t) => {
    t.plan(1);

    const input = createNone();
    const actual = filterForOption(input, (_inner) => {
        t.fail();
        return true;
    });

    t.false(actual.ok, 'should be None');
});
