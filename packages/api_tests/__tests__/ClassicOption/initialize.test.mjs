import test from 'ava';

import {
    createClassicSome,
    createClassicNone,
    ClassicSomeConstructor as Some,
    ClassicNoneConstructor as None,
} from 'option-t/esm/ClassicOption';

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
param.forEach(function (value) {
    const type = typeof value;

    {
        const label = 'Some(T): type: ' + type + ', value: `' + String(value) + '`';

        test(label, function (t) {
            const option = createClassicSome(value);

            t.is(option.isSome, true, 'should be `Some<T>`');
            t.is(option.isNone, false, 'should not be `None`');
            t.is(option.isSome, true, '`isSome` should be expected');
            t.is(option.isNone, false, '`isNone` should be expected');
            t.is(option.toJSON().value, value, 'the wrapped value should be expected');
            t.true(Object.isSealed(option), 'the object should be sealed');
        });
    }

    {
        const label = 'Some(T): type: ' + type + ', value: `' + String(value) + ' by Constructor`';

        test(label, function (t) {
            const option = new Some(value);

            t.is(option.isSome, true, 'should be `Some<T>`');
            t.is(option.isNone, false, 'should not be `None`');
            t.is(option.isSome, true, '`isSome` should be expected');
            t.is(option.isNone, false, '`isNone` should be expected');
            t.is(option.toJSON().value, value, 'the wrapped value should be expected');
            t.true(Object.isSealed(option), 'the object should be sealed');
        });
    }
});

test('`None`', function (t) {
    const option = createClassicNone();

    t.is(option.isNone, true, 'should be `None`');
    t.is(option.isSome, false, 'should not be `Some<T>`');
    t.is(option.isSome, false, '`isSome` should be expected');
    t.is(option.isNone, true, '`isNone` should be expected');
    t.is(option.toJSON().value, undefined, '`value` should be expected');
    t.true(Object.isSealed(option), 'the object should be sealed');
});

test('`None by constructor`', function (t) {
    const option = new None();

    t.is(option.isNone, true, 'should be `None`');
    t.is(option.isSome, false, 'should not be `Some<T>`');
    t.is(option.isSome, false, '`isSome` should be expected');
    t.is(option.isNone, true, '`isNone` should be expected');
    t.is(option.toJSON().value, undefined, '`value` should be expected');
    t.true(Object.isSealed(option), 'the object should be sealed');
});
