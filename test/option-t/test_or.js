'use strict';

const assert = require('assert');
const Some = require('../../cjs/Option').Some;
const None = require('../../cjs/Option').None;

describe('Option<T>.or()', function(){
    describe('self is `None`, param is `Some<T>`', function () {
        const EXPECTED = 1;
        let option = null;

        before(function(){
            const none = new None();
            option = none.or(new Some(EXPECTED));
        });

        it('the returned value shoule be `Some<T>`: 1', function() {
            assert.strictEqual(option instanceof Some, true);
        });

        it('the returned value shoule be `Some<T>`: 2', function() {
            assert.strictEqual(option.unwrap(), EXPECTED);
        });
    });

    describe('self is `None`, param is `None`', function () {
        let option = null;

        before(function(){
            const none = new None();
            option = none.or(new None());
        });

        it('the returned value shoule be `None`', function() {
            assert.strictEqual(option instanceof None, true);
        });
    });

    describe('self is `Some<T>`, param is `Some<T>`', function () {
        const EXPECTED = 1;
        let option = null;

        before(function(){
            const some = new Some(EXPECTED);
            option = some.or(new Some(3));
        });

        it('the returned value shoule be `Some<T>`: 1', function() {
            assert.strictEqual(option instanceof Some, true);
        });

        it('the returned value shoule be `Some<T>`: 2', function() {
            assert.strictEqual(option.unwrap(), EXPECTED);
        });
    });

    describe('self is `Some<T>`, param is `None`', function () {
        const EXPECTED = 1;
        let option = null;

        before(function(){
            const some = new Some(EXPECTED);
            option = some.or(new None());
        });

        it('the returned value shoule be `Some<T>`: 1', function() {
            assert.strictEqual(option instanceof Some, true);
        });

        it('the returned value shoule be `Some<T>`: 2', function() {
            assert.strictEqual(option.unwrap(), EXPECTED);
        });
    });
});
