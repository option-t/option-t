// XXX:
// The type definitions for '--moduleResolution node' is a ES6 format,
// So it would test it by importing it simply.
import {Option, Some, None, OptionBase} from '../../cjs/Option';

// `Some<T>`
(function(){
    var option: Option<number> = new Some(1);
    var isSome: boolean = option.isSome;
    var isNone: boolean = option.isNone;
    var unwrap: number = option.unwrap();
    var unwrapOr: number = option.unwrapOr(10);
    var unwrapOrElse: number = option.unwrapOrElse((): number => 10);
    var expect: number = option.expect('barfoo');
    var map: Option<string> = option.map((val: number): string => String(val));
    var flatMap: Option<string> = option.flatMap((val: number): Option<string> => {
        return new Some( String(val) );
    });
    var mapOr: string = option.mapOr("bar", (val: number): string => String(val));
    var mapOrElse: string = option.mapOrElse((): string => { return String(10); },
                                             (v: number) => { return String(v); });
    var and: Option<string> = option.and(new Some<string>("bar"));
    var andThen: Option<string> = option.andThen((_: number): Option<string> => {
        return new None<string>();
    });
    var or: Option<number> = option.or(new Some<number>(10));
    var orElse: Option<number> = option.orElse((): Option<number> => {
        return new Some<number>(2);
    });
    option.drop();
    option.drop((_: number) => {});

    if (option instanceof OptionBase) {
        const bar: any = null;
    }
})();

// `None<T>`
(function(){
    var option: Option<number> = new None<number>();
    var isSome: boolean = option.isSome;
    var isNone: boolean = option.isNone;
    var unwrap: number = option.unwrap();
    var unwrapOr: number = option.unwrapOr(10);
    var unwrapOrElse: number = option.unwrapOrElse((): number => 10);
    var expect: number = option.expect('barfoo');
    var map: Option<string> = option.map((val: number): string => String(val));
    var flatMap: Option<string> = option.flatMap((_: number): Option<string> => {
        return new None<string>();
    });
    var mapOr: string = option.mapOr("bar", (val: number): string => String(val));
    var mapOrElse: string = option.mapOrElse((): string => { return String(10); },
                                             (v: number) => { return String(v); });
    var and: Option<string> = option.and(new Some<string>("bar"));
    var andThen: Option<string> = option.andThen((_: number): Option<string> => {
        return new None<string>();
    });
    var or: Option<number> = option.or(new Some<number>(10));
    var orElse: Option<number> = option.orElse((): Option<number> => {
        return new Some<number>(2);
    });
    option.drop();
    option.drop((_: number) => {});

    if (option instanceof OptionBase) {
        const bar: any = null;
    }
})();

// `Option<T>`
(function(){
    var option: Option<number> = new None<number>();
    option = new Some(1);

    var option2: Option<string> = new Some('bar');
    option2 = new None<string>();
})();
