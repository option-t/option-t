'use strict';

const assert = require('assert');
const { createSome, createNone, isSome, isNone } = require('../../cjs/PlainOption');

describe('PlainOption::createSome', () => {
    const EXPECTED = 1;
    let actual = null;
    before(() => {
        actual = createSome(EXPECTED);
    });

    it(`actual should be Ok`, () => {
        assert.strictEqual(isSome(actual), true);
    });

    it(`actual should be expected`, () => {
        assert.strictEqual(actual.val, EXPECTED);
    });
});

describe('PlainOption::createNone', () => {
    let actual = null;
    before(() => {
        actual = createNone();
    });

    it(`actual should be Err`, () => {
        assert.strictEqual(isNone(actual), true);
    });
});
