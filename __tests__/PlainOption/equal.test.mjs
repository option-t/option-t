import test from 'ava';

import { createSome, createNone, isSome, isNone } from '../../__dist/esm/PlainOption/Option.js';
import { equalForOption } from '../../__dist/esm/PlainOption/equal.js';
import { unwrapOption } from '../../__dist/esm/PlainOption/unwrap.js';

const INNER_VALUE_A = Symbol('A');
const INNER_VALUE_B = Symbol('B');

function toString(result) {
    if (isSome(result)) {
        return `Some<${String(unwrapOption(result))}>`;
    } else if (isNone(result)) {
        return `None`;
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
        // Some(A)
        [createTestcaseForDifferentValue(createSome(INNER_VALUE_A), createSome(INNER_VALUE_A)), true],
        [createTestcaseForDifferentValue(createSome(INNER_VALUE_A), createSome(INNER_VALUE_B)), false],
        [createTestcaseForDifferentValue(createSome(INNER_VALUE_A), createNone()), false],

        // Some(B)
        [createTestcaseForDifferentValue(createSome(INNER_VALUE_B), createSome(INNER_VALUE_A)), false],
        [createTestcaseForDifferentValue(createSome(INNER_VALUE_B), createSome(INNER_VALUE_B)), true],
        [createTestcaseForDifferentValue(createSome(INNER_VALUE_B), createNone()), false],

        // None
        [createTestcaseForDifferentValue(createNone(), createSome(INNER_VALUE_A)), false],
        [createTestcaseForDifferentValue(createNone(), createSome(INNER_VALUE_B)), false],
        [createTestcaseForDifferentValue(createNone(), createNone()), true],

        // actually same instance
        [createTestcaseForSameValue(createSome(INNER_VALUE_A)), true],
        [createTestcaseForSameValue(createNone()), true],
    ];

    for (const [{ label, lhs, rhs }, expected] of trueTestCase) {
        test(label + ', lhs == rhs', (t) => {
            t.is(equalForOption(lhs, rhs), expected);
        });

        test(label + ', rhs == lhs', (t) => {
            t.is(equalForOption(rhs, lhs), expected);
        });
    }
}
