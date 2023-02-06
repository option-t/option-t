import test from 'ava';

import * as PlainOption from 'option-t/__dist/esm/PlainOption/index.js';

const testcase = [
    [
        {
            ok: true,
            value: 1,
        },
        false,
    ],
    [
        {
            ok: false,
        },
        true,
    ],
];

for (const [input, expected] of testcase) {
    test(`\`${String(JSON.stringify(input))}\` should be \`${String(expected)}\``, (t) => {
        t.is(PlainOption.isNone(input), expected);
    });
}
