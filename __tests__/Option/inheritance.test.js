'use strict';

const assert = require('assert');
const { createSome, createNone, OptionBase } = require('../../__dist/cjs/Option');

describe('Inheritance for `Option<T>`', function(){
    describe('`Some<T>`', function () {
        it('should be instanceof `OptionBase`', function() {
            const option = createSome(1);
            assert.strictEqual(option instanceof OptionBase, true);
        });
    });

    describe('`None`', function () {
        it('should be instanceof `OptionBase`', function() {
            const option = createNone();
            assert.strictEqual(option instanceof OptionBase, true);
        });
    });
});
