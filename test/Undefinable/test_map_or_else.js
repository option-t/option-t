'use strict';

const assert = require('assert');

const { mapOrElseForUndefinable } = require('../../__dist/cjs/Undefinable/mapOrElse');
const { nonNullableValue } = require('../utils');

describe('Undefinable::mapOrElse', () => {
    describe('pass the value', () => {
        for (const value of nonNullableValue) {
            describe(String(value), () => {
                const DEFAULT_VAL = Symbol('def');
                const EXPECTED = value;
                let result;
                let called = 0;

                before(() => {
                    result = mapOrElseForUndefinable(EXPECTED, () => DEFAULT_VAL, (v) => {
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
        let result;
        let called = 0;
        before(() => {
            result = mapOrElseForUndefinable(null, () => DEFAULE_VAL, (_v) => {
                called += 1;
                return COMPUTED_VAL;
            });
        });

        it('should be the expected', () => {
            assert.strictEqual(result, COMPUTED_VAL);
        });

        it('should call selector fn', () => {
            assert.strictEqual(called, 1);
        });
    });

    describe('pass undefined', () => {
        const DEFAULE_VAL = Symbol('');
        const COMPUTED_VAL = Symbol('');
        let result;
        let called = 0;
        before(() => {
            result = mapOrElseForUndefinable(undefined, () => DEFAULE_VAL, (_v) => {
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

    describe('assert that do not return Undefinable<*> as the selector\'s result', () => {
        const testcases = [
            [1, 2, undefined],
        ];
        for (const [src, def, selectorResult] of testcases) {
            it(`v = ${String(src)}, def = ${String(def)}, selectorResult=${String(selectorResult)}`, () => {
                assert.throws(() => {
                    mapOrElseForUndefinable(src, () => def, (_v) => selectorResult);
                }, TypeError);
            });
        }
    });

    describe('assert that def is not Undefinable<*>', () => {
        const testcases = [
            [undefined, undefined, ''],
        ];
        for (const [src, def, selectorResult] of testcases) {
            it(`v = ${String(src)}, def = ${String(def)}, selectorResult=${String(selectorResult)}`, () => {
                assert.throws(() => {
                    mapOrElseForUndefinable(src, () => def, (_v) => selectorResult);
                }, TypeError);
            });
        }
    });
});
