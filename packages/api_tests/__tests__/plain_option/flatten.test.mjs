import test from 'ava';

import { flattenForOption } from 'option-t/plain_option/flatten';
import { createSome, createNone } from 'option-t/plain_option/option';

test('input is Some(Some(T))', (t) => {
    const wrappedValue = Symbol('input');
    const inner = createSome(wrappedValue);
    const input = createSome(inner);
    const actual = flattenForOption(input);

    t.true(actual.ok, 'should be some');
    t.is(actual.val, wrappedValue, 'the value is expeced');
});

test('input is Some(None)', (t) => {
    const inner = createNone();
    const input = createSome(inner);
    const actual = flattenForOption(input);

    t.false(actual.ok, 'should be None');
});

test('input is None', (t) => {
    const input = createNone();
    const actual = flattenForOption(input);

    t.false(actual.ok, 'should be None');
});
