'use strict';

const assert = require('assert');

const { tapUndefinable } = require('../../cjs/Undefinable/tap');
const { nonNullableValue } = require('../utils');

describe('Undefinable::tap', () => {
    describe('pass the value', () => {
        for (const value of nonNullableValue) {
            describe(String(value), () => {
                let called = 0;

                before(() => {
                    tapUndefinable(value, (_v) => {
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
            tapUndefinable(null, (_v) => {
                called += 1;
            });
        });

        it('should not call selector fn', () => {
            assert.strictEqual(called, 1);
        });
    });

    describe('pass undefined', () => {
        let called = 0;
        before(() => {
            tapUndefinable(undefined, (_v) => {
                called += 1;
            });
        });

        it('should not call selector fn', () => {
            assert.strictEqual(called, 0);
        });
    });
});
