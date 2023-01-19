import test from 'ava';

import { createOk, createErr } from '../../__dist/esm/Result.js';

const EXPECTED = Symbol('EXPECTED');
const UNEXPECTED = Symbol('UNEXPECTED');

function toLabel(input) {
    if (input.isOk()) {
        return 'Ok<T>';
    } else {
        return 'Err<E>';
    }
}

const testcaseList = [[createOk(UNEXPECTED), createOk(EXPECTED)]];
for (const [lhs, rhs] of testcaseList) {
    test(`lhs: ${toLabel(lhs)}, rhs: ${toLabel(rhs)}`, (t) => {
        const result = lhs.and(rhs);
        t.true(result.isOk(), 'the returned value should be `Ok');
        t.is(result.unwrap(), EXPECTED, 'the returned value should wrap the expected value');
    });
}

const failureTestcaseList = [
    [createOk(UNEXPECTED), createErr(EXPECTED)],
    [createErr(EXPECTED), createOk(UNEXPECTED)],
    [createErr(EXPECTED), createErr(UNEXPECTED)],
];
for (const [lhs, rhs] of failureTestcaseList) {
    test(`lhs: ${toLabel(lhs)}, rhs: ${toLabel(rhs)}`, (t) => {
        const result = lhs.and(rhs);
        t.true(result.isErr(), 'the returned value should be `Err');
        t.is(result.unwrapErr(), EXPECTED, 'the returned value should wrap the expected value');
    });
}
