import test from 'ava';

import { createOk, createErr, ResultBase } from '../../__dist/esm/Result.js';

const ORIGIN = Symbol('ORIGIN');
const EXPECTED = Symbol('EXPECTED');

test(`OK(T), return Ok(U)`, (t) => {
    t.plan(3);

    const op = function (v) {
        t.is(v, ORIGIN, 'the argument of `op` should be the expected value');
        return createOk(EXPECTED);
    };

    const origin = createOk(ORIGIN);
    const result = origin.andThen(op);

    t.is(result.isOk(), true, 'the returned value should be `Ok');
    t.is(result.unwrap(), EXPECTED, 'the returned value should wrap the expected value');
});

test(`Ok(T), return Err(F)`, (t) => {
    t.plan(3);

    const op = function (v) {
        t.is(v, ORIGIN, 'the argument of `op` should be the expected value');
        return createErr(EXPECTED);
    };

    const origin = createOk(ORIGIN);
    const result = origin.andThen(op);

    t.is(result.isErr(), true, 'the returned value should be `Err');
    t.is(result.unwrapErr(), EXPECTED);
});

const errTestcaseList = [createOk, createErr];
for (const innerfn of errTestcaseList) {
    test(`Err(E), return ${innerfn.name}`, (t) => {
        t.plan(2);

        const op = function (_v) {
            t.fail();
            return innerfn(EXPECTED);
        };

        const origin = createErr(ORIGIN);
        const result = origin.andThen(op);

        t.is(result.isErr(), true, 'the returned value should be `Err');
        t.is(result.unwrapErr(), ORIGIN);
    });
}

test('Ok(T): return non Result type', (t) => {
    t.plan(2);

    const input = createOk(ORIGIN);
    t.throws(
        () => {
            input.andThen(function (v) {
                t.false(v instanceof ResultBase);
                return v;
            });
        },
        {
            instanceOf: TypeError,
            message: "Result<T, E>.andThen()' param `op` should return `Result<U, E>`.",
        }
    );
});

test('Err(E): return non Result type', (t) => {
    const input = createErr(ORIGIN);
    t.notThrows(() => {
        input.andThen(function (v) {
            t.fail("don't call");
            return v;
        });
    });
});
