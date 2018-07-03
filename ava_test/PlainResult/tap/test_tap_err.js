import test from 'ava';

const {
    createErr,
    createOk,
} = require('../../../cjs/PlainResult/Result');
const {
    tapErr,
} = require('../../../cjs/PlainResult/tap');

test('input is Ok()', (t) => {
    t.plan(1);
    const INPUT_INNER = Symbol('input');

    const input = createOk(INPUT_INNER);
    const actual = tapErr(input, (_v) => {
        t.pass('should not call the tap fn');
    });
    t.is(input, actual, 'should be the expect returned');
});

test('input is Err()', (t) => {
    t.plan(3);
    const INPUT_INNER = Symbol('input');

    const input = createErr(INPUT_INNER);
    const actual = tapErr(input, (v) => {
        t.pass('should call the tap fn');
        t.is(v, INPUT_INNER, 'should be the expected arg');
    });

    t.is(input, actual, 'should be the expect returned');
});
