import test from 'ava';

import { createOk, createErr, ResultBase } from '../../__dist/esm/Result.js';

const ORIGIN = Symbol('ORIGIN');
const EXPECTED = Symbol('EXPECTED');

const okTestcase = [createOk, createErr];
for (const innerFn of okTestcase) {
    test(`Ok(T), return ${innerFn.name}`, (t) => {
        const op = function (_v) {
            t.fail();
            return innerFn(EXPECTED);
        };

        const origin = createOk(ORIGIN);
        const result = origin.orElse(op);

        t.is(result.isOk(), true, 'the returned value should be `Ok');
        t.is(result.unwrap(), ORIGIN, 'the returned value should wrap the expected value');
    });
}

test(`Err(E), return Ok`, (t) => {
    t.plan(3);

    const op = function (v) {
        t.is(v, ORIGIN, 'the argument of `op` should be the expected value');
        return createOk(EXPECTED);
    };

    const origin = createErr(ORIGIN);
    const result = origin.orElse(op);

    t.is(result.isOk(), true, 'the returned value should be `Ok');
    t.is(result.unwrap(), EXPECTED, 'the returned value should wrap the expected value');
});

test(`Err(E), return Err`, (t) => {
    t.plan(3);

    const op = function (v) {
        t.is(v, ORIGIN, 'the argument of `op` should be the expected value');
        return createErr(EXPECTED);
    };

    const origin = createErr(ORIGIN);
    const result = origin.orElse(op);

    t.is(result.isErr(), true, 'the returned value should be `Err');
    t.is(result.unwrapErr(), EXPECTED);
});

test('Ok(T): return non Result type', (t) => {
    const input = createOk(1);
    t.notThrows(() => {
        input.orElse(function (v) {
            t.fail("don't call");
            return v;
        });
    });
});

test('Err(E): return non Result type', (t) => {
    t.plan(2);

    const input = createErr(1);
    t.throws(
        () => {
            input.orElse(function (v) {
                t.false(v instanceof ResultBase);
                return v;
            });
        },
        {
            instanceOf: TypeError,
            message: "Result<T, E>.orElse()' param `op` should return `Result<T, F>`.",
        }
    );
});
