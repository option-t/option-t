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

/// <reference path="../option-t.d.ts" />;
import OptionT = require('option-t');
var Some = OptionT.Some;
var None = OptionT.None;

// `Some<T>`
(function(){
    var option: OptionT.Some<number> = new Some(1);
    var isSome: boolean = option.isSome;
    var unwrap: number = option.unwrap();
    var unwrapOr: number = option.unwrapOr(10);
    var unwrapOrElse: number = option.unwrapOrElse((): number => 10);
    var expect: number = option.expect('barfoo');
    var map: OptionT.Option<string> = option.map((val: number): string => String(val));
    var flatMap: OptionT.Option<string> = option.flatMap((val: number): OptionT.Option<string> => {
        return new Some( String(val) );
    });
    var mapOr: string = option.mapOr("bar", (val: number): string => String(val));
    var mapOrElse: string = option.mapOrElse((): string => { return String(10); },
                                             (v: number) => { return String(v); });
    var and: OptionT.Option<string> = option.and(new Some<string>("bar"));
    var andThen: OptionT.Option<string> = option.andThen((val: number): OptionT.Option<string> => {
        return new None<string>();
    });
    var or: OptionT.Option<number> = option.or(new Some<number>(10));
    var orElse: OptionT.Option<number> = option.orElse((): OptionT.Option<number> => {
        return new Some<number>(2);
    });
    option.drop();
})();

// `None<T>`
(function(){
    var option: OptionT.None<number> = new None<number>();
    var isSome: boolean = option.isSome;
    var unwrap: number = option.unwrap();
    var unwrapOr: number = option.unwrapOr(10);
    var unwrapOrElse: number = option.unwrapOrElse((): number => 10);
    var expect: number = option.expect('barfoo');
    var map: OptionT.Option<string> = option.map((val: number): string => String(val));
    var flatMap: OptionT.Option<string> = option.flatMap((val: number): OptionT.Option<string> => {
        return new None<string>();
    });
    var mapOr: string = option.mapOr("bar", (val: number): string => String(val));
    var mapOrElse: string = option.mapOrElse((): string => { return String(10); },
                                             (v: number) => { return String(v); });
    var and: OptionT.Option<string> = option.and(new Some<string>("bar"));
    var andThen: OptionT.Option<string> = option.andThen((val: number): OptionT.Option<string> => {
        return new None<string>();
    });
    var or: OptionT.Option<number> = option.or(new Some<number>(10));
    var orElse: OptionT.Option<number> = option.orElse((): OptionT.Option<number> => {
        return new Some<number>(2);
    });
    option.drop();
})();

// `Option<T>`
(function(){
    var option: OptionT.Option<number> = new None<number>();
    option = new Some(1);

    var option2: OptionT.Option<string> = new Some('bar');
    option2 = new None<string>();
})();
