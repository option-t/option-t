import test from 'ava';

import * as MaybeRoot from 'option-t/maybe';
import * as MaybeRootCompatV54 from 'option-t/maybe/compat/v54';
import { isNotNullOrUndefined } from 'option-t/maybe/maybe';
import { Maybe as MaybeNamespace } from 'option-t/maybe/namespace';

test(`exported alias' identity check`, (t) => {
    t.is(MaybeRoot.isNotNullOrUndefined, isNotNullOrUndefined);
    t.is(MaybeNamespace.isNotNullOrUndefined, isNotNullOrUndefined);
    t.is(MaybeRootCompatV54.isNotNullOrUndefined, isNotNullOrUndefined);
});
