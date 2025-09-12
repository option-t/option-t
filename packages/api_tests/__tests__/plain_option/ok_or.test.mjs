import test from 'ava';

import { okOrForPlainOption } from 'option-t/plain_option/ok_or';
import { createSome, createNone } from 'option-t/plain_option/option';
import { unwrapOk, unwrapErr } from 'option-t/plain_result/result';

test('the input is Some', (t) => {
    const OK_VAL = Symbol('ok');
    const ERR_VAL = Symbol('err');

    const input = createSome(OK_VAL);
    const actual = okOrForPlainOption(input, ERR_VAL);

    t.true(actual.ok, 'the actual should be Ok');
    t.is(unwrapOk(actual), OK_VAL, 'the actual should be wrap the expect');
});

test('the input is None', (t) => {
    const ERR_VAL = Symbol('err');

    const input = createNone();
    const actual = okOrForPlainOption(input, ERR_VAL);

    t.false(actual.ok, 'the actual should be Err');
    t.is(unwrapErr(actual), ERR_VAL, 'the actual should be wrap the expect');
});
