import test from 'ava';

import { mapOrForMaybe } from '../../__dist/esm/Maybe/mapOr.mjs';
import { nonNullableValueCaseListForSync } from '../utils.mjs';

for (const [INPUT, PASSED_VALUE, EXPECTED] of nonNullableValueCaseListForSync) {
    test('value:' + String(INPUT), (t) => {
        t.plan(3);

        const result = mapOrForMaybe(INPUT, Symbol('def'), (v) => {
            t.pass('should call selector fn');
            t.is(v, PASSED_VALUE, 'the input is the arg');
            return v;
        });
        t.is(result, EXPECTED);
    });
}

for (const NULL_VALUE of [undefined, null]) {
    test(`pass ${NULL_VALUE}`, (t) => {
        t.plan(1);
        const DEFAULE_VAL = Math.random();

        const result = mapOrForMaybe(NULL_VALUE, DEFAULE_VAL, (_v) => {
            t.fail('should not call selector fn');
        });
        t.is(result, DEFAULE_VAL);
    });
}

{
    const testcases = [
        [1, 2, undefined],
        [1, 2, null],
    ];
    for (const [src, def, selectorResult] of testcases) {
        test(`assert that do not return Maybe<*> as the selector's result v = ${String(
            src
        )}, def = ${String(def)}, selectorResult=${String(selectorResult)}`, (t) => {
            t.plan(1);
            t.throws(
                () => {
                    mapOrForMaybe(src, def, (_v) => selectorResult);
                },
                {
                    instanceOf: TypeError,
                    message: '`transformer` must not return `null` or `undefined`',
                }
            );
        });
    }
}

{
    const testcases = [
        [null, undefined, ''],
        [null, null, ''],
        [undefined, undefined, ''],
        [undefined, null, ''],
    ];
    for (const [src, def, selectorResult] of testcases) {
        test(`assert that def is not Maybe<*> v = ${String(src)}, def = ${String(
            def
        )}, selectorResult=${String(selectorResult)}`, (t) => {
            t.plan(1);
            t.throws(
                () => {
                    mapOrForMaybe(src, def, (_v) => selectorResult);
                },
                {
                    instanceOf: TypeError,
                    message: '`defaultValue` must not be `null` or `undefined`',
                }
            );
        });
    }
}
