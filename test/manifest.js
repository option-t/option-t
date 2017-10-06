/*
 * @license MIT License
 *
 * Copyright (c) 2015 Tetsuharu OHZEKI <saneyuki.snyk@gmail.com>
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */

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

require('./Maybe/test_type_guard');

require('./Nullable/test_type_guard');

require('./Undefinable/test_type_guard');

require('./PlainOption/test_type_guard');

require('./PlainResult/test_type_guard');
