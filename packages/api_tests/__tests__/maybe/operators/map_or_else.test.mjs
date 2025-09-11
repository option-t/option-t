import test from 'ava';

import * as MaybeRoot from 'option-t/maybe';
import * as MaybeRootCompatV54 from 'option-t/maybe/compat/v54';
import { mapOrElseForMaybe } from 'option-t/maybe/map_or_else';
import { Maybe as MaybeNamespace } from 'option-t/maybe/namespace';
import { nonNullableValueCaseListForSync } from '../../utils.mjs';

for (const [INPUT, PASSED_VALUE, EXPECTED] of nonNullableValueCaseListForSync) {
    test('value:' + String(INPUT), (t) => {
        t.plan(3);

        const DEFAULT_VAL = Symbol('def');

        const result = mapOrElseForMaybe(
            INPUT,
            () => {
                t.fail('do not call here');
                return DEFAULT_VAL;
            },
            (v) => {
                t.pass('should call selector fn');
                t.is(v, PASSED_VALUE, 'the arg is the input');
                return v;
            },
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
            },
        );
        t.is(result, DEFAULE_VAL);
    });

    test(`assert that do not return Maybe<*> as the transformer's result. transformer's result=${String(
        NULL_VALUE,
    )}`, (t) => {
        t.plan(2);

        t.throws(
            () => {
                const INPUT = Math.random();
                mapOrElseForMaybe(
                    INPUT,
                    () => {
                        t.fail('do not call this');
                        return Math.random();
                    },
                    (_v) => {
                        t.pass('call here');
                        return NULL_VALUE;
                    },
                );
            },
            {
                instanceOf: TypeError,
                message: '`transformer` must not return `null` or `undefined`',
            },
        );
    });

    for (const FALLBACK_VALUE of [undefined, null]) {
        test(`v = ${String(NULL_VALUE)}, def = ${String(FALLBACK_VALUE)}`, (t) => {
            t.plan(2);
            t.throws(
                () => {
                    mapOrElseForMaybe(
                        NULL_VALUE,
                        () => {
                            t.pass('call this');
                            return FALLBACK_VALUE;
                        },
                        (_v) => {
                            t.fail('do not call this');
                            return Math.random();
                        },
                    );
                },
                {
                    instanceOf: TypeError,
                    message: '`recoverer` must not return `null` or `undefined`',
                },
            );
        });
    }
}

test(`exported alias' identity check`, (t) => {
    t.is(MaybeRoot.mapOrElseForMaybe, mapOrElseForMaybe);
    t.is(MaybeRoot.MaybeOperator.mapOrElse, mapOrElseForMaybe);
    t.is(MaybeNamespace.mapOrElse, mapOrElseForMaybe);
    t.is(MaybeRootCompatV54.mapOrElseForMaybe, mapOrElseForMaybe);
});
