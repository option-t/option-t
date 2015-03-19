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
var OptionType = require('../../src/index').OptionType;

describe('OptionType.unwrap()', function(){

    describe('unwrap `Some<T>`', function () {
        it('should get the inner', function() {
            var EXPECTED = 1;
            var option = new OptionType(EXPECTED);
            assert.strictEqual(option.unwrap(), EXPECTED);
        });
    });

    describe('unwrap `None`', function () {
        var none = null;
        var error = null;

        before(function(){
            none = new OptionType();
            assert.ok(!none.isSome);

            try {
                none.unwrap();
            }
            catch (e) {
                error = e;
            }
        });

        after(function(){
            none = null;
            error = null;
        });

        it('should throw the error', function() {
            assert.ok(error instanceof Error);
        });

        it('should be the expected error message', function() {
            assert.strictEqual(error.message, 'called `unwrap()` on a `None` value');
        });
    });
});
