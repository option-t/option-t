'use strict';

const assert = require('assert');

const { tapUndefinable } = require('../../__dist/cjs/Undefinable/tap');
const { nonNullableValue } = require('../utils');

describe('Undefinable::tap', () => {
    describe('pass the value', () => {
        for (const input of nonNullableValue) {
            describe(String(input), () => {
                let result;
                let called = 0;

                before(() => {
                    result = tapUndefinable(input, (_v) => {
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
            result = tapUndefinable(null, (_v) => {
                called += 1;
            });
        });

        it('should not call selector fn', () => {
            assert.strictEqual(called, 1);
        });

        it('should be input', () => {
            assert.strictEqual(result, null);
        });
    });

    describe('pass undefined', () => {
        let result;
        let called = 0;
        before(() => {
            result = tapUndefinable(undefined, (_v) => {
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
