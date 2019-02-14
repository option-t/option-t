'use strict';

const assert = require('assert');
const Some = require('../../__dist/cjs/Option').Some;
const None = require('../../__dist/cjs/Option').None;

describe('Option<T>.drop()', function(){

    describe('drop `Some<T>`', function () {
        let option = null;

        before(function(){
            option = new Some(1);
            option.drop();
        });

        after(function(){
            option = null;
        });

        it('the inner should be freed', function() {
            assert.strictEqual(option.toJSON().value, null);
        });
    });

    describe('drop `None`', function () {
        let option = null;

        before(function(){
            option = new None();
            option.drop();
        });

        after(function(){
            option = null;
        });

        it('the inner should be freed', function() {
            assert.strictEqual(option.toJSON().value, null);
        });
    });
});

describe('Option<T>.drop() with destructor', function(){
    describe('Some<T>', function () {
        const EXPECTED = 1;
        let option = null;
        let arg = null;
        let isCalled = false;
        function destructor(v) {
            arg = v;
            isCalled = true;
        }

        before(function(){
            option = new Some(EXPECTED);
            option.drop(destructor);
        });

        after(function(){
            option = null;
        });

        it('should be called with the destructor', function () {
            assert.strictEqual(isCalled, true);
        });

        it('should be called with the argument', function () {
            assert.strictEqual(arg, EXPECTED);
        });

        it('the inner should be freed', function() {
            assert.strictEqual(option.toJSON().value, null);
        });
    });

    describe('None', function () {
        let option = null;
        let isCalled = false;
        function destructor() {
            isCalled = true;
        }

        before(function(){
            option = new None();
            option.drop(destructor);
        });

        after(function(){
            option = null;
        });

        it('should not be called with the destructor', function () {
            assert.strictEqual(isCalled, false);
        });

        it('the inner should be freed', function() {
            assert.strictEqual(option.toJSON().value, null);
        });
    });
});
