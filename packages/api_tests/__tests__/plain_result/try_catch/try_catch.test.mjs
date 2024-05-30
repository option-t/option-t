import test from 'ava';

import {
    isOk,
    isErr,
    unwrapOk as unwrapOkFromResult,
    unwrapErr as unwrapErrFromResult,
} from 'option-t/plain_result/result';
import { tryCatchIntoResult } from 'option-t/plain_result/try_catch';

test('output=Ok(T)', (t) => {
    t.plan(3);

    const EXPECTED = Math.random();
    const actual = tryCatchIntoResult(() => {
        t.pass();
        return EXPECTED;
    });

    t.true(isOk(actual), 'should be Ok(T)');
    t.is(unwrapOkFromResult(actual), EXPECTED, 'should contain the expect inner value');
});

test('output=Err(unknown)', (t) => {
    t.plan(3);

    const EXPECTED = new Error(Math.random());
    const actual = tryCatchIntoResult(() => {
        t.pass();
        throw EXPECTED;
    });

    t.true(isErr(actual), 'should be Err(E)');
    t.is(unwrapErrFromResult(actual), EXPECTED, 'should contain the expect inner value');
});
