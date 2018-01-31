'use strict';

require('./option-t/test_initialize');
require('./option-t/test_json');
require('./option-t/test_unwrap');
require('./option-t/test_unwrap_or');
require('./option-t/test_unwrap_or_else');
require('./option-t/test_expect');
require('./option-t/test_map');
require('./option-t/test_flatmap');
require('./option-t/test_map_or');
require('./option-t/test_map_or_else');
require('./option-t/test_drop');
require('./option-t/test_inheritance');
require('./option-t/test_and');
require('./option-t/test_or');
require('./option-t/test_or_else');

require('./result-te/test_initialize');
require('./result-te/test_inheritance');
require('./result-te/test_ok');
require('./result-te/test_err');
require('./result-te/test_map');
require('./result-te/test_map_err');
require('./result-te/test_and');
require('./result-te/test_and_then');
require('./result-te/test_or');
require('./result-te/test_or_else');
require('./result-te/test_unwrap');
require('./result-te/test_unwrap_err');
require('./result-te/test_unwrap_or');
require('./result-te/test_unwrap_or_else');
require('./result-te/test_expect');
require('./result-te/test_drop');

require('./Maybe/test_expect');
require('./Maybe/test_type_guard');
require('./Maybe/test_unwrap');
require('./Maybe/test_unwrap_or');

require('./Nullable/test_expect');
require('./Nullable/test_type_guard');
require('./Nullable/test_unwrap');
require('./Nullable/test_unwrap_or');

require('./Undefinable/test_expect');
require('./Undefinable/test_type_guard');
require('./Undefinable/test_unwrap');
require('./Undefinable/test_unwrap_or');

require('./PlainOption/test_create');
require('./PlainOption/test_object_shape');
require('./PlainOption/test_type_guard');

require('./PlainResult/test_create');
require('./PlainResult/test_object_shape');
require('./PlainResult/test_type_guard');
