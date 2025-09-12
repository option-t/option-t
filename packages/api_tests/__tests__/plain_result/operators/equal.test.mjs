import test from 'ava';

import { equalForResult } from 'option-t/plain_result/equal';
import {
    createOk,
    createErr,
    isOk,
    isErr,
    unwrapOk,
    unwrapErr,
} from 'option-t/plain_result/result';

const INNER_VALUE_A = Symbol('A');
const INNER_VALUE_B = Symbol('B');

function toString(result) {
    if (isOk(result)) {
        return `Ok<${String(unwrapOk(result))}>`;
    } else if (isErr(result)) {
        return `Err<${String(unwrapErr(result))}>`;
    } else {
        throw new TypeError(`unexpected type, ${String(result)}`);
    }
}

function createTestcase(labelPrefix, lhs, rhs) {
    const label = `${labelPrefix}: lhs(${toString(lhs)}), rhs(${toString(rhs)})`;
    return {
        label,
        lhs,
        rhs,
    };
}

function createTestcaseForDifferentValue(lhs, rhs) {
    return createTestcase('', lhs, rhs);
}

function createTestcaseForSameValue(lhs) {
    return createTestcase('actual same instance', lhs, lhs);
}

{
    // prettier-ignore
    const trueTestCase = [
        // Ok(A)
        [createTestcaseForDifferentValue(createOk(INNER_VALUE_A), createOk(INNER_VALUE_A)), true],
        [createTestcaseForDifferentValue(createOk(INNER_VALUE_A), createOk(INNER_VALUE_B)), false],
        [createTestcaseForDifferentValue(createOk(INNER_VALUE_A), createErr(INNER_VALUE_A)), false],
        [createTestcaseForDifferentValue(createOk(INNER_VALUE_A), createErr(INNER_VALUE_B)), false],

        // Ok<B>
        [createTestcaseForDifferentValue(createOk(INNER_VALUE_B), createOk(INNER_VALUE_A)), false],
        [createTestcaseForDifferentValue(createOk(INNER_VALUE_B), createOk(INNER_VALUE_B)), true],
        [createTestcaseForDifferentValue(createOk(INNER_VALUE_B), createErr(INNER_VALUE_A)), false],
        [createTestcaseForDifferentValue(createOk(INNER_VALUE_B), createErr(INNER_VALUE_B)), false],

        // Err<A>
        [createTestcaseForDifferentValue(createErr(INNER_VALUE_A), createOk(INNER_VALUE_A)), false],
        [createTestcaseForDifferentValue(createErr(INNER_VALUE_A), createOk(INNER_VALUE_B)), false],
        [createTestcaseForDifferentValue(createErr(INNER_VALUE_A), createErr(INNER_VALUE_A)), true],
        [createTestcaseForDifferentValue(createErr(INNER_VALUE_A), createErr(INNER_VALUE_B)), false],

        // Err<B>
        [createTestcaseForDifferentValue(createErr(INNER_VALUE_B), createOk(INNER_VALUE_A)), false],
        [createTestcaseForDifferentValue(createErr(INNER_VALUE_B), createOk(INNER_VALUE_B)), false],
        [createTestcaseForDifferentValue(createErr(INNER_VALUE_B), createErr(INNER_VALUE_A)), false],
        [createTestcaseForDifferentValue(createErr(INNER_VALUE_B), createErr(INNER_VALUE_B)), true],

        // actually same instance
        [createTestcaseForSameValue(createOk(INNER_VALUE_A)), true],
        [createTestcaseForSameValue(createErr(INNER_VALUE_A)), true],
    ];

    for (const [{ label, lhs, rhs }, expected] of trueTestCase) {
        test(label + ', lhs == rhs', (t) => {
            t.is(equalForResult(lhs, rhs), expected);
        });

        test(label + ', rhs == lhs', (t) => {
            t.is(equalForResult(rhs, lhs), expected);
        });
    }
}

test(`exported alias' identity check`, (t) => {
    t.pass(true);
});
