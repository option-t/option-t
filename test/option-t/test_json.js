/*
 * @license MIT License
 *
 * Copyright (c) 2015 Tetsuharu OHZEKI <saneyuki.snyk@gmail.com>
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */

'use strict';

const assert = require('power-assert');
const Some = require('../../src/index').Some;
const None = require('../../src/index').None;

const primitiveVal = require('../utils').primitiveVal;
const objectVal = require('../utils').objectVal;
const funcVal = require('../utils').funcVal;
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
