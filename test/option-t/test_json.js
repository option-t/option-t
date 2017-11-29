/*eslint no-prototype-builtins: 0*/

'use strict';

const assert = require('assert');
const Some = require('../../cjs/Option').Some;
const None = require('../../cjs/Option').None;

const primitiveVal = require('../utils').primitiveVal;
const objectVal = require('../utils').objectVal;
const nonSerializableObjectVal = require('../utils').nonSerializableObjectVal;
const funcVal = require('../utils').funcVal;
const symbolVal = require('../utils').symbolVal;
const undefinedVal = require('../utils').undefinedVal;

describe('JSON serializeation `Option<T>`', function(){

    describe('Some<T>', function () {
        primitiveVal.forEach(function(value){
            const type = typeof value;
            const label = 'type: ' + type + ', value: `' + String(value) + '`';

            describe(label, function() {
                let result = null;
                before(function(){
                    const raw = new Some(value);
                    result = JSON.parse(JSON.stringify(raw));
                });

                ['is_some', 'value'].forEach(function(key){
                    it('json has `' + key + '` field.', function () {
                        assert.strictEqual(result.hasOwnProperty(key), true);
                    });
                });

                it('`is_some` should be expected', function () {
                    assert.strictEqual(result.is_some, true);
                });

                it('`value` should be expected', function () {
                    assert.strictEqual(result.value, value);
                });
            });
        });

        objectVal.forEach(function(value){
            const type = typeof value;
            const label = 'type: ' + type + ', value: `' + String(value) + '`';

            describe(label, function () {
                let result = null;
                before(function(){
                    const raw = new Some(value);
                    result = JSON.parse(JSON.stringify(raw));
                });

                ['is_some', 'value'].forEach(function(key){
                    it('json has `' + key + '` field.', function () {
                        assert.strictEqual(result.hasOwnProperty(key), true);
                    });
                });

                it('`is_some` should be expected', function () {
                    assert.strictEqual(result.is_some, true);
                });

                // Compare each members because `object` will be an another object
                // after serialize & deserialize.
                it('`value` should be expected', function () {
                    assert.deepEqual(result.value, value);
                });
            });
        });

        nonSerializableObjectVal.forEach(function(value){
            const type = typeof value;
            const label = 'type: ' + type + ', value: `' + String(value) + '`';

            describe(label, function () {
                let result = null;
                before(function(){
                    const raw = new Some(value);
                    result = JSON.parse(JSON.stringify(raw));
                });

                ['is_some', 'value'].forEach(function(key){
                    it('json has `' + key + '` field.', function () {
                        assert.strictEqual(result.hasOwnProperty(key), true);
                    });
                });

                it('`is_some` should be expected', function () {
                    assert.strictEqual(result.is_some, true);
                });

                // Some objects cannot be serialized to json by default.
                it('`value` should be expected', function () {
                    assert.strictEqual(typeof result.value, 'object');
                });
            });
        });

        funcVal.forEach(function(value){
            const type = typeof value;
            const label = 'type: ' + type + ', value: `' + String(value) + '`';

            describe(label, function () {
                let result = null;
                before(function(){
                    const raw = new Some(value);
                    result = JSON.parse(JSON.stringify(raw));
                });

                ['is_some'].forEach(function(key){
                    it('json has `' + key + '` field.', function () {
                        assert.strictEqual(result.hasOwnProperty(key), true);
                    });
                });

                it('`is_some` should be expected', function () {
                    assert.strictEqual(result.is_some, true);
                });

                // `function` is not serialized to json.
                it('`value` should be expected', function () {
                    assert.strictEqual(result.value, undefined);
                });
            });
        });

        symbolVal.forEach(function(value){
            const type = typeof value;
            const label = 'type: ' + type + ', value: `' + String(value) + '`';

            describe(label, function () {
                let result = null;
                before(function(){
                    const raw = new Some(value);
                    result = JSON.parse(JSON.stringify(raw));
                });

                ['is_some'].forEach(function(key){
                    it('json has `' + key + '` field.', function () {
                        assert.strictEqual(result.hasOwnProperty(key), true);
                    });
                });

                it('`is_some` should be expected', function () {
                    assert.strictEqual(result.is_some, true);
                });

                // `function` is not serialized to json.
                it('`value` should be expected', function () {
                    assert.strictEqual(result.value, undefined);
                });
            });
        });

        undefinedVal.forEach(function(value){
            const type = typeof value;
            const label = 'type: ' + type + ', value: `' + String(value) + '`';

            describe(label, function () {
                let result = null;
                before(function(){
                    const raw = new Some(value);
                    result = JSON.parse(JSON.stringify(raw));
                });

                ['is_some'].forEach(function(key){
                    it('json has `' + key + '` field.', function () {
                        assert.strictEqual(result.hasOwnProperty(key), true);
                    });
                });

                it('`is_some` should be expected', function () {
                    assert.strictEqual(result.is_some, true);
                });

                // `function` is not serialized to json.
                it('`value` should be expected', function () {
                    assert.strictEqual(result.value, undefined);
                });
            });
        });
    });

    describe('None', function () {
        let result = null;
        before(function(){
            const raw = new None();
            result = JSON.parse(JSON.stringify(raw));
        });

        ['is_some'].forEach(function(key){
            it('json has `' + key + '` field.', function () {
                assert.strictEqual(result.hasOwnProperty(key), true);
            });
        });

        it('`is_some` should be expected', function () {
            assert.strictEqual(result.is_some, false);
        });

        it('`value` should be expected', function () {
            assert.strictEqual(result.value, undefined);
        });
    });
});
