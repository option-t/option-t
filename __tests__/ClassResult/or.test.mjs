import test from 'ava';

import { createOk, createErr } from '../../__dist/esm/Result.mjs';

const EXPECTED = Symbol('0');
const UNEXPECTED = Symbol('1');

function toLabel(input) {
    if (input.isOk()) {
        return 'Ok<T>';
    } else {
        return 'Err<E>';
    }
}

const testcaseList = [
    [createOk(EXPECTED), createOk(UNEXPECTED)],
    [createOk(EXPECTED), createErr(UNEXPECTED)],
    [createErr(UNEXPECTED), createOk(EXPECTED)],
];
for (const [lhs, rhs] of testcaseList) {
    test(`lhs: ${toLabel(lhs)}, rhs: ${toLabel(rhs)}`, (t) => {
        const result = lhs.or(rhs);
        t.true(result.isOk(), 'the returned value should be `Ok');
        t.is(result.unwrap(), EXPECTED, 'the returned value should wrap the expected value');
    });
}

const failureTestcaseList = [[createErr(UNEXPECTED), createErr(EXPECTED)]];
for (const [lhs, rhs] of failureTestcaseList) {
    test(`lhs: ${toLabel(lhs)}, rhs: ${toLabel(rhs)}`, (t) => {
        const result = lhs.or(rhs);
        t.true(result.isErr(), 'the returned value should be `Err');
        t.is(result.unwrapErr(), EXPECTED, 'the returned value should wrap the expected value');
    });
}
