import test from 'ava';

import * as NullableRoot from 'option-t/nullable';
import * as NullableRootCompatV54 from 'option-t/nullable/compat/v54';
import { Nullable as NullableNamespace } from 'option-t/nullable/namespace';
import { isNotNull } from 'option-t/nullable/nullable';

test(`exported alias' identity check`, (t) => {
    t.is(NullableRoot.isNotNull, isNotNull);
    t.is(NullableNamespace.isNotNull, isNotNull);
    t.is(NullableRootCompatV54.isNotNull, isNotNull);
});
