'use strict';

const assert = require('assert');

const { mapOrElseForMaybe } = require('../../cjs/Maybe/mapOrElse');
const { nonNullableValue } = require('../utils');

describe('Maybe::mapOrElse', () => {
    describe('pass the value', () => {
        for (const value of nonNullableValue) {
            describe(String(value), () => {
                const DEFAULT_VAL = Symbol('def');
                const EXPECTED = value;
                // eslint-disable-next-line
                let result;
                let called = 0;

                before(() => {
                    result = mapOrElseForMaybe(EXPECTED, () => DEFAULT_VAL, (v) => {
                        called += 1;
                        return v;
                    });
                });

                it('should the expected result', () => {
                    assert.strictEqual(result, EXPECTED);
                });

                it('should call selector fn', () => {
                    assert.strictEqual(called, 1);
                });
            });
        }
    });

    describe('pass null', () => {
        const DEFAULE_VAL = Symbol('');
        const COMPUTED_VAL = Symbol('');
        // eslint-disable-next-line
        let result;
        let called = 0;
        before(() => {
            result = mapOrElseForMaybe(null, () => DEFAULE_VAL, (_v) => {
                called += 1;
                return COMPUTED_VAL;
            });
        });

        it('should be the expected', () => {
            assert.strictEqual(result, DEFAULE_VAL);
        });

        it('should not call selector fn', () => {
            assert.strictEqual(called, 0);
        });
    });

    describe('pass undefined', () => {
        const DEFAULE_VAL = Symbol('');
        const COMPUTED_VAL = Symbol('');
        // eslint-disable-next-line
        let result;
        let called = 0;
        before(() => {
            result = mapOrElseForMaybe(undefined, () => DEFAULE_VAL, (_v) => {
                called += 1;
                return COMPUTED_VAL;
            });
        });

        it('should be the expected', () => {
            assert.strictEqual(result, DEFAULE_VAL);
        });

        it('should not call selector fn', () => {
            assert.strictEqual(called, 0);
        });
    });

    describe('assert that do not return Maybe<*> as the selector\'s result', () => {
        const testcases = [
            [1, 2, undefined],
            [1, 2, null],
        ];
        for (const [src, def, selectorResult] of testcases) {
            it(`v = ${String(src)}, def = ${String(def)}, selectorResult=${String(selectorResult)}`, () => {
                assert.throws(() => {
                    mapOrElseForMaybe(src, () => def, (_v) => selectorResult);
                }, TypeError);
            });
        }
    });

    describe('assert that def is not Maybe<*>', () => {
        const testcases = [
            [null, undefined, ''],
            [null, null, ''],
            [undefined, undefined, ''],
            [undefined, null, ''],
        ];
        for (const [src, def, selectorResult] of testcases) {
            it(`v = ${String(src)}, def = ${String(def)}, selectorResult=${String(selectorResult)}`, () => {
                assert.throws(() => {
                    mapOrElseForMaybe(src, () => def, (_v) => selectorResult);
                }, TypeError);
            });
        }
    });
});
