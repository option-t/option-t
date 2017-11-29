'use strict';

const assert = require('assert');
const OptionBase = require('../../cjs/Option').OptionBase;
const Some = require('../../cjs/Option').Some;
const None = require('../../cjs/Option').None;

describe('Inheritance for `Option<T>`', function(){
    describe('`Some<T>`', function () {
        it('should be instanceof `OptionBase`', function() {
            const option = new Some(1);
            assert.strictEqual(option instanceof OptionBase, true);
        });
    });

    describe('`None`', function () {
        it('should be instanceof `OptionBase`', function() {
            const option = new None();
            assert.strictEqual(option instanceof OptionBase, true);
        });
    });
});
