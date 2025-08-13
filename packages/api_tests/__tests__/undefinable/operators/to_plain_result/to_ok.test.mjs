import test from 'ava';

import { isOk, isErr, unwrapOk, unwrapErr } from 'option-t/plain_result/result';
import { toResultOkFromUndefinable } from 'option-t/undefinable/to_plain_result';
import { nonNullableValueCaseListForSync } from '../../../utils.mjs';

for (const [INPUT, , EXPECTED] of nonNullableValueCaseListForSync) {
    test('pass the value' + String(INPUT), (t) => {
        const actual = toResultOkFromUndefinable(INPUT);
        t.true(isOk(actual), 'should be Ok(T)');
        t.is(unwrapOk(actual), EXPECTED, 'should the expected result');
    });
}

test(`pass undefined`, (t) => {
    const actual = toResultOkFromUndefinable(undefined);
    t.true(isErr(actual), 'should be Err(void)');
    t.is(unwrapErr(actual), undefined, 'should the expected result');
});

test(`pass null`, (t) => {
    const actual = toResultOkFromUndefinable(null);
    t.true(isOk(actual), 'should be Ok(undefined)');
    t.is(unwrapOk(actual), null, 'should the expected result');
});
