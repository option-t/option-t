import test from 'ava';

import { createSome, createNone } from '../../__dist/esm/PlainOption/Option.mjs';
import { orElseForOption } from '../../__dist/esm/PlainOption/orElse.mjs';

const VALUE_T = Math.random();
const VALUE_U = Math.random();

test('input is Some(T)', (t) => {
    t.plan(1);

    const input = createSome(VALUE_T);
    const actual = orElseForOption(input, () => {
        t.pass(false);
        return VALUE_U;
    });

    t.is(input, actual);
});

test('input is None, callback return Some(T)', (t) => {
    t.plan(3);

    const input = createNone();
    const actual = orElseForOption(input, () => {
        t.pass(true);
        return createSome(VALUE_U);
    });

    t.true(actual.ok);
    t.is(actual.val, VALUE_U);
});

test('input is None, callback return None', (t) => {
    t.plan(3);

    const input = createNone();
    const actual = orElseForOption(input, () => {
        t.pass(true);
        return createNone();
    });

    t.not(actual, input);
    t.false(actual.ok);
});
