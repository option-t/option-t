import test from 'ava';

import { mapOrElseForMaybe } from '../../__dist/esm/Maybe/mapOrElse.mjs';
import { nonNullableValue } from '../utils.mjs';

for (const value of nonNullableValue) {
    test('value:' + String(value), (t) => {
        t.plan(3);

        const DEFAULT_VAL = Symbol('def');
        const EXPECTED = value;

        const result = mapOrElseForMaybe(
            EXPECTED,
            () => DEFAULT_VAL,
            (v) => {
                t.pass('should call selector fn');
                t.is(v, EXPECTED, 'the arg is the input');
                return v;
            }
        );

        t.is(result, EXPECTED);
    });
}

for (const NULL_VALUE of [undefined, null]) {
    test(`pass ${NULL_VALUE}`, (t) => {
        t.plan(2);

        const DEFAULE_VAL = Symbol('default');
        const COMPUTED_VAL = Symbol('computed');

        const result = mapOrElseForMaybe(
            NULL_VALUE,
            () => {
                t.pass('should be called');
                return DEFAULE_VAL;
            },
            (_v) => {
                t.fail('should not call selector fn');
                return COMPUTED_VAL;
            }
        );
        t.is(result, DEFAULE_VAL);
    });
}

{
    const testcases = [
        [1, 2, undefined],
        [1, 2, null],
    ];
    for (const [src, def, selectorResult] of testcases) {
        test(`assert that do not return Maybe<*> as the selector's result. v = ${String(
            src
        )}, def = ${String(def)}, selectorResult=${String(selectorResult)}`, (t) => {
            t.plan(1);
            t.throws(
                () => {
                    mapOrElseForMaybe(
                        src,
                        () => def,
                        (_v) => selectorResult
                    );
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
        test(`v = ${String(src)}, def = ${String(def)}, selectorResult=${String(
            selectorResult
        )}`, (t) => {
            t.plan(1);
            t.throws(
                () => {
                    mapOrElseForMaybe(
                        src,
                        () => def,
                        (_v) => selectorResult
                    );
                },
                {
                    instanceOf: TypeError,
                    message: '`recoverer` must not return `null` or `undefined`',
                }
            );
        });
    }
}
