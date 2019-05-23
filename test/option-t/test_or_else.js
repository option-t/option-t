'use strict';

const assert = require('assert');
const { createSome, createNone, } = require('../../__dist/cjs/Option');

describe('Option<T>.orElse()', function(){
    describe('self is `None`, param returns `Some<T>`', function () {
        const EXPECTED = 1;
        let option = null;

        before(function(){
            const none = createNone();
            option = none.orElse(function(){
                return createSome(EXPECTED);
            });
        });

        it('the returned value shoule be `Some<T>`: 1', function() {
            assert.strictEqual(option.isSome, true);
        });

        it('the returned value shoule be `Some<T>`: 2', function() {
            assert.strictEqual(option.unwrap(), EXPECTED);
        });
    });

    describe('self is `None`, param returns `None`', function () {
        let option = null;

        before(function(){
            const none = createNone();
            option = none.orElse(function(){
                return createNone();
            });
        });

        it('the returned value shoule be `None`', function() {
            assert.strictEqual(option.isNone, true);
        });
    });

    describe('self is `None`, param don\'t return `Option<T>`', function () {
        let error = null;

        before(function(){
            const none = createNone();
            try {
                none.orElse(function(){
                    return 'barfoo';
                });
            }
            catch (e) {
                error = e;
            }
        });

        after(function(){
            error = null;
        });

        it('should throw an error', function() {
            assert.strictEqual(error instanceof TypeError, true);
        });

        it('the error message should be the expected', function() {
            assert.strictEqual(error.message, 'Option<T>.orElse()\' param `fn` should return `Option<T>`.');
        });
    });

    describe('self is `Some<T>`, param returns `Some<T>`', function () {
        const EXPECTED = 1;
        let option = null;
        let isNotCalled = true;

        before(function(){
            const some = createSome(EXPECTED);
            option = some.orElse(function(){
                isNotCalled = false;
                return createSome(3);
            });
        });

        it('the returned value shoule be `Some<T>`: 1', function() {
            assert.strictEqual(option.isSome, true);
        });

        it('the returned value shoule be `Some<T>`: 2', function() {
            assert.strictEqual(option.unwrap(), EXPECTED);
        });

        it('shoule not call callback', function() {
            assert.strictEqual(isNotCalled, true);
        });
    });

    describe('self is `Some<T>`, param returns `None`', function () {
        const EXPECTED = 1;
        let option = null;
        let isNotCalled = true;

        before(function(){
            const some = createSome(EXPECTED);
            option = some.orElse(function(){
                isNotCalled = false;
                return createNone();
            });
        });

        it('the returned value shoule be `Some<T>`: 1', function() {
            assert.strictEqual(option.isSome, true);
        });

        it('the returned value shoule be `Some<T>`: 2', function() {
            assert.strictEqual(option.unwrap(), EXPECTED);
        });

        it('shoule not call callback', function() {
            assert.strictEqual(isNotCalled, true);
        });
    });
});
