'use strict';

const assert = require('assert');
const { createSome, createNone, } = require('../../__dist/cjs/Option');

describe('Option<T>.unwrapOr()', function(){
    describe('self is `None`', function () {
        const EXPECTED = 1;

        it('shoule be the default value', function() {
            const option = createNone();
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
            const option = createSome(EXPECTED);
            const result = option.unwrapOr(DEFAULT);
            assert.strictEqual(result, EXPECTED);
        });
    });
});
