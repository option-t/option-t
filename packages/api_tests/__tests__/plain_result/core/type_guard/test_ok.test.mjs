import test from 'ava';

import * as PlainResult from 'option-t/plain_result';

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
            err: '',
        },
        false,
    ],
];

for (const [input, expected] of testcase) {
    test(`\`${String(JSON.stringify(input))}\` should be \`${String(expected)}\``, (t) => {
        t.is(PlainResult.isOk(input), expected);
    });
}
