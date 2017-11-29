'use strict';

const assert = require('assert');
const Some = require('../../cjs/Option').Some;
const None = require('../../cjs/Option').None;

describe('Option<T>.unwrapOr()', function(){
    describe('self is `None`', function () {
        const EXPECTED = 1;

        it('shoule be the default value', function() {
            const option = new None();
            const result = option.unwrapOr(EXPECTED);
            assert.strictEqual(result, EXPECTED);
        });
    });

    describe('self is `Some<T>`', function () {
        const EXPECTED = 1;
        const DEFAULT = 10;

        before(function(){
            assert.strictEqual(EXPECTED !== DEFAULT, true);
        });

        it('shoule be the wrapped value', function() {
            const option = new Some(EXPECTED);
            const result = option.unwrapOr(DEFAULT);
            assert.strictEqual(result, EXPECTED);
        });
    });
});
