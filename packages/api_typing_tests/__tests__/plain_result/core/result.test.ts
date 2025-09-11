import test from 'ava';

import { expectTypeOf } from 'expect-type';
// eslint-disable-next-line @typescript-eslint/naming-convention
import type * as ResultRoot from 'option-t/plain_result';
// eslint-disable-next-line @typescript-eslint/naming-convention
import type * as ResultRootCompatV54 from 'option-t/plain_result/compat/v54';
import type { Result as ResultNamespace } from 'option-t/plain_result/namespace';
import type { Result } from 'option-t/plain_result/result';

test(`exported alias' identity check`, (t) => {
    t.true(
        expectTypeOf<ResultRoot.Result<number, string>>().toEqualTypeOf<Result<number, string>>(),
    );
    t.true(
        expectTypeOf<ResultNamespace.Result<number, string>>().toEqualTypeOf<
            Result<number, string>
        >(),
    );
    t.true(
        expectTypeOf<ResultRootCompatV54.Result<number, string>>().toEqualTypeOf<
            Result<number, string>
        >(),
    );
});
