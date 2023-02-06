import test from 'ava';

import * as PlainOption from 'option-t/esm/PlainOption/index';

const testcase = [
    [
        {
            ok: true,
            value: 1,
        },
        true,
    ],
    [
        {
            ok: false,
        },
        false,
    ],
];

for (const [input, expected] of testcase) {
    test(`\`${String(JSON.stringify(input))}\` should be \`${String(expected)}\``, (t) => {
        t.is(PlainOption.isSome(input), expected);
    });
}
