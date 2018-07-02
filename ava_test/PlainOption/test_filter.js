import test from 'ava';

const { createSome, createNone, isSome, isNone } = require('../../cjs/PlainOption');
const { filterForOption } = require('../../cjs/PlainOption/filter');

test('PlainOption::filter() with Some, predicate is `true`', (t) => {
    const EXPECTED = Symbol('expected');
    t.plan(5);

    const input = createSome(EXPECTED);
    const output = filterForOption(input, (v) => {
        t.pass('predicate should be called');
        t.is(v, EXPECTED, 'should pass the inner value as the argument for predicate');
        return true;
    });

    t.true(isSome(output), 'actual should be Some');
    t.is(output.val, EXPECTED, 'actual should contain expected');
    t.not(input, output, 'the input is different from the output');
});

test('PlainOption::filter() with Some, predicate is `false`', (t) => {
    const EXPECTED = Symbol('expected');
    t.plan(4);

    const input = createSome(EXPECTED);
    const output = filterForOption(input, (v) => {
        t.pass('predicate should be called');
        t.is(v, EXPECTED, 'should pass the inner value as the argument for predicate');
        return false;
    });

    t.true(isNone(output), 'actual should be None');
    t.not(input, output, 'the input is different from the output');
});

test('PlainOption::filter() with None', (t) => {
    const input = createNone();
    const output = filterForOption(input, (_v) => {
        t.fail('predicate should not be called');
    });

    t.true(isNone(output), 'actual should be None');
    t.not(input, output, 'the input is different from the output');
});
