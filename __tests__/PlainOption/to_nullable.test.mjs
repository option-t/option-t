import test from 'ava';

import { createSome, createNone } from '../../__dist/esm/PlainOption/Option.mjs';
import { toNullableFromOption } from '../../__dist/esm/PlainOption/toNullable.mjs';

const VALUE_T = Math.random();

test('input is Some(T)', (t) => {
    const input = createSome(VALUE_T);
    const actual = toNullableFromOption(input);

    t.is(actual, VALUE_T);
});

test('input is None', (t) => {
    const input = createNone();
    const actual = toNullableFromOption(input);

    t.is(actual, null);
});
