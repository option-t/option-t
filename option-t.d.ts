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

declare module 'option-t' {

    interface Option<T> {
        isSome: boolean;
        unwrap(): T;
        unwrapOr(def: T): T;
        unwrapOrElse(fn: () => T): T;
        map<U>(fn: (v: T) => U): Option<U>;
        flatMap<U>(fn: (v: T) => Option<U>): Option<U>;
        and<U>(optb: Option<U>): Option<U>;
        andThen<U>(fn: (v: T) => Option<U>): Option<U>;
        or(optb: Option<T>): Option<T>;
        orElse(fn: () => Option<T>): Option<T>;
        drop(): void;
    }

    class Some<T> implements Option<T> {
        constructor(val: T);
        isSome: boolean;
        unwrap(): T;
        unwrapOr(def: T): T;
        unwrapOrElse(fn: () => T): T;
        map<U>(fn: (v: T) => U): Option<U>;
        flatMap<U>(fn: (v: T) => Option<U>): Option<U>;
        and<U>(optb: Option<U>): Option<U>;
        andThen<U>(fn: (v: T) => Option<U>): Option<U>;
        or(optb: Option<T>): Option<T>;
        orElse(fn: () => Option<T>): Option<T>;
        drop(): void;
    }

    class None<T> implements Option<T> {
        constructor();
        isSome: boolean;
        unwrap(): T;
        unwrapOr(def: T): T;
        unwrapOrElse(fn: () => T): T;
        map<U>(fn: (v: T) => U): Option<U>;
        flatMap<U>(fn: (v: T) => Option<U>): Option<U>;
        and<U>(optb: Option<U>): Option<U>;
        andThen<U>(fn: (v: T) => Option<U>): Option<U>;
        or(optb: Option<T>): Option<T>;
        orElse(fn: () => Option<T>): Option<T>;
        drop(): void;
    }
}
