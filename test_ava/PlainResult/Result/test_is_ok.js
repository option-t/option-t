'use strict';

const test = require('ava');

const PlainResult = require('../../../cjs/PlainResult');

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

testcase.forEach(([input, expected]) => {
    test(`\`${String(JSON.stringify(input))}\` should be \`${String(expected)}\``, (t) => {
        t.is(PlainResult.isOk(input), expected);
    });
});
