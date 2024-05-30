import test from 'ava';

import { createOk, createErr } from 'option-t/plain_result/result';
import { asMutResult } from 'option-t/plain_result/as_mut';

const FUNC_LIST = [createOk, createErr];

for (const factory of FUNC_LIST) {
    const funcname = factory.name;

    test(`asMutResult does not change the shape & object created by ${funcname}`, (t) => {
        const INT = Symbol('');
        const original = factory(INT);
        const actual = asMutResult(original);
        t.is(actual, original, 'should be same object');
        t.deepEqual(actual, original, 'should be the same shape');
    });
}

const TEST_CASE_LIST = [
    ['Ok', createOk(Math.random())],
    ['Err', createErr(new Error())],
];
for (const [typename, inputValue] of TEST_CASE_LIST) {
    test(`should throw if the passed value is frozen: ${typename}`, (t) => {
        const input = Object.freeze(inputValue);
        t.throws(
            () => {
                asMutResult(input);
            },
            {
                instanceOf: TypeError,
                message: `input is frozen, cannot cast to mutable`,
            },
        );
    });
}
