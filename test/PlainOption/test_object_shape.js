'use strict';

const assert = require('assert');
const { createSome, createNone} = require('../../cjs/PlainOption');

describe('The shape of PlainOption::Some', () => {
    const INNER_VAL = 10;
    let actual = null;
    before(() => {
        actual = createSome(INNER_VAL);
    });

    it('Some.ok', () => {
        assert.strictEqual(actual.ok, true);
    });

    it('Some.val', () => {
        assert.strictEqual(actual.val, INNER_VAL);
    });
});

describe('The shape of PlainOption::None', () => {
    let actual = null;
    before(() => {
        actual = createNone();
    });

    it('None.ok', () => {
        assert.strictEqual(actual.ok, false);
    });

    it('None.val', () => {
        assert.strictEqual(actual.val, undefined);
    });
});
