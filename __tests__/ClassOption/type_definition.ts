// XXX:
// The type definitions for '--moduleResolution node' is a ES6 format,
// So it would test it by importing it simply.
import { Option, OptionBase, createSome, createNone, Some, None } from '../../__dist/esm/Option';

// `Some<T>`
(function () {
    var option: Option<number> = createSome(1);
    option = new Some<number>(1);
    option = createSome<number>(1);
    var isSome: boolean = option.isSome;
    var isNone: boolean = option.isNone;
    var unwrap: number = option.unwrap();
    var unwrapOr: number = option.unwrapOr(10);
    var unwrapOrElse: number = option.unwrapOrElse((): number => 10);
    var expect: number = option.expect('barfoo');
    var map: Option<string> = option.map((val: number): string => String(val));
    var flatMap: Option<string> = option.flatMap(
        (val: number): Option<string> => {
            return createSome(String(val));
        }
    );
    var mapOr: string = option.mapOr('bar', (val: number): string => String(val));
    var mapOrElse: string = option.mapOrElse(
        (): string => {
            return String(10);
        },
        (v: number) => {
            return String(v);
        }
    );
    var and: Option<string> = option.and(createSome<string>('bar'));
    var andThen: Option<string> = option.andThen(
        (_: number): Option<string> => {
            return createNone<string>();
        }
    );
    var or: Option<number> = option.or(createSome<number>(10));
    var orElse: Option<number> = option.orElse(
        (): Option<number> => {
            return createSome<number>(2);
        }
    );
    option.drop();
    option.drop((_: number) => {});

    if (option instanceof OptionBase) {
        const bar: any = null;
    }
})();

// `None<T>`
(function () {
    var option: Option<number> = createNone<number>();
    option = new None<number>();
    option = createNone<number>();
    var isSome: boolean = option.isSome;
    var isNone: boolean = option.isNone;
    var unwrap: number = option.unwrap();
    var unwrapOr: number = option.unwrapOr(10);
    var unwrapOrElse: number = option.unwrapOrElse((): number => 10);
    var expect: number = option.expect('barfoo');
    var map: Option<string> = option.map((val: number): string => String(val));
    var flatMap: Option<string> = option.flatMap(
        (_: number): Option<string> => {
            return createNone<string>();
        }
    );
    var mapOr: string = option.mapOr('bar', (val: number): string => String(val));
    var mapOrElse: string = option.mapOrElse(
        (): string => {
            return String(10);
        },
        (v: number) => {
            return String(v);
        }
    );
    var and: Option<string> = option.and(createSome<string>('bar'));
    var andThen: Option<string> = option.andThen(
        (_: number): Option<string> => {
            return createNone<string>();
        }
    );
    var or: Option<number> = option.or(createSome<number>(10));
    var orElse: Option<number> = option.orElse(
        (): Option<number> => {
            return createSome<number>(2);
        }
    );
    option.drop();
    option.drop((_: number) => {});

    if (option instanceof OptionBase) {
        const bar: any = null;
    }
})();

// `Option<T>`
(function () {
    var option: Option<number> = createNone<number>();
    option = createSome(1);

    var option2: Option<string> = createSome('bar');
    option2 = createNone<string>();
})();
