import test from 'ava';

import { createSome, createNone } from 'option-t/plain_option/option';
import { unwrapOrElseForOption } from 'option-t/plain_option/unwrap_or_else';

const VALUE_T = Math.random();
const DEFAULT_VAL = Math.random();

test('input is Some(T)', (t) => {
    t.plan(1);

    const input = createSome(VALUE_T);
    const actual = unwrapOrElseForOption(input, () => {
        t.pass(false);
        return DEFAULT_VAL;
    });
    t.is(actual, VALUE_T);
});

test('input is None', (t) => {
    t.plan(2);

    const input = createNone();
    const actual = unwrapOrElseForOption(input, () => {
        t.pass(true);
        return DEFAULT_VAL;
    });
    t.is(actual, DEFAULT_VAL);
});
