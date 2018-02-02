'use strict';

const assert = require('assert');

const { createSome, createNone } = require('../../cjs/Option');

const {
    primitiveVal,
    objectVal,
    nonSerializableObjectVal,
    funcVal,
    symbolVal,
    undefinedVal,
} = require('../utils');

describe('initialization `Option<T>`', function(){

    describe('`Some<T>`', function () {
        const param = primitiveVal
            .concat(objectVal)
            .concat(nonSerializableObjectVal)
            .concat(funcVal)
            .concat(symbolVal)
            .concat(undefinedVal);
        param.forEach(function(value){
            const type = typeof value;
            const label = 'type: ' + type + ', value: `' + String(value) + '`';

            describe(label, function () {
                let option = null;

                before(function(){
                    option = createSome(value);
                });

                after(function(){
                    option = null;
                });

                it('should be `Some<T>`', function() {
                    assert.strictEqual(option.isSome, true);
                });

                it('should not be `None`', function() {
                    assert.strictEqual(option.isNone, false);
                });

                it('`isSome` should be expected', function () {
                    assert.strictEqual(option.isSome, true);
                });

                it('`isNone` should be expected', function () {
                    assert.strictEqual(option.isNone, false);
                });

                it('the wrapped value should be expected', function() {
                    assert.strictEqual(option.toJSON().value, value);
                });
            });
        });
    });

    describe('`None`', function () {
        let option = null;
        before(function(){
            option = createNone();
        });

        it('should be `None`', function() {
            assert.strictEqual(option.isNone, true);
        });

        it('should not be `Some<T>`', function() {
            assert.strictEqual(option.isSome, false);
        });

        it('`isSome` should be expected', function () {
            assert.strictEqual(option.isSome, false);
        });

        it('`isNone` should be expected', function () {
            assert.strictEqual(option.isNone, true);
        });

        it('`value` should be expected', function () {
            assert.strictEqual(option.toJSON().value, undefined);
        });
    });
});
