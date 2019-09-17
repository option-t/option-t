'use strict';

const assert = require('assert');
const { createSome, createNone, } = require('../../__dist/cjs/Option');

describe('Option<T>.or()', function(){
    describe('self is `None`, param is `Some<T>`', function () {
        const EXPECTED = 1;
        let option = null;

        before(function(){
            const none = createNone();
            option = none.or(createSome(EXPECTED));
        });

        it('the returned value shoule be `Some<T>`: 1', function() {
            assert.strictEqual(option.isSome, true);
        });

        it('the returned value shoule be `Some<T>`: 2', function() {
            assert.strictEqual(option.unwrap(), EXPECTED);
        });
    });

    describe('self is `None`, param is `None`', function () {
        let option = null;

        before(function(){
            const none = createNone();
            option = none.or(createNone());
        });

        it('the returned value shoule be `None`', function() {
            assert.strictEqual(option.isNone, true);
        });
    });

    describe('self is `Some<T>`, param is `Some<T>`', function () {
        const EXPECTED = 1;
        let option = null;

        before(function(){
            const some = createSome(EXPECTED);
            option = some.or(createSome(3));
        });

        it('the returned value shoule be `Some<T>`: 1', function() {
            assert.strictEqual(option.isSome, true);
        });

        it('the returned value shoule be `Some<T>`: 2', function() {
            assert.strictEqual(option.unwrap(), EXPECTED);
        });
    });

    describe('self is `Some<T>`, param is `None`', function () {
        const EXPECTED = 1;
        let option = null;

        before(function(){
            const some = createSome(EXPECTED);
            option = some.or(createNone());
        });

        it('the returned value shoule be `Some<T>`: 1', function() {
            assert.strictEqual(option.isSome, true);
        });

        it('the returned value shoule be `Some<T>`: 2', function() {
            assert.strictEqual(option.unwrap(), EXPECTED);
        });
    });
});
