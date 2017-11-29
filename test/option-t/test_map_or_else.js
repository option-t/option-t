'use strict';

const assert = require('assert');
const Some = require('../../cjs/Option').Some;
const None = require('../../cjs/Option').None;

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
