import test from 'ava';

const {
    createOk,
    createErr,
} = require('../../__dist/cjs/PlainResult/Result');

const {
    mapOrElseForResult
} = require('../../__dist/cjs/PlainResult/mapOrElse');

const PLAN_COUNT = 2;

test('Ok<T>', (t) => {
    const INITIAL = 1;
    const EXPECTED = 3;

    t.plan(PLAN_COUNT);

    const input = createOk(INITIAL);
    const r = mapOrElseForResult(input, (_e) => {
        t.fail(`don't enter this path`);
    }, (v) => {
        t.is(v, INITIAL, 'the argument');
        return EXPECTED;
    });

    t.is(r, 3, 'the return value');
});

test('Err<E>', (t) => {
    const INITIAL = 1;
    const EXPECTED = 3;

    t.plan(PLAN_COUNT);

    const input = createErr(INITIAL);
    const r = mapOrElseForResult(input, (e) => {
        t.is(e, INITIAL, 'the argument');
        return EXPECTED;
    }, (_v) => {
        t.fail(`don't enter this path`);
    });

    t.is(r, 3, 'the return value');
});
