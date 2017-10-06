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
const PlainResult = require('../../lib/PlainResult');

describe('PlainResult::createOk', () => {
    const EXPECTED = 1;
    let actual = null;
    before(() => {
        actual = PlainResult.createOk(EXPECTED);
    });

    it(`actual should be Ok`, () => {
        assert.strictEqual(PlainResult.isOk(actual), true);
    });

    it(`actual should be expected`, () => {
        assert.strictEqual(actual.val, EXPECTED);
    });
});

describe('PlainResult::createErr', () => {
    const EXPECTED = 'error';
    let actual = null;
    before(() => {
        actual = PlainResult.createErr(EXPECTED);
    });

    it(`actual should be Err`, () => {
        assert.strictEqual(PlainResult.isErr(actual), true);
    });

    it(`actual should be expected`, () => {
        assert.strictEqual(actual.err, EXPECTED);
    });
});
