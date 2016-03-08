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

describe('Option<T>.flatMap()', function(){
    describe('self is `None`', function () {
        let option = null;
        let isNotCalled = true;

        before(function(){
            const none = new None();
            option = none.flatMap(function(){
                isNotCalled = false;
            });
        });

        it('the returned value shoule be `None`', function() {
            assert.strictEqual(option instanceof None, true);
        });

        it('the passed function should not be called', function() {
            assert.strictEqual(isNotCalled, true);
        });
    });

    describe('self is `Some<T>`', function () {

        describe('callback returns `None`', function () {
            let option = null;

            before(function(){
                const some = new Some(1);

                option = some.flatMap(function(){
                    return new None();
                });
            });

            it('the returned value shoule be `None`', function() {
                assert.strictEqual(option instanceof None, true);
            });
        });

        describe('callback returns `Some<T>`', function () {
            const EXPECTED = '1';
            let option = null;

            before(function(){
                const some = new Some(1);

                option = some.flatMap(function(val){
                    assert.strictEqual(val !== EXPECTED, true);
                    return new Some(EXPECTED);
                });
            });

            it('the returned value shoule be `Some<T>`', function() {
                assert.strictEqual(option instanceof Some, true);
            });

            it('the returned containing value shoule be expected', function() {
                assert.strictEqual(option.unwrap(), EXPECTED);
            });
        });

        describe('`fn` don\'t returns `Option<T>`', function () {
            let error = null;

            before(function(){
                const some = new Some(1);

                try {
                    some.flatMap(function(val){
                        const rv = 'hoge';
                        assert.notStrictEqual(val !== rv);
                        return rv;
                    });
                }
                catch (e) {
                    error = e;
                }
            });

            after(function(){
                error = null;
            });

            it('should throw an error', function() {
                assert.strictEqual(error instanceof Error, true);
            });

            it('the error message should be the expected', function() {
                assert.strictEqual(error.message, 'Option<T>.flatMap()\' param `fn` should return `Option<T>`.');
            });
        });
    });
});
