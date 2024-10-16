import test from 'ava';

import { createSome, createNone } from 'option-t/plain_option/option';
import { asMutOption } from 'option-t/plain_option/unsafe/as_mut';

const FUNC_LIST = [createSome, createNone];

for (const factory of FUNC_LIST) {
    const funcname = factory.name;

    test(`asMutOption does not change the shape & object created by ${funcname}`, (t) => {
        const INT = Symbol('');
        const original = factory(INT);
        const actual = asMutOption(original);
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
                asMutOption(input);
            },
            {
                instanceOf: TypeError,
                message: `input is frozen, cannot cast to mutable`,
            },
        );
    });
}
