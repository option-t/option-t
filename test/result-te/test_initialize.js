/*
 * MIT License
 *
 * Copyright (c) 2016 Tetsuharu OHZEKI <saneyuki.snyk@gmail.com>
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

const assert = require('assert');

const ResultMod = require('../../__dist/cjs/Result');
const Ok = ResultMod.Ok;
const Err = ResultMod.Err;

const primitiveVal = require('../utils').primitiveVal;
const objectVal = require('../utils').objectVal;
const nonSerializableObjectVal = require('../utils').nonSerializableObjectVal;
const funcVal = require('../utils').funcVal;
const symbolVal = require('../utils').symbolVal;
const undefinedVal = require('../utils').undefinedVal;

describe('initialization `Result<T, E>`', function(){
    describe('Ok<T>', function () {
        const param = primitiveVal.concat(objectVal).concat(nonSerializableObjectVal).concat(funcVal).concat(symbolVal).concat(undefinedVal);
        param.forEach(function(value){
            const type = typeof value;
            const label = 'type: ' + type + ', value: `' + String(value) + '`';

            describe(label, function () {
                let result = null;

                before(function(){
                    result = new Ok(value);
                });

                after(function(){
                    result = null;
                });

                it('should be sealed', function() {
                    assert.strictEqual(Object.isSealed(result), true);
                });

                it('should be `Ok<T>`', function() {
                    assert.strictEqual(result.isOk(), true);
                });

                it('should not be `Err<E>`', function() {
                    assert.strictEqual(result.isErr(), false);
                });

                it('`isOk` should be expected', function () {
                    assert.strictEqual(result.isOk(), true);
                });

                it('`isErr` should be expected', function () {
                    assert.strictEqual(result.isErr(), false);
                });
            });
        });
    });

    describe('Err<E>', function () {
        const param = primitiveVal.concat(objectVal).concat(nonSerializableObjectVal).concat(funcVal).concat(symbolVal).concat(undefinedVal);
        param.forEach(function(value){
            const type = typeof value;
            const label = 'type: ' + type + ', value: `' + String(value) + '`';

            describe(label, function () {
                let result = null;

                before(function(){
                    result = new Err(value);
                });

                after(function(){
                    result = null;
                });

                it('should be sealed', function() {
                    assert.strictEqual(Object.isSealed(result), true);
                });

                it('should be `Err<E>`', function() {
                    assert.strictEqual(result.isOk(), false);
                });

                it('should not be `Ok<T>`', function() {
                    assert.strictEqual(result.isErr(), true);
                });

                it('`isOk` should be expected', function () {
                    assert.strictEqual(result.isOk(), false);
                });

                it('`isErr` should be expected', function () {
                    assert.strictEqual(result.isErr(), true);
                });
            });
        });
    });
});
