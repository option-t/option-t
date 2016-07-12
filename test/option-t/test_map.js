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

const assert = require('assert');
const Some = require('../../src/Option').Some;
const None = require('../../src/Option').None;

describe('Option<T>.map()', function(){
    describe('self is `None`', function () {
        let option = null;
        let isNotCalled = true;

        before(function(){
            const none = new None();
            option = none.map(function(){ // eslint-disable-line array-callback-return
                isNotCalled = false;
            });
        });

        it('the returned value shoule be `None`: 1', function() {
            assert.strictEqual(option.isSome, false);
        });

        it('the returned value shoule be `None`: 2', function() {
            assert.strictEqual(option instanceof None, true);
        });

        it('the passed function should not be called', function() {
            assert.strictEqual(isNotCalled, true);
        });
    });

    describe('self is `Some<T>`', function () {
        const EXPECTED = '1';
        let option = null;

        before(function(){
            const some = new Some(1);
            option = some.map(function(val){
                assert.notStrictEqual(val, EXPECTED);
                return EXPECTED;
            });
        });

        it('the returned value shoule be `Some<T>`: 1', function() {
            assert.strictEqual(option instanceof Some, true);
        });

        it('the returned value shoule be `Some<T>`: 2', function() {
            assert.strictEqual(option.unwrap(), EXPECTED);
        });
    });
});
