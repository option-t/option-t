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

const { createOk, createErr } = require('../../__dist/cjs/Result');

describe('Result<T, E>.or()', function(){
    describe('Ok<T>', function () {
        describe('with Ok', function () {
            const EXPECTED = 0;
            const UNEXPECTED = 1;

            let result = null;

            before(function(){
                assert.notStrictEqual(EXPECTED, UNEXPECTED);

                const left = createOk(EXPECTED);
                const right = createErr(UNEXPECTED);
                result = left.or(right);
            });

            it('the returned value should be `Ok', function () {
                assert.strictEqual(result.isOk(), true);
            });

            it('the returned value should wrap the expected value', function () {
                assert.strictEqual(result.unwrap(), EXPECTED);
            });
        });

        describe('with Err', function () {
            const EXPECTED = 0;
            const UNEXPECTED = 1;

            let result = null;

            before(function(){
                assert.notStrictEqual(EXPECTED, UNEXPECTED);

                const left = createOk(EXPECTED);
                const right = createErr(UNEXPECTED);
                result = left.or(right);
            });

            it('the returned value should be `Ok', function () {
                assert.strictEqual(result.isOk(), true);
            });

            it('the returned value should wrap the expected value', function () {
                assert.strictEqual(result.unwrap(), EXPECTED);
            });
        });
    });

    describe('Err<E>', function () {
        describe('with Ok', function () {
            const EXPECTED = 0;
            const UNEXPECTED = 1;

            let result = null;

            before(function(){
                assert.notStrictEqual(EXPECTED, UNEXPECTED);

                const left = createErr(UNEXPECTED);
                const right = createOk(EXPECTED);
                result = left.or(right);
            });

            it('the returned value should be `Ok', function () {
                assert.strictEqual(result.isOk(), true);
            });

            it('the returned value should wrap the expected value', function () {
                assert.strictEqual(result.unwrap(), EXPECTED);
            });
        });

        describe('with Err', function () {
            const EXPECTED = 0;
            const UNEXPECTED = 1;

            let result = null;

            before(function(){
                assert.notStrictEqual(EXPECTED, UNEXPECTED);

                const left = createErr(UNEXPECTED);
                const right = createErr(EXPECTED);
                result = left.or(right);
            });

            it('the returned value should be `Err', function () {
                assert.strictEqual(result.isErr(), true);
            });

            it('the returned value should wrap the expected value', function () {
                assert.strictEqual(result.unwrapErr(), EXPECTED);
            });
        });
    });
});
