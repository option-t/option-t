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
const Some = require('../../src/OptionT').Some;
const None = require('../../src/OptionT').None;

describe('Option<T>.drop()', function(){

    describe('drop `Some<T>`', function () {
        let option = null;

        before(function(){
            option = new Some(1);
            option.drop();
        });

        after(function(){
            option = null;
        });

        it('the inner should be freed', function() {
            assert.strictEqual(option.value, null);
        });
    });

    describe('drop `None`', function () {
        let option = null;

        before(function(){
            option = new None();
            option.drop();
        });

        after(function(){
            option = null;
        });

        it('the inner should be freed', function() {
            assert.strictEqual(option.value, null);
        });
    });
});

describe('Option<T>.drop() with destructor', function(){
    describe('Some<T>', function () {
        const EXPECTED = 1;
        let option = null;
        let arg = null;
        let isCalled = false;
        function destructor(v) {
            arg = v;
            isCalled = true;
        }

        before(function(){
            option = new Some(EXPECTED);
            option.drop(destructor);
        });

        after(function(){
            option = null;
        });

        it('should be called with the destructor', function () {
            assert.strictEqual(isCalled, true);
        });

        it('should be called with the argument', function () {
            assert.strictEqual(arg, EXPECTED);
        });

        it('the inner should be freed', function() {
            assert.strictEqual(option.value, null);
        });
    });

    describe('None', function () {
        let option = null;
        let isCalled = false;
        function destructor() {
            isCalled = true;
        }

        before(function(){
            option = new None();
            option.drop(destructor);
        });

        after(function(){
            option = null;
        });

        it('should not be called with the destructor', function () {
            assert.strictEqual(isCalled, false);
        });

        it('the inner should be freed', function() {
            assert.strictEqual(option.value, null);
        });
    });
});
