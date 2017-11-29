'use strict';

const assert = require('assert');
const Some = require('../../cjs/Option').Some;
const None = require('../../cjs/Option').None;

describe('Option<T>.flatMap()', function(){
    describe('self is `None`', function () {
        let option = null;
        let isNotCalled = true;

        before(function(){
            const none = new None();
            option = none.flatMap(function(){
                isNotCalled = false;
            });
        });

        it('the returned value shoule be `None`', function() {
            assert.strictEqual(option instanceof None, true);
        });

        it('the passed function should not be called', function() {
            assert.strictEqual(isNotCalled, true);
        });
    });

    describe('self is `Some<T>`', function () {

        describe('callback returns `None`', function () {
            let option = null;

            before(function(){
                const some = new Some(1);

                option = some.flatMap(function(){
                    return new None();
                });
            });

            it('the returned value shoule be `None`', function() {
                assert.strictEqual(option instanceof None, true);
            });
        });

        describe('callback returns `Some<T>`', function () {
            const EXPECTED = '1';
            let option = null;

            before(function(){
                const some = new Some(1);

                option = some.flatMap(function(val){
                    assert.strictEqual(val !== EXPECTED, true);
                    return new Some(EXPECTED);
                });
            });

            it('the returned value shoule be `Some<T>`', function() {
                assert.strictEqual(option instanceof Some, true);
            });

            it('the returned containing value shoule be expected', function() {
                assert.strictEqual(option.unwrap(), EXPECTED);
            });
        });

        describe('`fn` don\'t returns `Option<T>`', function () {
            let error = null;

            before(function(){
                const some = new Some(1);

                try {
                    some.flatMap(function(val){
                        const rv = 'hoge';
                        assert.notStrictEqual(val !== rv);
                        return rv;
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
                assert.strictEqual(error.message, 'Option<T>.flatMap()\' param `fn` should return `Option<T>`.');
            });
        });
    });
});
