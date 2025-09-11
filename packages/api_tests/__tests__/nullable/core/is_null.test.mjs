import test from 'ava';

import * as NullableRoot from 'option-t/nullable';
import * as NullableRootCompatV54 from 'option-t/nullable/compat/v54';
import { Nullable as NullableNamespace } from 'option-t/nullable/namespace';
import { isNull } from 'option-t/nullable/nullable';

test(`exported alias' identity check`, (t) => {
    t.is(NullableRoot.isNull, isNull);
    t.is(NullableNamespace.isNull, isNull);
    t.is(NullableRootCompatV54.isNull, isNull);
});
