import test from 'ava';

import { okOrElseForPlainOption } from 'option-t/plain_option/ok_or_else';
import { createSome, createNone } from 'option-t/plain_option/option';
import { unwrapOk, unwrapErr } from 'option-t/plain_result/result';

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
    t.is(unwrapOk(actual), OK_VAL, 'the actual should be wrap the expect');
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
    t.is(unwrapErr(actual), ERR_VAL, 'the actual should be wrap the expect');
});
