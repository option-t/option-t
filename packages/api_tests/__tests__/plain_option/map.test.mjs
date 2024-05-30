import test from 'ava';

import { mapForOption } from 'option-t/plain_option/map';
import { createSome, createNone } from 'option-t/plain_option/option';

const VALUE_T = Math.random();
const VALUE_U = Math.random();

test('input is Some(T)', (t) => {
    t.plan(4);

    const input = createSome(VALUE_T);
    const actual = mapForOption(input, (v) => {
        t.pass(v, VALUE_T);
        return VALUE_U;
    });

    t.not(actual, input);
    t.true(actual.ok);
    t.is(actual.val, VALUE_U);
});

test('input is None', (t) => {
    t.plan(1);

    const input = createNone();
    const actual = mapForOption(input, (v) => {
        t.pass(v, VALUE_T);
        return VALUE_U;
    });

    t.is(input, actual);
});
