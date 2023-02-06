import test from 'ava';

import {
    createClassicSome,
    createClassicNone,
} from 'option-t/__dist/esm/ClassicOption/ClassicOption.js';

test('Some<T>', function (t) {
    t.plan(3);

    const EXPECTED = 1;
    function destructor(v) {
        t.pass('should be called with the destructor');
        t.is(v, EXPECTED, 'should be called with the argument');
    }

    const option = createClassicSome(EXPECTED);
    option.drop(destructor);
    t.is(option.toJSON().value, null, 'the inner should be freed');
});

test('None', function (t) {
    function destructor() {
        t.fail('should not be called with the destructor');
    }

    const option = createClassicNone();
    option.drop(destructor);
    t.is(option.toJSON().value, null, 'the inner should be freed');
});
