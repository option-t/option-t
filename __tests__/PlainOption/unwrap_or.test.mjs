import test from 'ava';

import { createSome, createNone } from '../../__dist/esm/PlainOption/Option.mjs';
import { unwrapOrFromOption } from '../../__dist/esm/PlainOption/unwrapOr.mjs';

const VALUE_T = Math.random();
const DEFAULT_VAL = Math.random();

test('input is Some(T)', (t) => {
    const input = createSome(VALUE_T);
    const actual = unwrapOrFromOption(input, DEFAULT_VAL);
    t.is(actual, VALUE_T);
});

test('input is None', (t) => {
    const input = createNone();
    const actual = unwrapOrFromOption(input, DEFAULT_VAL);
    t.is(actual, DEFAULT_VAL);
});
