import test from 'ava';

import { createSome, createNone } from 'option-t/plain_option/option';
import { unsafeAsMutOption } from 'option-t/plain_option/unsafe/as_mut';

const FUNC_LIST = [createSome, createNone];

for (const factory of FUNC_LIST) {
    const funcname = factory.name;

    test(`unsafeAsMutOption does not change the shape & object created by ${funcname}`, (t) => {
        const INT = Symbol('');
        const original = factory(INT);
        const actual = unsafeAsMutOption(original);
        t.is(actual, original, 'should be same object');
        t.deepEqual(actual, original, 'should be the same shape');
    });
}

const TEST_CASE_LIST = [
    ['Some', createSome(Math.random())],
    ['None', createNone()],
];
for (const [typename, inputValue] of TEST_CASE_LIST) {
    test(`should throw if the passed value is frozen: ${typename}`, (t) => {
        const input = Object.freeze(inputValue);
        t.throws(
            () => {
                unsafeAsMutOption(input);
            },
            {
                instanceOf: TypeError,
                message: `input is frozen, cannot cast to mutable`,
            },
        );
    });
}
