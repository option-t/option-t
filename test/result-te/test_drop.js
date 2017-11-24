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

const ResultMod = require('../../cjs/Result');
const Ok = ResultMod.Ok;
const Err = ResultMod.Err;

const EXPECTED_OK = 'expected_ok';
const EXPECTED_ERR = 'expected_err';

describe('Result<T, E>.drop()', function(){
    describe('Ok<T>', function () {
        it('is callable', function () {
            const ok = new Ok(EXPECTED_OK);
            ok.drop();
        });

        it('should be freezed', function () {
            const ok = new Ok(EXPECTED_OK);
            ok.drop();
            assert.strictEqual(Object.isFrozen(ok), true);
        });

        it('should be freed', function () {
            const ok = new Ok(EXPECTED_OK);
            ok.drop();
            assert.strictEqual(ok.unwrap(), null);
        });
    });

    describe('Err<E>', function () {
        it('is callable', function () {
            const err = new Err(EXPECTED_ERR);
            err.drop();
        });

        it('should be freezed', function () {
            const err = new Err(EXPECTED_ERR);
            err.drop();
            assert.strictEqual(Object.isFrozen(err), true);
        });

        it('should be freed', function () {
            const err = new Err(EXPECTED_ERR);
            err.drop();
            assert.strictEqual(err.unwrapErr(), null);
        });
    });
});

describe('Result<T, E>.drop() with destructors', function(){
    describe('Ok<T>', function () {
        let result = null;
        let args = null;
        let isCalledOk = false;
        let isCalledErr = false;

        function okDestructor(v) {
            args = v;
            isCalledOk = true;
        }
        function errDestructor() {
            isCalledErr = true;
        }

        before(function () {
            result = new Ok(EXPECTED_OK);
            result.drop(okDestructor, errDestructor);
        });

        it('should be called the destructor', function () {
            assert.strictEqual(isCalledOk, true);
        });

        it('should be called with the expected', function () {
            assert.strictEqual(args, EXPECTED_OK);
        });

        it('should not be called the err destructor', function () {
            assert.strictEqual(isCalledErr, false);
        });

        it('should be freezed', function () {
            assert.strictEqual(Object.isFrozen(result), true);
        });

        it('should be freed', function () {
            assert.strictEqual(result.unwrap(), null);
        });
    });

    describe('Err<E>', function () {
        let result = null;
        let args = null;
        let isCalledOk = false;
        let isCalledErr = false;

        function okDestructor() {
            isCalledOk = true;
        }
        function errDestructor(e) {
            args = e;
            isCalledErr = true;
        }

        before(function () {
            result = new Err(EXPECTED_ERR);
            result.drop(okDestructor, errDestructor);
        });

        it('should not be called the destructor', function () {
            assert.strictEqual(isCalledOk, false);
        });

        it('should be called the err destructor', function () {
            assert.strictEqual(isCalledErr, true);
        });

        it('should be called with the expected', function () {
            assert.strictEqual(args, EXPECTED_ERR);
        });

        it('should be freezed', function () {
            assert.strictEqual(Object.isFrozen(result), true);
        });

        it('should be freed', function () {
            assert.strictEqual(result.unwrapErr(), null);
        });
    });
});
