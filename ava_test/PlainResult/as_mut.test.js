import test from 'ava';

const {
    createOk,
    createErr,
} = require('../../__dist/cjs/PlainResult/Result');
const {
    asMutResult,
} = require('../../__dist/cjs/PlainResult/asMut');

const FUNC_LIST = [
    createOk,
    createErr,
];

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


