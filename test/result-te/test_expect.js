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

const EXPECTED_OK = 'expected_ok';
const EXPECTED_ERR = 'expected_err';

describe('Result<T, E>.expect()', function(){
    describe('Ok<T>', function () {
        it('expect()', function () {
            const ok = new Ok(EXPECTED_OK);
            assert.strictEqual(ok.expect('not expected message'), EXPECTED_OK);
        });
    });

    describe('Err<E>', function () {
        const UNEXPECTED = 100;
        let caught = null;

        before(function(){
            try {
                const err = new Err(UNEXPECTED);
                err.expect(EXPECTED_ERR);
            }
            catch (e) {
                caught = e;
            }
        });

        it('is instance of `Error`', function () {
            assert.strictEqual( (caught instanceof TypeError), true);
        });

        it('the error message is expected', function () {
            assert.strictEqual(caught.message, EXPECTED_ERR);
        });
    });
});
