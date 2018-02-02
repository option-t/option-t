'use strict';

const test = require('ava');

const { createOk, createErr, } = require('../../../cjs/PlainResult');

test('The shape of PlainResult::Ok', (t) => {
    const INNER_VAL = 10;
    const actual = createOk(INNER_VAL);

    t.deepEqual(actual, {
        ok: true,
        val: INNER_VAL,
        err: undefined,
    });
});

test('The shape of PlainResult::Err', (t) => {
    const INNER_VAL = 10;
    const actual = createErr(INNER_VAL);

    t.deepEqual(actual, {
        ok: false,
        val: undefined,
        err: INNER_VAL,
    });
});
