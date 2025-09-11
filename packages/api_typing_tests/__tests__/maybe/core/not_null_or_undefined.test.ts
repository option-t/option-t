import test from 'ava';

import { expectTypeOf } from 'expect-type';
// eslint-disable-next-line @typescript-eslint/naming-convention
import type * as MaybeRoot from 'option-t/maybe';
// eslint-disable-next-line @typescript-eslint/naming-convention
import type * as MaybeRootCompatV54 from 'option-t/maybe/compat/v54';
import type { NotNullOrUndefined } from 'option-t/maybe/maybe';
import type { Maybe as MaybeNamespace } from 'option-t/maybe/namespace';

test(`exported alias' identity check`, (t) => {
    t.true(
        expectTypeOf<MaybeRoot.NotNullOrUndefined<number>>().toEqualTypeOf<
            NotNullOrUndefined<number>
        >(),
    );
    t.true(
        expectTypeOf<MaybeNamespace.NotNullOrUndefined<number>>().toEqualTypeOf<
            NotNullOrUndefined<number>
        >(),
    );
    t.true(
        expectTypeOf<MaybeRootCompatV54.NotNullOrUndefined<number>>().toEqualTypeOf<
            NotNullOrUndefined<number>
        >(),
    );
});
