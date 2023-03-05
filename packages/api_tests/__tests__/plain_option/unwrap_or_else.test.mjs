import test from 'ava';

import { createSome, createNone } from 'option-t/PlainOption/Option';
import { unwrapOrElseFromOption } from 'option-t/PlainOption/unwrapOrElse';

const VALUE_T = Math.random();
const DEFAULT_VAL = Math.random();

test('input is Some(T)', (t) => {
    t.plan(1);

    const input = createSome(VALUE_T);
    const actual = unwrapOrElseFromOption(input, () => {
        t.pass(false);
        return DEFAULT_VAL;
    });
    t.is(actual, VALUE_T);
});

test('input is None', (t) => {
    t.plan(2);

    const input = createNone();
    const actual = unwrapOrElseFromOption(input, () => {
        t.pass(true);
        return DEFAULT_VAL;
    });
    t.is(actual, DEFAULT_VAL);
});
