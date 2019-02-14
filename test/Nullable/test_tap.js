'use strict';

const assert = require('assert');

const { tapNullable } = require('../../__dist/cjs/Nullable/tap');
const { nonNullableValue } = require('../utils');

describe('Nullable::tap', () => {
    describe('pass the value', () => {
        for (const input of nonNullableValue) {
            describe(String(input), () => {
                // eslint-disable-next-line
                let result;
                let called = 0;

                before(() => {
                    result = tapNullable(input, (_v) => {
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
        // eslint-disable-next-line
        let result;
        let called = 0;
        before(() => {
            result = tapNullable(null, (_v) => {
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
        // eslint-disable-next-line
        let result;
        let called = 0;
        before(() => {
            result = tapNullable(undefined, (_v) => {
                called += 1;
            });
        });

        it('should call selector fn', () => {
            assert.strictEqual(called, 1);
        });

        it('should be input', () => {
            assert.strictEqual(result, undefined);
        });
    });
});
