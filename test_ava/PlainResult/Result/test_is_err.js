'use strict';

const test = require('ava');

const PlainResult = require('../../../cjs/PlainResult');


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

testcase.forEach(([input, expected]) => {
    test(`\`${String(JSON.stringify(input))}\` should be \`${String(expected)}\``, (t) => {
        t.is(PlainResult.isErr(input), expected);
    });
});
