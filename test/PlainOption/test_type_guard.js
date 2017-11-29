'use strict';

const assert = require('assert');
const PlainOption = require('../../cjs/PlainOption');

describe('PlainOption::isSome', () => {
    const testcase = [
        [{
            ok: true,
            value: 1
        }, true],
        [{
            ok: false,
        }, false],
    ];

    testcase.forEach((test) => {
        const input = test[0];
        const expected = test[1];

        it(`\`${String(JSON.stringify(input))}\` should be \`${String(expected)}\``, () => {
            assert.strictEqual(PlainOption.isSome(input), expected);
        });
    });
});

describe('PlainOption::isNone', () => {
    const testcase = [
        [{
            ok: true,
            value: 1
        }, false],
        [{
            ok: false,
        }, true],
    ];

    testcase.forEach((test) => {
        const input = test[0];
        const expected = test[1];

        it(`\`${String(JSON.stringify(input))}\` should be \`${String(expected)}\``, () => {
            assert.strictEqual(PlainOption.isNone(input), expected);
        });
    });
});
