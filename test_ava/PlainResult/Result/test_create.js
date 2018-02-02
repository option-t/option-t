'use strict';

const test = require('ava');

const PlainResult = require('../../../cjs/PlainResult');


test('createOk', (t) => {
    const EXPECTED = 1;
    const actual = PlainResult.createOk(EXPECTED);

    t.is(PlainResult.isOk(actual), true, `actual should be Ok`);
    t.is(actual.val, EXPECTED, `actual should be expected`);
});

test('createErr', (t) => {
    const EXPECTED = 'error';
    const actual = PlainResult.createErr(EXPECTED);
    t.is(PlainResult.isErr(actual), true, `actual should be Err`);
    t.is(actual.err, EXPECTED, `actual should be expected`);
});
