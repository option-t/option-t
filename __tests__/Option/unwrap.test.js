'use strict';

const assert = require('assert');
const { createSome, createNone, } = require('../../__dist/cjs/Option');

describe('Option<T>.unwrap()', function(){

    describe('unwrap `Some<T>`', function () {
        it('should get the inner', function() {
            const EXPECTED = 1;
            const option = createSome(EXPECTED);
            assert.strictEqual(option.unwrap(), EXPECTED);
        });
    });

    describe('unwrap `None`', function () {
        let error = null;

        before(function(){
            const none = createNone();
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
