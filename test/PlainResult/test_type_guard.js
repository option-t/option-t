'use strict';

const assert = require('assert');
const PlainResult = require('../../cjs/PlainResult');

describe('PlainResult::isOk', () => {
    const testcase = [
        [{
            ok: true,
            value: 1
        }, true],
        [{
            ok: false,
            err: '',
        }, false],
    ];

    testcase.forEach((test) => {
        const input = test[0];
        const expected = test[1];

        it(`\`${String(JSON.stringify(input))}\` should be \`${String(expected)}\``, () => {
            assert.strictEqual(PlainResult.isOk(input), expected);
        });
    });
});

describe('PlainResult::isErr', () => {
    const testcase = [
        [{
            ok: true,
            value: 1
        }, false],
        [{
            ok: false,
            err: '',
        }, true],
    ];

    testcase.forEach((test) => {
        const input = test[0];
        const expected = test[1];

        it(`\`${String(JSON.stringify(input))}\` should be \`${String(expected)}\``, () => {
            assert.strictEqual(PlainResult.isErr(input), expected);
        });
    });
});
