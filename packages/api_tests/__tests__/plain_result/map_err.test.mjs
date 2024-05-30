import test from 'ava';

import { createOk, createErr } from 'option-t/plain_result/result';
import { mapErrForResult } from 'option-t/plain_result/map_err';

const VALUE_T = Math.random();
const ERROR_E = new Error('e');
const ERROR_F = new Error('f');

test('input is Ok(T)', (t) => {
    t.plan(3);

    const input = createOk(VALUE_T);
    const actual = mapErrForResult(input, (_) => {
        t.pass(false);
        return ERROR_F;
    });

    t.is(actual, input);
    t.true(actual.ok);
    t.is(actual.val, VALUE_T);
});

test('input is Err(E)', (t) => {
    t.plan(4);

    const input = createErr(ERROR_E);
    const actual = mapErrForResult(input, (e) => {
        t.is(e, ERROR_E);
        return ERROR_F;
    });

    t.not(actual, input);
    t.false(actual.ok);
    t.is(actual.err, ERROR_F);
});
