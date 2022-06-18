import test from 'ava';

import { isOk, isErr } from '../../__dist/esm/PlainResult/Result.mjs';
import { tryCatchIntoResult } from '../../__dist/esm/PlainResult/tryCatch.mjs';
import { unwrapErrFromResult, unwrapOkFromResult } from '../../__dist/esm/PlainResult/unwrap.mjs';

test('output=Ok(T)', (t) => {
    const EXPECTED = Math.random();
    const actual = tryCatchIntoResult(() => {
        return EXPECTED;
    });

    t.true(isOk(actual), 'should be Ok(T)');
    t.is(unwrapOkFromResult(actual), EXPECTED, 'should contain the expect inner value');
});

test('output=Err(unknown)', (t) => {
    const EXPECTED = new Error(Math.random());
    const actual = tryCatchIntoResult(() => {
        throw EXPECTED;
    });

    t.true(isErr(actual), 'should be Err(E)');
    t.is(unwrapErrFromResult(actual), EXPECTED, 'should contain the expect inner value');
});
