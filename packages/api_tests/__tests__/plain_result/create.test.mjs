import test from 'ava';

import * as PlainResult from 'option-t/plain_result';

test('PlainResult::createOk', (t) => {
    const EXPECTED = Symbol('ok');
    const actual = PlainResult.createOk(EXPECTED);

    t.true(PlainResult.isOk(actual), 'actual should be Ok');
    t.is(PlainResult.unwrapOk(actual), EXPECTED, 'actual should be expected');
});

test('PlainResult::createErr', (t) => {
    const EXPECTED = Symbol('error');
    const actual = PlainResult.createErr(EXPECTED);

    t.true(PlainResult.isErr(actual), 'actual should be Err');
    t.is(PlainResult.unwrapErr(actual), EXPECTED, 'actual should be expected');
});
