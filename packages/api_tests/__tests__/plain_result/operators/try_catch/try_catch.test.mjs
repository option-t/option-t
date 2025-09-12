import test from 'ava';

import { ResultOperator } from 'option-t/plain_result';
import * as PlainResultCompatV54 from 'option-t/plain_result/compat/v54';
import { Result as PlainResultNamespace } from 'option-t/plain_result/namespace';
import { isOk, isErr, unwrapOk, unwrapErr } from 'option-t/plain_result/result';
import { tryCatchIntoResult } from 'option-t/plain_result/try_catch';

test('output=Ok(T)', (t) => {
    t.plan(3);

    const EXPECTED = Math.random();
    const actual = tryCatchIntoResult(() => {
        t.pass();
        return EXPECTED;
    });

    t.true(isOk(actual), 'should be Ok(T)');
    t.is(unwrapOk(actual), EXPECTED, 'should contain the expect inner value');
});

test('output=Err(unknown)', (t) => {
    t.plan(3);

    const EXPECTED = new Error(Math.random());
    const actual = tryCatchIntoResult(() => {
        t.pass();
        throw EXPECTED;
    });

    t.true(isErr(actual), 'should be Err(E)');
    t.is(unwrapErr(actual), EXPECTED, 'should contain the expect inner value');
});

test(`exported alias' identity check`, (t) => {
    t.is(ResultOperator.tryCatchInto, tryCatchIntoResult);
    t.is(PlainResultNamespace.tryCatchInto, tryCatchIntoResult);
    t.is(PlainResultCompatV54.tryCatchIntoResult, tryCatchIntoResult);
});
