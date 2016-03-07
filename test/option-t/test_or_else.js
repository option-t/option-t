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
var Some = require('../../src/index').Some;
var None = require('../../src/index').None;

describe('Option<T>.orElse()', function(){
    describe('self is `None`, param returns `Some<T>`', function () {
        var EXPECTED = 1;
        var option = null;

        before(function(){
            var none = new None();
            option = none.orElse(function(){
                return new Some(EXPECTED);
            });
        });

        it('the returned value shoule be `Some<T>`: 1', function() {
            assert.ok(option instanceof Some);
        });

        it('the returned value shoule be `Some<T>`: 2', function() {
            assert.strictEqual(option.unwrap(), EXPECTED);
        });
    });

    describe('self is `None`, param returns `None`', function () {
        var option = null;

        before(function(){
            var none = new None();
            option = none.orElse(function(){
                return new None();
            });
        });

        it('the returned value shoule be `None`', function() {
            assert.ok(option instanceof None);
        });
    });

    describe('self is `None`, param don\'t return `Option<T>`', function () {
        var error = null;

        before(function(){
            var none = new None();
            try {
                none.orElse(function(){
                    return "barfoo";
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
            assert.ok(error instanceof Error);
        });

        it('the error message should be the expected', function() {
            assert.strictEqual(error.message, 'Option<T>.orElse()\' param `fn` should return `Option<T>`.');
        });
    });

    describe('self is `Some<T>`, param returns `Some<T>`', function () {
        var EXPECTED = 1;
        var option = null;
        var isNotCalled = true;

        before(function(){
            var some = new Some(EXPECTED);
            option = some.orElse(function(){
                isNotCalled = false;
                return new Some(3);
            });
        });

        it('the returned value shoule be `Some<T>`: 1', function() {
            assert.ok(option instanceof Some);
        });

        it('the returned value shoule be `Some<T>`: 2', function() {
            assert.strictEqual(option.unwrap(), EXPECTED);
        });

        it('shoule not call callback', function() {
            assert.ok(isNotCalled);
        });
    });

    describe('self is `Some<T>`, param returns `None`', function () {
        var EXPECTED = 1;
        var option = null;
        var isNotCalled = true;

        before(function(){
            var some = new Some(EXPECTED);
            option = some.orElse(function(){
                isNotCalled = false;
                return new None();
            });
        });

        it('the returned value shoule be `Some<T>`: 1', function() {
            assert.ok(option instanceof Some);
        });

        it('the returned value shoule be `Some<T>`: 2', function() {
            assert.strictEqual(option.unwrap(), EXPECTED);
        });

        it('shoule not call callback', function() {
            assert.ok(isNotCalled);
        });
    });
});
