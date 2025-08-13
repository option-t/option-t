import test from 'ava';

import { toResultErrFromMaybe } from 'option-t/maybe/to_plain_result';
import { isOk, isErr, unwrapOk, unwrapErr } from 'option-t/plain_result/result';
import { nonNullableValueCaseListForSync } from '../../../utils.mjs';

for (const [INPUT, , EXPECTED] of nonNullableValueCaseListForSync) {
    test('pass the value' + String(INPUT), (t) => {
        const actual = toResultErrFromMaybe(INPUT);
        t.true(isErr(actual), 'should be Err(E)');
        t.is(unwrapErr(actual), EXPECTED, 'should the expected result');
    });
}

test(`pass undefined`, (t) => {
    const actual = toResultErrFromMaybe(undefined);
    t.true(isOk(actual), 'should be Ok(void)');
    t.is(unwrapOk(actual), undefined, 'should the expected result');
});

test(`pass null`, (t) => {
    const actual = toResultErrFromMaybe(null);
    t.true(isOk(actual), 'should be Ok(void)');
    t.is(unwrapOk(actual), undefined, 'should the expected result');
});
