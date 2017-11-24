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
const Some = require('../../cjs/Option').Some;
const None = require('../../cjs/Option').None;

describe('Option<T>.unwrapOrElse()', function(){
    describe('self is `None`', function () {
        const EXPECTED = 1;

        it('shoule be the default value', function() {
            const option = new None();
            const result = option.unwrapOrElse(function(){
                return EXPECTED;
            });
            assert.strictEqual(result, EXPECTED);
        });
    });

    describe('self is `Some<T>`', function () {
        const EXPECTED = 1;
        const DEFAULT = 100;
        let isNotCalled = true;
        let result = null;

        before(function(){
            assert.strictEqual(EXPECTED !== DEFAULT, true);
            assert.strictEqual(result !== EXPECTED, true);

            const option = new Some(EXPECTED);
            result = option.unwrapOrElse(function(){
                isNotCalled = false;
                return DEFAULT;
            });
        });

        it('shoule be the wrapped value', function() {
            assert.strictEqual(result, EXPECTED);
        });

        it('shoule not call callback', function() {
            assert.strictEqual(isNotCalled, true);
        });
    });
});
