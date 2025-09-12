import test from 'ava';

import { MaybeOperator } from 'option-t/maybe';
import * as MaybeRootCompatV54 from 'option-t/maybe/compat/v54';
import { Maybe as MaybeNamespace } from 'option-t/maybe/namespace';
import { okOrForMaybe } from 'option-t/maybe/ok_or';
import { isOk, isErr, unwrapOk, unwrapErr } from 'option-t/plain_result/result';
import { nonNullableValueCaseListForSync } from '../../utils.mjs';

const DEFAULT_ERR = Symbol('default err');

for (const [INPUT, , EXPECTED] of nonNullableValueCaseListForSync) {
    test('pass the value' + String(INPUT), (t) => {
        t.plan(2);

        const actual = okOrForMaybe(INPUT, DEFAULT_ERR);

        t.true(isOk(actual), 'should be Ok(T)');
        t.is(unwrapOk(actual), EXPECTED, 'should contain the expected');
    });
}

for (const NULL_VALUE of [undefined, null]) {
    test(`pass ${NULL_VALUE}`, (t) => {
        t.plan(2);
        const actual = okOrForMaybe(NULL_VALUE, DEFAULT_ERR);

        t.true(isErr(actual), 'should be Err(E)');
        t.is(unwrapErr(actual), DEFAULT_ERR, 'should contain the expected');
    });
}

test(`exported alias' identity check`, (t) => {
    t.is(MaybeOperator.okOr, okOrForMaybe);
    t.is(MaybeNamespace.okOr, okOrForMaybe);
    t.is(MaybeRootCompatV54.okOrForMaybe, okOrForMaybe);
});
