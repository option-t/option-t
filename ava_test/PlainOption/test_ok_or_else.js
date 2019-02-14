import test from 'ava';

const { createSome, createNone } = require('../../__dist/cjs/PlainOption');
const { okOrElseForPlainOption } = require('../../__dist/cjs/PlainOption/okOrElse');
const { unwrapErrFromResult, unwrapFromResult } = require('../../__dist/cjs/PlainResult/unwrap');

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
    t.is(unwrapFromResult(actual), OK_VAL, 'the actual should be wrap the expect');
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
