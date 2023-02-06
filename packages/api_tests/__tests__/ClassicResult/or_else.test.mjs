import test from 'ava';

import {
    createClassicOk,
    createClassicErr,
    ClassicResultBase,
} from 'option-t/__dist/esm/ClassicResult/ClassicResult.js';

const ORIGIN = Symbol('ORIGIN');
const EXPECTED = Symbol('EXPECTED');

const okTestcase = [createClassicOk, createClassicErr];
for (const innerFn of okTestcase) {
    test(`Ok(T), return ${innerFn.name}`, (t) => {
        const op = function (_v) {
            t.fail();
            return innerFn(EXPECTED);
        };

        const origin = createClassicOk(ORIGIN);
        const result = origin.orElse(op);

        t.is(result.isOk(), true, 'the returned value should be `Ok');
        t.is(result.unwrap(), ORIGIN, 'the returned value should wrap the expected value');
    });
}

test(`Err(E), return Ok`, (t) => {
    t.plan(3);

    const op = function (v) {
        t.is(v, ORIGIN, 'the argument of `op` should be the expected value');
        return createClassicOk(EXPECTED);
    };

    const origin = createClassicErr(ORIGIN);
    const result = origin.orElse(op);

    t.is(result.isOk(), true, 'the returned value should be `Ok');
    t.is(result.unwrap(), EXPECTED, 'the returned value should wrap the expected value');
});

test(`Err(E), return Err`, (t) => {
    t.plan(3);

    const op = function (v) {
        t.is(v, ORIGIN, 'the argument of `op` should be the expected value');
        return createClassicErr(EXPECTED);
    };

    const origin = createClassicErr(ORIGIN);
    const result = origin.orElse(op);

    t.is(result.isErr(), true, 'the returned value should be `Err');
    t.is(result.unwrapErr(), EXPECTED);
});

test('Ok(T): return non Result type', (t) => {
    const input = createClassicOk(1);
    t.notThrows(() => {
        input.orElse(function (v) {
            t.fail("don't call");
            return v;
        });
    });
});

test('Err(E): return non Result type', (t) => {
    t.plan(2);

    const input = createClassicErr(1);
    t.throws(
        () => {
            input.orElse(function (v) {
                t.false(v instanceof ClassicResultBase);
                return v;
            });
        },
        {
            instanceOf: TypeError,
            message: "Result<T, E>.orElse()' param `op` should return `Result<T, F>`.",
        }
    );
});
