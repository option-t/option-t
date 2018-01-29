'use strict';

const assert = require('assert');
const Some = require('../../cjs/Option').Some;
const None = require('../../cjs/Option').None;

describe('Option<T>.and()', function(){
    describe('self is `None`, param is `Some<T>`', function () {
        let option = null;

        before(function(){
            const none = new None();
            option = none.and(new Some(1));
        });

        it('the returned value shoule be `None`', function() {
            assert.strictEqual(option.isNone, true);
        });
    });

    describe('self is `None`, param is `None`', function () {
        let option = null;

        before(function(){
            const none = new None();
            option = none.and(new None());
        });

        it('the returned value shoule be `None`', function() {
            assert.strictEqual(option.isNone, true);
        });
    });

    describe('self is `Some<T>`, param is `Some<T>`', function () {
        const EXPECTED = '1';
        let option = null;

        before(function(){
            const some = new Some(1);
            option = some.and(new Some(EXPECTED));
        });

        it('the returned value shoule be `Some<T>`: 1', function() {
            assert.strictEqual(option.isSome, true);
        });

        it('the returned value shoule be `Some<T>`: 2', function() {
            assert.strictEqual(option.unwrap(), EXPECTED);
        });
    });

    describe('self is `Some<T>`, param is `None`', function () {
        let option = null;

        before(function(){
            const some = new Some(1);
            option = some.and(new None());
        });

        it('the returned value shoule be `None`', function() {
            assert.strictEqual(option.isNone, true);
        });
    });
});
