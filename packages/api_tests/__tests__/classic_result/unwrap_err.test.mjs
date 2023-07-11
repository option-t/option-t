import test from 'ava';

import { createClassicOk, createClassicErr } from 'option-t/ClassicResult';

const EXPECTED_OK = 'expected_ok';
const EXPECTED_ERR = 'expected_err';

test('Ok<T>', function (t) {
    const result = createClassicOk(EXPECTED_OK);
    t.throws(
        () => {
            result.unwrapErr();
        },
        {
            instanceOf: TypeError,
            message: 'called `unwrapErr()` on a `Ok` value',
        },
    );
});

test('Err<E>', function (t) {
    const ok = createClassicErr(EXPECTED_ERR);
    t.is(ok.unwrapErr(), EXPECTED_ERR, 'should be expected value');
});
