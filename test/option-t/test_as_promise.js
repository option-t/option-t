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
var shouldFulfilled = require('promise-test-helper').shouldFulfilled;
var shouldRejected = require('promise-test-helper').shouldRejected;

var Some = require('../../src/index').Some;
var None = require('../../src/index').None;

describe('Option<T>.asPromise()', function(){

    describe('cast `Some<T>` as `Promise<T>`', function () {
        var EXPECTED = 1;
        var promise = null;

        before(function(){
            assert.strictEqual(EXPECTED !== undefined, true);

            var option = new Some(EXPECTED);
            promise = option.asPromise();
        });

        after(function(){
            promise = null;
        });

        it('should be instanceof Promise', function() {
            assert.strictEqual(promise instanceof Promise, true);
        });

        it('should be fulfilled', function() {
            return shouldFulfilled(promise).then(function(){
                assert.strictEqual(true, true);
            });
        });

        it('the fulfilled should be expected', function() {
            return shouldFulfilled(promise).then(function(v){
                assert.strictEqual(v, EXPECTED);
            });
        });
    });

    describe('cast `Some<Promise<T>>` as `Promise<T>` if the wrapped Promise is fulfilled', function () {
        var EXPECTED = 1;
        var wrapped = Promise.resolve(EXPECTED);
        var promise = null;

        before(function(){
            assert.strictEqual(EXPECTED !== undefined, true);

            var option = new Some(wrapped);
            promise = option.asPromise();
        });

        after(function(){
            wrapped = null;
            promise = null;
        });

        it('should be instanceof Promise', function() {
            assert.strictEqual(promise instanceof Promise, true);
        });

        it('should be fulfilled', function() {
            return shouldFulfilled(promise).then(function(){
                assert.strictEqual(true, true);
            });
        });

        it('the fulfilled should be expected', function() {
            return shouldFulfilled(promise).then(function(v){
                assert.strictEqual(v, EXPECTED);
            });
        });
    });

    describe('cast `Some<Promise<T>>` as `Promise<T>` if the wrapped Promise is rejected', function () {
        var EXPECTED = 1;
        var wrapped = Promise.reject(EXPECTED);
        var promise = null;

        before(function(){
            assert.strictEqual(EXPECTED !== undefined, true);

            var option = new Some(wrapped);
            promise = option.asPromise();
        });

        after(function(){
            wrapped = null;
            promise = null;
        });

        it('should be instanceof Promise', function() {
            assert.strictEqual(promise instanceof Promise, true);
        });

        it('should be fulfilled', function() {
            return shouldRejected(promise).catch(function(){
                assert.strictEqual(true, true);
            });
        });

        it('the fulfilled should be expected', function() {
            return shouldRejected(promise).catch(function(error){
                assert.strictEqual(error, EXPECTED);
            });
        });
    });

    describe('cast `None<T>` as `Promise<T>`', function () {
        var promise = null;

        before(function(){
            var option = new None();
            promise = option.asPromise();
        });

        after(function(){
            promise = null;
        });

        it('should be instanceof Promise', function() {
            assert.strictEqual(promise instanceof Promise, true);
        });

        it('should be rejected', function() {
            return shouldRejected(promise).catch(function(){
                assert.strictEqual(true, true);
            });
        });

        it('the rejected reason should be a empty', function() {
            return shouldRejected(promise).catch(function(error){
                assert.strictEqual(error, undefined);
            });
        });
    });
});
