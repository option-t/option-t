import test from 'ava';

import { createClassicOk, createClassicErr, ClassicResultBase } from 'option-t/classic_result';

const ORIGIN = Symbol('ORIGIN');
const EXPECTED = Symbol('EXPECTED');

test(`OK(T), return Ok(U)`, (t) => {
    t.plan(3);

    const op = function (v) {
        t.is(v, ORIGIN, 'the argument of `op` should be the expected value');
        return createClassicOk(EXPECTED);
    };

    const origin = createClassicOk(ORIGIN);
    const result = origin.andThen(op);

    t.is(result.isOk(), true, 'the returned value should be `Ok');
    t.is(result.unwrap(), EXPECTED, 'the returned value should wrap the expected value');
});

test(`Ok(T), return Err(F)`, (t) => {
    t.plan(3);

    const op = function (v) {
        t.is(v, ORIGIN, 'the argument of `op` should be the expected value');
        return createClassicErr(EXPECTED);
    };

    const origin = createClassicOk(ORIGIN);
    const result = origin.andThen(op);

    t.is(result.isErr(), true, 'the returned value should be `Err');
    t.is(result.unwrapErr(), EXPECTED);
});

const errTestcaseList = [createClassicOk, createClassicErr];
for (const innerfn of errTestcaseList) {
    test(`Err(E), return ${innerfn.name}`, (t) => {
        t.plan(2);

        const op = function (_v) {
            t.fail();
            return innerfn(EXPECTED);
        };

        const origin = createClassicErr(ORIGIN);
        const result = origin.andThen(op);

        t.is(result.isErr(), true, 'the returned value should be `Err');
        t.is(result.unwrapErr(), ORIGIN);
    });
}

test('Ok(T): return non Result type', (t) => {
    t.plan(2);

    const input = createClassicOk(ORIGIN);
    t.throws(
        () => {
            input.andThen(function (v) {
                t.false(v instanceof ClassicResultBase);
                return v;
            });
        },
        {
            instanceOf: TypeError,
            message: "Result<T, E>.andThen()' param `op` should return `Result<U, E>`.",
        },
    );
});

test('Err(E): return non Result type', (t) => {
    const input = createClassicErr(ORIGIN);
    t.notThrows(() => {
        input.andThen(function (v) {
            t.fail("don't call");
            return v;
        });
    });
});
