import test from 'ava';

import { ResultOperator } from 'option-t/plain_result';
import * as PlainResultCompatV54 from 'option-t/plain_result/compat/v54';
import { Result as PlainResultNamespace } from 'option-t/plain_result/namespace';
import { createOk, createErr } from 'option-t/plain_result/result';
import { toUndefinableFromOk } from 'option-t/plain_result/to_undefinable';

const VALUE_T = Math.random();
const ERROR_E = new Error();

test('input is Ok(T)', (t) => {
    const input = createOk(VALUE_T);
    const actual = toUndefinableFromOk(input);
    t.is(actual, VALUE_T);
});

test('input is Err(E)', (t) => {
    const input = createErr(ERROR_E);
    const actual = toUndefinableFromOk(input);
    t.is(actual, undefined);
});

test(`exported alias' identity check`, (t) => {
    t.is(ResultOperator.toUndefinableFromOk, toUndefinableFromOk);
    t.is(PlainResultNamespace.toUndefinableFromOk, toUndefinableFromOk);
    t.is(PlainResultCompatV54.toUndefinableFromOk, toUndefinableFromOk);
});
