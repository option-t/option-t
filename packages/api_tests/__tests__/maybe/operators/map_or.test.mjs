import test from 'ava';

import * as MaybeRoot from 'option-t/maybe';
import * as MaybeRootCompatV54 from 'option-t/maybe/compat/v54';
import { mapOrForMaybe } from 'option-t/maybe/map_or';
import { Maybe as MaybeNamespace } from 'option-t/maybe/namespace';
import { nonNullableValueCaseListForSync } from '../../utils.mjs';

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

    test(`assert that do not return Maybe<*> as the selector's result (${NULL_VALUE})`, (t) => {
        t.plan(3);

        const INPUT = Symbol('input');
        const DEFAULT_VALUE = Math.random();
        t.throws(
            () => {
                mapOrForMaybe(INPUT, DEFAULT_VALUE, (v) => {
                    t.pass('call this');
                    t.is(v, INPUT);
                    return NULL_VALUE;
                });
            },
            {
                instanceOf: TypeError,
                message: '`transformer` must not return `null` or `undefined`',
            },
        );
    });

    for (const DEFAULT_VALUE of [null, undefined]) {
        test(`assert that def is not Maybe<*>, input: ${NULL_VALUE}, def = ${DEFAULT_VALUE}`, (t) => {
            t.plan(1);

            t.throws(
                () => {
                    mapOrForMaybe(NULL_VALUE, DEFAULT_VALUE, (_v) => {
                        t.fail('do not call');
                        return Math.random();
                    });
                },
                {
                    instanceOf: TypeError,
                    message: '`defaultValue` must not be `null` or `undefined`',
                },
            );
        });
    }
}

test(`exported alias' identity check`, (t) => {
    t.is(MaybeRoot.MaybeOperator.mapOr, mapOrForMaybe);
    t.is(MaybeNamespace.mapOr, mapOrForMaybe);
    t.is(MaybeRootCompatV54.mapOrForMaybe, mapOrForMaybe);
});
