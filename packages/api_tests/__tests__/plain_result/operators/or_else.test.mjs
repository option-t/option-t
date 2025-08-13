import test from 'ava';

import { orElseForResult } from 'option-t/plain_result/or_else';
import { createOk, createErr } from 'option-t/plain_result/result';

const VALUE_T = Math.random();
const ERROR_E = new Error('e');
const ERROR_F = new Error('f');

test('input is Ok(T)', (t) => {
    t.plan(1);

    const input = createOk(VALUE_T);
    const actual = orElseForResult(input, (_) => {
        t.pass(false);
        return createOk(_);
    });
    t.is(actual, input);
});

test('input is Err(E), callback return Ok(T)', (t) => {
    t.plan(2);

    const input = createErr(ERROR_E);
    const expected = createOk(VALUE_T);

    const actual = orElseForResult(input, (e) => {
        t.is(e, ERROR_E);
        return expected;
    });

    t.is(actual, expected);
});

test('input is Err(E), callback return Err(F)', (t) => {
    t.plan(2);

    const input = createErr(ERROR_E);
    const expected = createErr(ERROR_F);

    const actual = orElseForResult(input, (e) => {
        t.is(e, ERROR_E);
        return expected;
    });
    t.is(actual, expected);
});
