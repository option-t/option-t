import test from 'ava';

import { NullableOperator } from 'option-t/nullable';
import * as NullableRootCompatV54 from 'option-t/nullable/compat/v54';
import { Nullable as NullableNamespace } from 'option-t/nullable/namespace';
import { toResultErrFromNullable } from 'option-t/nullable/to_plain_result';
import { isOk, isErr, unwrapOk, unwrapErr } from 'option-t/plain_result/result';
import { nonNullableValueCaseListForSync } from '../../../utils.mjs';

for (const [INPUT, , EXPECTED] of nonNullableValueCaseListForSync) {
    test('pass the value' + String(INPUT), (t) => {
        const actual = toResultErrFromNullable(INPUT);
        t.true(isErr(actual), 'should be Err(E)');
        t.is(unwrapErr(actual), EXPECTED, 'should the expected result');
    });
}

test(`pass undefined`, (t) => {
    const actual = toResultErrFromNullable(undefined);
    t.true(isErr(actual), 'should be Err(undefined)');
    t.is(unwrapErr(actual), undefined, 'should the expected result');
});

test(`pass null`, (t) => {
    const actual = toResultErrFromNullable(null);
    t.true(isOk(actual), 'should be Ok(void)');
    t.is(unwrapOk(actual), undefined, 'should the expected result');
});

test(`exported alias' identity check`, (t) => {
    t.is(NullableOperator.toResultErr, toResultErrFromNullable);
    t.is(NullableNamespace.toResultErr, toResultErrFromNullable);
    t.is(NullableRootCompatV54.toResultErrFromNullable, toResultErrFromNullable);
});
