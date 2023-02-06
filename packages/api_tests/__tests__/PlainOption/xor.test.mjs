import test from 'ava';

import { createSome, createNone, isNone, isSome } from 'option-t/__dist/esm/PlainOption/Option.js';
import { xorForOption } from 'option-t/__dist/esm/PlainOption/xor.js';

const valA = Symbol('a');
const valB = Symbol('b');

test('a=Some, b=Some', (t) => {
    const a = createSome(valA);
    const b = createSome(valB);

    const actual = xorForOption(a, b);
    t.true(isNone(actual), 'should be none');
});

test('a=Some, b=None', (t) => {
    const a = createSome(valA);
    const b = createNone();

    const actual = xorForOption(a, b);
    t.true(isSome(actual), 'should be Some');
    t.is(actual.val, valA, 'should be the expected inner value');
});

test('a=None, b=Some', (t) => {
    const a = createNone();
    const b = createSome(valB);

    const actual = xorForOption(a, b);
    t.true(isSome(actual), 'should be Some');
    t.is(actual.val, valB, 'should be the expected inner value');
});

test('a=None, b=None', (t) => {
    const a = createNone();
    const b = createNone();

    const actual = xorForOption(a, b);
    t.true(isNone(actual), 'should be none');
});
