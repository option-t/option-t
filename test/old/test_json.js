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

var assert = require('power-assert');
var OptionType = require('../../src/index').OptionType;

var primitiveVal = require('./utils').primitiveVal;
var objectVal = require('./utils').objectVal;
var funcVal = require('./utils').funcVal;

describe('JSON serializeation', function(){

    describe('Some<T>', function () {
        primitiveVal.forEach(function(value){
            var type = typeof value;
            var label = 'type: ' + type + ', value: `' + String(value) + '`';

            describe(label, function() {
                var result = null;
                before(function(){
                    var raw = new OptionType(value);
                    result = JSON.parse(JSON.stringify(raw));
                });

                ['is_some', 'value'].forEach(function(key){
                    it('json has `' + key + '` field.', function () {
                        assert.ok(result.hasOwnProperty(key));
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
            var type = typeof value;
            var label = 'type: ' + type + ', value: `' + String(value) + '`';

            describe(label, function () {
                var result = null;
                before(function(){
                    var raw = new OptionType(value);
                    result = JSON.parse(JSON.stringify(raw));
                });

                ['is_some', 'value'].forEach(function(key){
                    it('json has `' + key + '` field.', function () {
                        assert.ok(result.hasOwnProperty(key));
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
            var type = typeof value;
            var label = 'type: ' + type + ', value: `' + String(value) + '`';

            describe(label, function () {
                var result = null;
                before(function(){
                    var raw = new OptionType(value);
                    result = JSON.parse(JSON.stringify(raw));
                });

                ['is_some'].forEach(function(key){
                    it('json has `' + key + '` field.', function () {
                        assert.ok(result.hasOwnProperty(key));
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
        [
            [new OptionType(), 'pass `undefined` implicitly'],
            [new OptionType(undefined), 'pass `undefined` explicitly']
        ].forEach(function(tuple){
            var raw = tuple[0];
            var label = tuple[1];

            describe(label, function() {
                var result = null;
                before(function(){
                    result = JSON.parse(JSON.stringify(raw));
                });

                ['is_some'].forEach(function(key){
                    it('json has `' + key + '` field.', function () {
                        assert.ok(result.hasOwnProperty(key));
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
    });
});
