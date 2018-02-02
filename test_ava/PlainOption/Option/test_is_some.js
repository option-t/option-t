'use strict';

const test = require('ava');

const PlainOption = require('../../../cjs/PlainOption');

const testcase = [
    [{
        ok: true,
        value: 1
    }, true],
    [{
        ok: false,
    }, false],
];

testcase.forEach(([input, expected]) => {
    test(`\`${String(JSON.stringify(input))}\` should be \`${String(expected)}\``, (t) => {
        t.is(PlainOption.isSome(input), expected);
    });
});
