import test from 'ava';

import * as PlainResult from 'option-t/plain_result';
import * as PlainResultCompatV54 from 'option-t/plain_result/compat/v54';
import { Result as PlainResultNamespace } from 'option-t/plain_result/namespace';
import { createOk, createErr } from 'option-t/plain_result/result';

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

test(`exported alias' identity check: createOk`, (t) => {
    t.is(PlainResult.createOk, createOk);
    t.is(PlainResultNamespace.createOk, createOk);
    t.is(PlainResultCompatV54.createOk, createOk);
});

test(`exported alias' identity check: createErr`, (t) => {
    t.is(PlainResult.createErr, createErr);
    t.is(PlainResultNamespace.createErr, createErr);
    t.is(PlainResultCompatV54.createErr, createErr);
});
