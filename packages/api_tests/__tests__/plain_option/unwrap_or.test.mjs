import test from 'ava';

import { createSome, createNone } from 'option-t/PlainOption/Option';
import { unwrapOrForOption } from 'option-t/PlainOption/unwrapOr';

const VALUE_T = Math.random();
const DEFAULT_VAL = Math.random();

test('input is Some(T)', (t) => {
    const input = createSome(VALUE_T);
    const actual = unwrapOrForOption(input, DEFAULT_VAL);
    t.is(actual, VALUE_T);
});

test('input is None', (t) => {
    const input = createNone();
    const actual = unwrapOrForOption(input, DEFAULT_VAL);
    t.is(actual, DEFAULT_VAL);
});
