'use strict';

const test = require('ava');

const { createSome, createNone, isSome, isNone } = require('../../../cjs/PlainOption');

test('PlainOption::createSome', (t) => {
    const EXPECTED = 1;
    const actual = createSome(EXPECTED);

    t.is(isSome(actual), true, `actual should be Ok`);
    t.is(actual.val, EXPECTED, `actual should be expected`);
});

test('PlainOption::createNone', (t) => {
    const actual = createNone();
    t.is(isNone(actual), true, `actual should be None`);
});
