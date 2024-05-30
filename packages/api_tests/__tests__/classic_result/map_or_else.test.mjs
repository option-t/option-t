import test from 'ava';

import { createClassicOk, createClassicErr } from 'option-t/classic_result';

const PLAN_COUNT = 2;

test('Ok<T>', (t) => {
    const INITIAL = 1;
    const EXPECTED = 3;

    t.plan(PLAN_COUNT);

    const input = createClassicOk(INITIAL);
    const r = input.mapOrElse(
        (_e) => {
            t.fail(`don't enter this path`);
        },
        (v) => {
            t.is(v, INITIAL, 'the argument');
            return EXPECTED;
        },
    );

    t.is(r, 3, 'the return value');
});

test('Err<E>', (t) => {
    const INITIAL = 1;
    const EXPECTED = 3;

    t.plan(PLAN_COUNT);

    const input = createClassicErr(INITIAL);
    const r = input.mapOrElse(
        (e) => {
            t.is(e, INITIAL, 'the argument');
            return EXPECTED;
        },
        (_v) => {
            t.fail(`don't enter this path`);
        },
    );

    t.is(r, 3, 'the return value');
});
