import test from 'ava';

import { toResultOkFromMaybe } from 'option-t/Maybe/toPlainResult';
import { isOk, isErr, unwrapOk, unwrapErr } from 'option-t/PlainResult/Result';
import { nonNullableValueCaseListForSync } from '../../utils.mjs';

for (const [INPUT, , EXPECTED] of nonNullableValueCaseListForSync) {
    test('pass the value' + String(INPUT), (t) => {
        const actual = toResultOkFromMaybe(INPUT);
        t.true(isOk(actual), 'should be Ok(T)');
        t.is(unwrapOk(actual), EXPECTED, 'should the expected result');
    });
}

test(`pass undefined`, (t) => {
    const actual = toResultOkFromMaybe(undefined);
    t.true(isErr(actual), 'should be Err(void)');
    t.is(unwrapErr(actual), undefined, 'should the expected result');
});

test(`pass null`, (t) => {
    const actual = toResultOkFromMaybe(null);
    t.true(isErr(actual), 'should be Err(void)');
    t.is(unwrapErr(actual), undefined, 'should the expected result');
});
