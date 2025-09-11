import test from 'ava';
import * as UndefinableRoot from 'option-t/undefinable';
import * as UndefinableRootCompatV54 from 'option-t/undefinable/compat/v54';
import { Undefinable as UndefinableNamespace } from 'option-t/undefinable/namespace';
import { isUndefined } from 'option-t/undefinable/undefinable';

test('Undefinable::isUndefined', (t) => {
    const testcase = [
        [-1, false],
        [0, false],
        [1, false],
        [true, false],
        [false, false],
        ['', false],
        [{}, false],
        [[], false],
        [function () {}, false],
        [Symbol(''), false],
        [undefined, true],
        [null, false],
    ];

    testcase.forEach((test) => {
        const input = test[0];
        const expected = test[1];

        t.is(
            isUndefined(input),
            expected,
            `\`${String(input)}\` should be \`${String(expected)}\``,
        );
    });
});

test(`exported alias' identity check`, (t) => {
    t.is(UndefinableRoot.isUndefined, isUndefined);
    t.is(UndefinableNamespace.isUndefined, isUndefined);
    t.is(UndefinableRootCompatV54.isUndefined, isUndefined);
});
