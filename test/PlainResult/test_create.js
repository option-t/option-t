'use strict';

const assert = require('assert');
const PlainResult = require('../../cjs/PlainResult');

describe('PlainResult::createOk', () => {
    const EXPECTED = 1;
    let actual = null;
    before(() => {
        actual = PlainResult.createOk(EXPECTED);
    });

    it(`actual should be Ok`, () => {
        assert.strictEqual(PlainResult.isOk(actual), true);
    });

    it(`actual should be expected`, () => {
        assert.strictEqual(actual.val, EXPECTED);
    });
});

describe('PlainResult::createErr', () => {
    const EXPECTED = 'error';
    let actual = null;
    before(() => {
        actual = PlainResult.createErr(EXPECTED);
    });

    it(`actual should be Err`, () => {
        assert.strictEqual(PlainResult.isErr(actual), true);
    });

    it(`actual should be expected`, () => {
        assert.strictEqual(actual.err, EXPECTED);
    });
});
