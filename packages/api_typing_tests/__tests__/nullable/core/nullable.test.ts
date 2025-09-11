import test from 'ava';

import { expectTypeOf } from 'expect-type';
// eslint-disable-next-line @typescript-eslint/naming-convention
import type * as NullableRoot from 'option-t/nullable';
// eslint-disable-next-line @typescript-eslint/naming-convention
import type * as NullableRootCompatV54 from 'option-t/nullable/compat/v54';
import type { Nullable as NullableNamespace } from 'option-t/nullable/namespace';
import type { Nullable } from 'option-t/nullable/nullable';

test(`exported alias' identity check`, (t) => {
    t.true(expectTypeOf<NullableRoot.Nullable<number>>().toEqualTypeOf<Nullable<number>>());
    t.true(expectTypeOf<NullableNamespace.Nullable<number>>().toEqualTypeOf<Nullable<number>>());
    t.true(
        expectTypeOf<NullableRootCompatV54.Nullable<number>>().toEqualTypeOf<Nullable<number>>(),
    );
});
