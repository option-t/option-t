'use strict';

const assert = require('assert');

const { tapNullable } = require('../../cjs/Nullable/tap');
const { nonNullableValue } = require('../utils');

describe('Nullable::tap', () => {
    describe('pass the value', () => {
        for (const value of nonNullableValue) {
            describe(String(value), () => {
                let called = 0;

                before(() => {
                    tapNullable(value, (_v) => {
                        called += 1;
                    });
                });

                it('should call selector fn', () => {
                    assert.strictEqual(called, 1);
                });
            });
        }
    });

    describe('pass null', () => {
        let called = 0;
        before(() => {
            tapNullable(null, (_v) => {
                called += 1;
            });
        });

        it('should not call selector fn', () => {
            assert.strictEqual(called, 0);
        });
    });

    describe('pass undefined', () => {
        let called = 0;
        before(() => {
            tapNullable(undefined, (_v) => {
                called += 1;
            });
        });

        it('should call selector fn', () => {
            assert.strictEqual(called, 1);
        });
    });
});
