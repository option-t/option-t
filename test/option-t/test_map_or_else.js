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

describe('Option<T>.mapOrElse()', function(){
    describe('self is `None`', function () {
        const EXPECTED = 1;
        let result = 0;
        let defaultFnIsCalled = false;
        let mapFnIsCalled = false;

        before(function(){
            assert.strictEqual(result !== EXPECTED, true);

            const none = new None();
            result = none.mapOrElse(function defaultFn() {
                defaultFnIsCalled = true;
                return EXPECTED;
            }, function mapFn(){
                mapFnIsCalled = true;
            });
        });

        it('the returned value shoule be expected', function() {
            assert.strictEqual(result, EXPECTED);
        });

        it('`defaultFn` function should be called', function() {
            assert.strictEqual(defaultFnIsCalled, true);
        });

        it('`mapFn` should not be called', function() {
            assert.strictEqual(mapFnIsCalled, false);
        });
    });

    describe('self is `Some<T>`', function () {
        const EXPECTED = 1;
        const DEFAULT = 2;
        let result = 0;
        let defaultFnIsCalled = false;
        let mapFnIsCalled = false;

        before(function(){
            assert.strictEqual(EXPECTED !== DEFAULT, true);
            assert.strictEqual(result !== EXPECTED, true);
            assert.strictEqual(result !== DEFAULT, true);

            const some = new Some('bar');
            result = some.mapOrElse(function defaultFn() {
                defaultFnIsCalled = true;
                return DEFAULT;
            }, function(val){
                mapFnIsCalled = true;
                assert.notStrictEqual(val, EXPECTED);
                return EXPECTED;
            });
        });

        it('the returned value shoule be `Some<T>`: 1', function() {
            assert.strictEqual(result, EXPECTED);
        });

        it('`defaultFn` function should not be called', function() {
            assert.strictEqual(defaultFnIsCalled, false);
        });

        it('`mapFn` should be called', function() {
            assert.strictEqual(mapFnIsCalled, true);
        });
    });
});
