import test from 'ava';

import { isOk, isErr, unwrapOk, unwrapErr } from 'option-t/plain_result/result';
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
