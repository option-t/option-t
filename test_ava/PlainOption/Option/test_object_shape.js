'use strict';

const test = require('ava');

const { createSome, createNone} = require('../../../cjs/PlainOption');

test('The shape of PlainOption::Some', (t) => {
    const INNER_VAL = 10;
    const actual = createSome(INNER_VAL);

    t.deepEqual(actual, {
        ok: true,
        val: INNER_VAL,
    });
});

test('The shape of PlainOption::None', (t) => {
    const actual = createNone();

    t.deepEqual(actual, {
        ok: false,
        val: undefined,
    });
});
