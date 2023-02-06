import test from 'ava';

import {
    createClassicOk,
    createClassicErr,
    ClassicResultBase,
    ClassicOkConstructor as Ok,
    ClassicErrConstructor as Err,
} from 'option-t/esm/ClassicResult';

test('Ok<T> should be instanceof `ClassicResultBase`', (t) => {
    const result = createClassicOk(1);
    t.true(result instanceof ClassicResultBase);
});

test('Err<E> should be instanceof `ClassicResultBase`', (t) => {
    const result = createClassicErr(2);
    t.true(result instanceof ClassicResultBase);
});

test('Ok<T> by Constructor should be instanceof `ClassicResultBase`', (t) => {
    const result = new Ok(1);
    t.true(result instanceof ClassicResultBase);
});

test('Err<E> by Constructor should be instanceof `ClassicResultBase`', (t) => {
    const result = new Err(2);
    t.true(result instanceof ClassicResultBase);
});

test('Ok<T> by Constructor should NOT be instanceof `Ok`', (t) => {
    const result = new Ok(1);
    t.false(result instanceof Ok);
});

test('Err<E> by Constructor should NOT be instanceof `Err`', (t) => {
    const result = new Err(2);
    t.false(result instanceof Err);
});

test('prototype should be frozen', (t) => {
    t.true(Object.isFrozen(ClassicResultBase.prototype));
});
