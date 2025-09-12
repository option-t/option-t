import test from 'ava';

import { MaybeOperator } from 'option-t/maybe';
import * as MaybeRootCompatV54 from 'option-t/maybe/compat/v54';
import { Maybe as MaybeNamespace } from 'option-t/maybe/namespace';
import { okOrElseForMaybe } from 'option-t/maybe/ok_or_else';
import { isOk, isErr, unwrapOk, unwrapErr } from 'option-t/plain_result/result';
import { nonNullableValueCaseListForSync } from '../../utils.mjs';

const DEFAULT_ERR = Symbol('default err');

for (const [INPUT, , EXPECTED] of nonNullableValueCaseListForSync) {
    test('pass the value' + String(INPUT), (t) => {
        t.plan(2);

        const actual = okOrElseForMaybe(EXPECTED, () => {
            t.fail('should not call recover fn');
        });

        t.true(isOk(actual), 'should be Ok(T)');
        t.is(unwrapOk(actual), EXPECTED, 'should contain the expected');
    });
}

for (const NULL_VALUE of [undefined, null]) {
    test(`pass ${NULL_VALUE}`, (t) => {
        t.plan(3);

        const actual = okOrElseForMaybe(NULL_VALUE, () => {
            t.pass('should call recover fn');
            return DEFAULT_ERR;
        });

        t.true(isErr(actual), 'should be Err(E)');
        t.is(unwrapErr(actual), DEFAULT_ERR, 'should contain the expected');
    });
}

test(`exported alias' identity check`, (t) => {
    t.is(MaybeOperator.okOrElse, okOrElseForMaybe);
    t.is(MaybeNamespace.okOrElse, okOrElseForMaybe);
    t.is(MaybeRootCompatV54.okOrElseForMaybe, okOrElseForMaybe);
});
