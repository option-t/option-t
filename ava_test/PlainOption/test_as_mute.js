import test from 'ava';

const {
    createSome,
    createNone,
} = require('../../__dist/cjs/PlainOption/Option');
const {
    asMutOption,
} = require('../../__dist/cjs/PlainOption/asMut');

const FUNC_LIST = [
    createSome,
    createNone,
];

for (const factory of FUNC_LIST) {
    const funcname = factory.name;

    test(`asMutResult does not change the shape & object created by ${funcname}`, (t) => {
        const INT = Symbol('');
        const original = factory(INT);
        const actual = asMutOption(original);
        t.is(actual, original, 'should be same object');
        t.deepEqual(actual, original, 'should be the same shape');
    });
}


