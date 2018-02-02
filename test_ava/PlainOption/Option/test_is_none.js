'use strict';

const test = require('ava');

const PlainOption = require('../../../cjs/PlainOption');

const testcase = [
    [{
        ok: true,
        value: 1
    }, false],
    [{
        ok: false,
    }, true],
];

testcase.forEach(([input, expected]) => {
    test(`\`${String(JSON.stringify(input))}\` should be \`${String(expected)}\``, (t) => {
        t.is(PlainOption.isNone(input), expected);
    });
});
