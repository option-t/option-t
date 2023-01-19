import test from 'ava';

import { createSome, createNone } from '../../__dist/esm/PlainOption/Option.js';
import { okOrElseForPlainOption } from '../../__dist/esm/PlainOption/okOrElse.js';
import { unwrapErrFromResult, unwrapOkFromResult } from '../../__dist/esm/PlainResult/unwrap.js';

test('the input is Some', (t) => {
    t.plan(2);

    const OK_VAL = Symbol('ok');
    const ERR_VAL = Symbol('err');

    const input = createSome(OK_VAL);
    const actual = okOrElseForPlainOption(input, () => {
        t.pass('should not call def');
        return ERR_VAL;
    });

    t.true(actual.ok, 'the actual should be Ok');
    t.is(unwrapOkFromResult(actual), OK_VAL, 'the actual should be wrap the expect');
});

test('the input is None', (t) => {
    t.plan(3);
    const ERR_VAL = Symbol('err');

    const input = createNone();
    const actual = okOrElseForPlainOption(input, () => {
        t.pass('should call def');

        return ERR_VAL;
    });

    t.false(actual.ok, 'the actual should be Err');
    t.is(unwrapErrFromResult(actual), ERR_VAL, 'the actual should be wrap the expect');
});
