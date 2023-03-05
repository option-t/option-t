import test from 'ava';

import { createClassicOk, createClassicErr } from 'option-t/ClassicResult';

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
    [createClassicOk(EXPECTED), createClassicOk(UNEXPECTED)],
    [createClassicOk(EXPECTED), createClassicErr(UNEXPECTED)],
    [createClassicErr(UNEXPECTED), createClassicOk(EXPECTED)],
];
for (const [lhs, rhs] of testcaseList) {
    test(`lhs: ${toLabel(lhs)}, rhs: ${toLabel(rhs)}`, (t) => {
        const result = lhs.or(rhs);
        t.true(result.isOk(), 'the returned value should be `Ok');
        t.is(result.unwrap(), EXPECTED, 'the returned value should wrap the expected value');
    });
}

const failureTestcaseList = [[createClassicErr(UNEXPECTED), createClassicErr(EXPECTED)]];
for (const [lhs, rhs] of failureTestcaseList) {
    test(`lhs: ${toLabel(lhs)}, rhs: ${toLabel(rhs)}`, (t) => {
        const result = lhs.or(rhs);
        t.true(result.isErr(), 'the returned value should be `Err');
        t.is(result.unwrapErr(), EXPECTED, 'the returned value should wrap the expected value');
    });
}
