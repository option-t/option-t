import test from 'ava';

import { expectTypeOf } from 'expect-type';
// eslint-disable-next-line @typescript-eslint/naming-convention
import type * as ResultRoot from 'option-t/plain_result';
// eslint-disable-next-line @typescript-eslint/naming-convention
import type * as ResultRootCompatV54 from 'option-t/plain_result/compat/v54';
import type { Result as ResultNamespace } from 'option-t/plain_result/namespace';
import type { Ok } from 'option-t/plain_result/result';

test(`exported alias' identity check`, (t) => {
    t.true(expectTypeOf<ResultRoot.Ok<number>>().toEqualTypeOf<Ok<number>>());
    t.true(expectTypeOf<ResultNamespace.Ok<number>>().toEqualTypeOf<Ok<number>>());
    t.true(expectTypeOf<ResultRootCompatV54.Ok<number>>().toEqualTypeOf<Ok<number>>());
});
