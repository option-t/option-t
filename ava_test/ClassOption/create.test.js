import test from 'ava';

const { createSome, createNone } = require('../../__dist/cjs/Option');

const {
    primitiveVal,
    objectVal,
    nonSerializableObjectVal,
    funcVal,
    symbolVal,
    undefinedVal,
} = require('../utils');

const param = primitiveVal
    .concat(objectVal)
    .concat(nonSerializableObjectVal)
    .concat(funcVal)
    .concat(symbolVal)
    .concat(undefinedVal);
param.forEach(function (value) {
    const type = typeof value;
    const label = 'type: ' + type + ', value: `' + String(value) + '`';

    test('`Some<T>`: ' + label, function (t) {
        const option = createSome(value);

        t.is(option.isSome, true, 'should be `Some<T>`');
        t.is(option.isNone, false, 'should not be `None`');
        t.is(option.isSome, true, '`isSome` should be expected');
        t.is(option.isNone, false, '`isNone` should be expected');
        t.is(option.toJSON().value, value, 'the wrapped value should be expected');
    });
});

test('`None`', function (t) {
    const option = createNone();
    t.is(option.isNone, true, 'should be `None`');
    t.is(option.isSome, false, 'should not be `Some<T>`');
    t.is(option.isSome, false, '`isSome` should be expected');
    t.is(option.isNone, true, '`isNone` should be expected');
    t.is(option.toJSON().value, undefined, '`value` should be expected');
});
