import test from 'ava';

const { createOk, createErr, } = require('../../__dist/cjs/PlainResult');

test('The shape of PlainResult::Ok', (t) => {
    const INNER_VAL = 10;

    const actual = createOk(INNER_VAL);

    t.true(actual.ok, 'Ok.ok');
    t.is(actual.val, INNER_VAL, 'Ok.val');
    t.is(actual.err, undefined, 'Ok.err');
});

test('The shape of PlainResult::Err', (t) => {
    const INNER_VAL = 10;

    const actual = createErr(INNER_VAL);

    t.false(actual.ok, 'Err.ok');
    t.is(actual.val, undefined, 'Err.val');
    t.is(actual.err, INNER_VAL, 'Err.err');
});
