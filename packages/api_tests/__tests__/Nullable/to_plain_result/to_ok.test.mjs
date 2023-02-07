import test from 'ava';

import { isOk, isErr, unwrapOk, unwrapErr } from 'option-t/PlainResult/Result';
import { toResultOkFromNullable } from 'option-t/Nullable/toPlainResult';
import { nonNullableValueCaseListForSync } from '../../utils.mjs';

for (const [INPUT, , EXPECTED] of nonNullableValueCaseListForSync) {
    test('pass the value' + String(INPUT), (t) => {
        const actual = toResultOkFromNullable(INPUT);
        t.true(isOk(actual), 'should be Ok(T)');
        t.is(unwrapOk(actual), EXPECTED, 'should the expected result');
    });
}

test(`pass undefined`, (t) => {
    const actual = toResultOkFromNullable(undefined);
    t.true(isOk(actual), 'should be Ok(undefined)');
    t.is(unwrapOk(actual), undefined, 'should the expected result');
});

test(`pass null`, (t) => {
    const actual = toResultOkFromNullable(null);
    t.true(isErr(actual), 'should be Err(void)');
    t.is(unwrapErr(actual), undefined, 'should the expected result');
});
