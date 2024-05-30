import test from 'ava';

import { mapOrElseForOption } from 'option-t/plain_option/map_or_else';
import { createSome, createNone } from 'option-t/plain_option/option';

test('Some(T)', function (t) {
    t.plan(3);

    const INPUT = Symbol('input');
    const EXPECTED = Symbol('exptected');
    const DEFAULT = Symbol('default');

    const input = createSome(INPUT);
    const result = mapOrElseForOption(
        input,
        function defaultFn() {
            t.fail('`defaultFn` function should not be called');
            return DEFAULT;
        },
        function (val) {
            t.pass('`mapFn` should be called');
            t.not(val, EXPECTED);
            return EXPECTED;
        },
    );
    t.is(result, EXPECTED);
});

test('None', function (t) {
    t.plan(2);

    const EXPECTED = Symbol('expected');

    const input = createNone();
    const result = mapOrElseForOption(
        input,
        function defaultFn() {
            t.pass('`defaultFn` function should be called');
            return EXPECTED;
        },
        function mapFn() {
            t.fail('`mapFn` should not be called');
        },
    );

    t.is(result, EXPECTED);
});
