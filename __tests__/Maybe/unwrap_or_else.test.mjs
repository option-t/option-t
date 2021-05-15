import test from 'ava';

import { unwrapOrElseFromMaybe } from '../../__dist/esm/Maybe/unwrapOrElse.mjs';
import { nonNullableValueCaseListForSync } from '../utils.mjs';

for (const [INPUT, , EXPECTED] of nonNullableValueCaseListForSync) {
    test('pass the value: ' + String(INPUT), (t) => {
        t.plan(2);

        let actual;
        t.notThrows(() => {
            actual = unwrapOrElseFromMaybe(INPUT, () => {
                t.fail('should not call recover fn');
                return Math.random();
            });
        });

        t.is(actual, EXPECTED);
    });
}

for (const NULL_VALUE of [undefined, null]) {
    test(`pass ${NULL_VALUE}`, (t) => {
        t.plan(2);

        const DEFAULT_VAL = Math.random();
        const result = unwrapOrElseFromMaybe(NULL_VALUE, () => {
            t.pass('should call recover fn');
            return DEFAULT_VAL;
        });

        t.is(result, DEFAULT_VAL);
    });
}

{
    const testcases = [
        [undefined, undefined],
        [undefined, null],
        [null, undefined],
        [null, null],
    ];
    for (const [src, def] of testcases) {
        test(`should not accept Maybe<*> as default, v = ${String(src)}, def = ${String(
            def
        )}`, (t) => {
            t.plan(2);
            t.throws(
                () => {
                    unwrapOrElseFromMaybe(src, () => {
                        t.pass('should be called');
                        return def;
                    });
                },
                {
                    instanceOf: TypeError,
                    message: '`recoverer` must not return `null` or `undefined`',
                }
            );
        });
    }
}
