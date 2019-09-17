'use strict';

const assert = require('assert');

const { tapMaybe } = require('../../__dist/cjs/Maybe/tap');
const { nonNullableValue } = require('../utils');

describe('Maybe::tap', () => {
    describe('pass the value', () => {
        for (const input of nonNullableValue) {
            describe(String(input), () => {
                let called = 0;
                let result;

                before(() => {
                    result = tapMaybe(input, (_v) => {
                        called += 1;
                    });
                });

                it('should call selector fn', () => {
                    assert.strictEqual(called, 1);
                });

                it('should be input', () => {
                    assert.strictEqual(result, input);
                });
            });
        }
    });

    describe('pass null', () => {
        let result;
        let called = 0;

        before(() => {
            result = tapMaybe(null, (_v) => {
                called += 1;
            });
        });

        it('should not call selector fn', () => {
            assert.strictEqual(called, 0);
        });

        it('should be input', () => {
            assert.strictEqual(result, null);
        });
    });

    describe('pass undefined', () => {
        let result;
        let called = 0;
        before(() => {
            result = tapMaybe(undefined, (_v) => {
                called += 1;
            });
        });

        it('should not call selector fn', () => {
            assert.strictEqual(called, 0);
        });

        it('should be input', () => {
            assert.strictEqual(result, undefined);
        });
    });
});
