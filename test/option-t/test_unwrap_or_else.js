'use strict';

const assert = require('assert');
const Some = require('../../__dist/cjs/Option').Some;
const None = require('../../__dist/cjs/Option').None;

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
