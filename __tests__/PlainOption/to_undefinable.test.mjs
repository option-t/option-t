import test from 'ava';

import { createSome, createNone } from '../../__dist/esm/PlainOption/Option.js';
import { toUndefinableFromOption } from '../../__dist/esm/PlainOption/toUndefinable.js';

const VALUE_T = Math.random();

test('input is Some(T)', (t) => {
    const input = createSome(VALUE_T);
    const actual = toUndefinableFromOption(input);

    t.is(actual, VALUE_T);
});

test('input is None', (t) => {
    const input = createNone();
    const actual = toUndefinableFromOption(input);

    t.is(actual, undefined);
});
