import test from 'ava';

import { createOk, createErr } from '../../__dist/esm/Result.mjs';

import {
    primitiveVal,
    objectVal,
    nonSerializableObjectVal,
    funcVal,
    symbolVal,
    undefinedVal,
} from '../utils.mjs';

const param = primitiveVal
    .concat(objectVal)
    .concat(nonSerializableObjectVal)
    .concat(funcVal)
    .concat(symbolVal)
    .concat(undefinedVal);

for (const value of param) {
    const type = typeof value;
    const label = 'OK<T>: type: ' + type + ', value: `' + String(value) + '`';
    test(label, (t) => {
        const result = createOk(value);

        t.is(Object.isSealed(result), true, 'should be sealed');
        t.is(result.isOk(), true, 'should be `Ok<T>`');
        t.is(result.isErr(), false, 'should not be `Err<E>`');
        t.is(result.isOk(), true, '`isOk` should be expected');
        t.is(result.isErr(), false, '`isErr` should be expected');
        t.true(Object.isSealed(result), 'the object should be sealed');
    });
}

for (const value of param) {
    const type = typeof value;
    const label = 'Err<E>: type: ' + type + ', value: `' + String(value) + '`';
    test(label, (t) => {
        const result = createErr(value);

        t.is(Object.isSealed(result), true, 'should be sealed');
        t.is(result.isOk(), false, 'should be `Err<E>`');
        t.is(result.isErr(), true, 'should not be `Ok<T>`');
        t.is(result.isOk(), false, '`isOk` should be expected');
        t.is(result.isErr(), true, '`isErr` should be expected');
        t.true(Object.isSealed(result), 'the object should be sealed');
    });
}
