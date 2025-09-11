import test from 'ava';
import * as UndefinableRoot from 'option-t/undefinable';
import * as UndefinableRootCompatV54 from 'option-t/undefinable/compat/v54';
import { Undefinable as UndefinableNamespace } from 'option-t/undefinable/namespace';
import { isNotUndefined } from 'option-t/undefinable/undefinable';

test('Undefinable::isNotUndefined', (t) => {
    const testcase = [
        [-1, true],
        [0, true],
        [1, true],
        [true, true],
        [false, true],
        ['', true],
        [{}, true],
        [[], true],
        [function () {}, true],
        [Symbol(''), true],
        [undefined, false],
        [null, true],
    ];

    testcase.forEach((test) => {
        const input = test[0];
        const expected = test[1];

        t.is(
            isNotUndefined(input),
            expected,
            `\`${String(input)}\` should be \`${String(expected)}\``,
        );
    });
});

test(`exported alias' identity check`, (t) => {
    t.is(UndefinableRoot.isNotUndefined, isNotUndefined);
    t.is(UndefinableNamespace.isNotUndefined, isNotUndefined);
    t.is(UndefinableRootCompatV54.isNotUndefined, isNotUndefined);
});
