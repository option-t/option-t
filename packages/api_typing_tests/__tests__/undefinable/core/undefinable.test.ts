import test from 'ava';

import { expectTypeOf } from 'expect-type';
// eslint-disable-next-line @typescript-eslint/naming-convention
import type * as UndefinableRoot from 'option-t/undefinable';
// eslint-disable-next-line @typescript-eslint/naming-convention
import type * as UndefinableRootCompatV54 from 'option-t/undefinable/compat/v54';
import type { Undefinable as UndefinableNamespace } from 'option-t/undefinable/namespace';
import type { Undefinable } from 'option-t/undefinable/undefinable';

test(`exported alias' identity check`, (t) => {
    t.true(
        expectTypeOf<UndefinableRoot.Undefinable<number>>().toEqualTypeOf<Undefinable<number>>(),
    );
    t.true(
        expectTypeOf<UndefinableNamespace.Undefinable<number>>().toEqualTypeOf<
            Undefinable<number>
        >(),
    );
    t.true(
        expectTypeOf<UndefinableRootCompatV54.Undefinable<number>>().toEqualTypeOf<
            Undefinable<number>
        >(),
    );
});
