/*
 * MIT License
 *
 * Copyright (c) 2016 Tetsuharu OHZEKI <saneyuki.snyk@gmail.com>
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
import test from 'ava';

import { createOk, createErr, ResultBase } from '../../__dist/cjs/Result.js';

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
