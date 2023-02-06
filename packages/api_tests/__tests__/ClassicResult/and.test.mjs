import test from 'ava';

import { createClassicOk, createClassicErr } from '../../__dist/esm/ClassicResult/ClassicResult.js';

const EXPECTED = Symbol('EXPECTED');
const UNEXPECTED = Symbol('UNEXPECTED');

function toLabel(input) {
    if (input.isOk()) {
        return 'Ok<T>';
    } else {
        return 'Err<E>';
    }
}

const testcaseList = [[createClassicOk(UNEXPECTED), createClassicOk(EXPECTED)]];
for (const [lhs, rhs] of testcaseList) {
    test(`lhs: ${toLabel(lhs)}, rhs: ${toLabel(rhs)}`, (t) => {
        const result = lhs.and(rhs);
        t.true(result.isOk(), 'the returned value should be `Ok');
        t.is(result.unwrap(), EXPECTED, 'the returned value should wrap the expected value');
    });
}

const failureTestcaseList = [
    [createClassicOk(UNEXPECTED), createClassicErr(EXPECTED)],
    [createClassicErr(EXPECTED), createClassicOk(UNEXPECTED)],
    [createClassicErr(EXPECTED), createClassicErr(UNEXPECTED)],
];
for (const [lhs, rhs] of failureTestcaseList) {
    test(`lhs: ${toLabel(lhs)}, rhs: ${toLabel(rhs)}`, (t) => {
        const result = lhs.and(rhs);
        t.true(result.isErr(), 'the returned value should be `Err');
        t.is(result.unwrapErr(), EXPECTED, 'the returned value should wrap the expected value');
    });
}
