'use strict';

const assert = require('assert');
const { createSome, createNone, } = require('../../__dist/cjs/Option');

describe('Option<T>.mapOr()', function(){
    describe('self is `None`', function () {
        const EXPECTED = 1;
        let result = 0;
        let isNotCalled = true;

        before(function(){
            assert.strictEqual(result !== EXPECTED, true);

            const none = createNone();
            result = none.mapOr(EXPECTED, function(){
                isNotCalled = false;
            });
        });

        it('the returned value shoule be expected', function() {
            assert.strictEqual(result, EXPECTED);
        });

        it('the passed function should not be called', function() {
            assert.strictEqual(isNotCalled, true);
        });
    });

    describe('self is `Some<T>`', function () {
        const EXPECTED = 1;
        const DEFAULT = 2;
        let result = 0;

        before(function(){
            assert.strictEqual(result !== EXPECTED, true);
            assert.strictEqual(result !== DEFAULT, true);

            const some = createSome('bar');
            result = some.mapOr(DEFAULT, function(val){
                assert.notStrictEqual(val, EXPECTED);
                return EXPECTED;
            });
        });

        it('the returned value shoule be `Some<T>`: 1', function() {
            assert.strictEqual(result, EXPECTED);
        });
    });
});
