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

const assert = require('power-assert');

const ResultMod = require('../../src/ResultTE');
const Ok = ResultMod.Ok;
const Err = ResultMod.Err;

const EXPECTED_OK = 'expected_ok';
const EXPECTED_ERR = 'expected_err';

describe('Result<T, E>.or()', function(){
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
    });
});
