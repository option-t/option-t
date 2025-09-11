import test from 'ava';

import { isOk, isErr, unwrapOk, unwrapErr } from 'option-t/plain_result/result';
import * as UndefinableRoot from 'option-t/undefinable';
import * as UndefinableRootCompatV54 from 'option-t/undefinable/compat/v54';
import { Undefinable as UndefinableNamespace } from 'option-t/undefinable/namespace';
import { toResultErrFromUndefinable } from 'option-t/undefinable/to_plain_result';
import { nonNullableValueCaseListForSync } from '../../../utils.mjs';

for (const [INPUT, , EXPECTED] of nonNullableValueCaseListForSync) {
    test('pass the value' + String(INPUT), (t) => {
        const actual = toResultErrFromUndefinable(INPUT);
        t.true(isErr(actual), 'should be Err(E)');
        t.is(unwrapErr(actual), EXPECTED, 'should the expected result');
    });
}

test(`pass undefined`, (t) => {
    const actual = toResultErrFromUndefinable(undefined);
    t.true(isOk(actual), 'should be Ok(void)');
    t.is(unwrapOk(actual), undefined, 'should the expected result');
});

test(`pass null`, (t) => {
    const actual = toResultErrFromUndefinable(null);
    t.true(isErr(actual), 'should be Err(undefined)');
    t.is(unwrapErr(actual), null, 'should the expected result');
});

test(`exported alias' identity check`, (t) => {
    t.is(UndefinableRoot.UndefinableOperator.toResultErr, toResultErrFromUndefinable);
    t.is(UndefinableNamespace.toResultErr, toResultErrFromUndefinable);
    t.is(UndefinableRootCompatV54.toResultErrFromUndefinable, toResultErrFromUndefinable);
});
