import test from 'ava';

import * as PlainResult from 'option-t/plain_result';

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
            err: '',
        },
        true,
    ],
];

for (const [input, expected] of testcase) {
    test(`\`${String(JSON.stringify(input))}\` should be \`${String(expected)}\``, (t) => {
        t.is(PlainResult.isErr(input), expected);
    });
}
