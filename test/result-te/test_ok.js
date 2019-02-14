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

describe('Result<T, E>.ok()', function(){
    describe('Ok<T>', function () {
        let ok = null;

        before(function(){
            ok = new Ok(EXPECTED_OK);
        });

        it('return `Some<T>`', function () {
            assert.strictEqual(ok.ok().isSome, true);
        });

        it('the inner value is expected', function () {
            assert.strictEqual(ok.ok().unwrap(), EXPECTED_OK);
        });
    });

    describe('Err<E>', function () {
        it('return `None<T>`', function () {
            const err = new Err(EXPECTED_ERR);
            assert.strictEqual(err.ok().isNone, true);
        });
    });
});
