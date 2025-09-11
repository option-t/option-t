import test from 'ava';

import * as MaybeRoot from 'option-t/maybe';
import * as MaybeRootCompatV54 from 'option-t/maybe/compat/v54';
import { isNullOrUndefined } from 'option-t/maybe/maybe';
import { Maybe as MaybeNamespace } from 'option-t/maybe/namespace';

test(`exported alias' identity check`, (t) => {
    t.is(MaybeRoot.isNullOrUndefined, isNullOrUndefined);
    t.is(MaybeNamespace.isNullOrUndefined, isNullOrUndefined);
    t.is(MaybeRootCompatV54.isNullOrUndefined, isNullOrUndefined);
});
