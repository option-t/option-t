import test from 'ava';

import { createOk, createErr } from 'option-t/PlainResult/Result';
import { mapForResult } from 'option-t/PlainResult/map';

const VALUE_T = Math.random();
const VALUE_U = Math.random();
const ERROR_E = new Error('e');

test('input is Ok(T), callback return T', (t) => {
    t.plan(4);

    const input = createOk(VALUE_T);
    const actual = mapForResult(input, (v) => {
        t.is(v, VALUE_T);
        return VALUE_U;
    });

    t.not(actual, input);
    t.true(actual.ok);
    t.is(actual.val, VALUE_U);
});

test('input is Err(E)', (t) => {
    t.plan(3);

    const input = createErr(ERROR_E);
    const actual = mapForResult(input, (_) => {
        t.pass(false);
        return VALUE_T;
    });

    t.is(actual, input);
    t.false(actual.ok);
    t.is(actual.err, ERROR_E);
});
