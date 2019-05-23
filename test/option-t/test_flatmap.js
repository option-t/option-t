'use strict';

const assert = require('assert');
const { createSome, createNone, } = require('../../__dist/cjs/Option');

describe('Option<T>.flatMap()', function(){
    describe('self is `None`', function () {
        let option = null;
        let isNotCalled = true;

        before(function(){
            const none = createNone();
            option = none.flatMap(function(){
                isNotCalled = false;
            });
        });

        it('the returned value shoule be `None`', function() {
            assert.strictEqual(option.isNone, true);
        });

        it('the passed function should not be called', function() {
            assert.strictEqual(isNotCalled, true);
        });
    });

    describe('self is `Some<T>`', function () {

        describe('callback returns `None`', function () {
            let option = null;

            before(function(){
                const some = createSome(1);

                option = some.flatMap(function(){
                    return createNone();
                });
            });

            it('the returned value shoule be `None`', function() {
                assert.strictEqual(option.isNone, true);
            });
        });

        describe('callback returns `Some<T>`', function () {
            const EXPECTED = '1';
            let option = null;

            before(function(){
                const some = createSome(1);

                option = some.flatMap(function(val){
                    assert.strictEqual(val !== EXPECTED, true);
                    return createSome(EXPECTED);
                });
            });

            it('the returned value shoule be `Some<T>`', function() {
                assert.strictEqual(option.isSome, true);
            });

            it('the returned containing value shoule be expected', function() {
                assert.strictEqual(option.unwrap(), EXPECTED);
            });
        });

        describe('`fn` don\'t returns `Option<T>`', function () {
            let error = null;

            before(function(){
                const some = createSome(1);

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
