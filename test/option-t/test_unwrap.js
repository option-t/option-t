'use strict';

const assert = require('assert');
const Some = require('../../__dist/cjs/Option').Some;
const None = require('../../__dist/cjs/Option').None;

describe('Option<T>.unwrap()', function(){

    describe('unwrap `Some<T>`', function () {
        it('should get the inner', function() {
            const EXPECTED = 1;
            const option = new Some(EXPECTED);
            assert.strictEqual(option.unwrap(), EXPECTED);
        });
    });

    describe('unwrap `None`', function () {
        let error = null;

        before(function(){
            const none = new None();
            try {
                none.unwrap();
            }
            catch (e) {
                error = e;
            }
        });

        after(function(){
            error = null;
        });

        it('should throw the error', function() {
            assert.strictEqual(error instanceof TypeError, true);
        });

        it('should be the expected error message', function() {
            assert.strictEqual(error.message, 'called `unwrap()` on a `None` value');
        });
    });
});
