/* eslint-disable @typescript-eslint/no-unused-vars */

// XXX:
// The type definitions for '--moduleResolution node' is a ES6 format,
// So it would test it by importing it simply.
import { Option } from '../../__dist/esm/Option';
import { Result, ResultBase, createOk, createErr } from '../../__dist/esm/Result';

//  Ok<T>
(function () {
    let result: Result<number, void> = createOk<number, void>(1);
    result = createOk<number, void>(1);

    const isOk: boolean = result.isOk();
    const isErr: boolean = result.isErr();

    const ok: Option<number> = result.ok();
    const err: Option<void> = result.err();

    const map: Result<string, void> = result.map<string>((v: number) => String(v));
    const mapErr: Result<number, string> = result.mapErr<string>((_: void) => String(''));

    const and1: Result<string, void> = result.and(createOk<string, void>(''));
    const and2: Result<string, void> = result.and(createErr<string, void>(undefined));
    const andThen1: Result<string, void> = result.andThen<string>((_: number) =>
        createOk<string, void>('')
    );
    const andThen2: Result<string, void> = result.andThen<string>((_: number) =>
        createErr<string, void>(undefined)
    );

    const or1: Result<number, string> = result.or<string>(createOk<number, string>(1));
    const or2: Result<number, string> = result.or<string>(createErr<number, string>(''));
    const orElse1: Result<number, string> = result.orElse<string>((_: void) =>
        createOk<number, string>(1)
    );
    const orElse2: Result<number, string> = result.orElse<string>((_: void) =>
        createErr<number, string>('')
    );

    const unwrap: number = result.unwrap();
    const unwrapErr: void = result.unwrapErr();
    const unwrapOr: number = result.unwrapOr(1);
    const unwrapOrElse: number = result.unwrapOrElse((_: void) => 1);
    const expect: number = result.expect('');

    result.drop();
    result.drop((_: number) => {});
    result.drop(
        (_: number) => {},
        (_: void) => {}
    );

    if (result instanceof ResultBase) {
        const bar: any = null;
    }
})();

//  Err<E>
(function () {
    let result: Result<number, void> = createErr<number, void>(undefined);
    result = createErr<number, void>(undefined);

    const isOk: boolean = result.isOk();
    const isErr: boolean = result.isErr();

    const ok: Option<number> = result.ok();
    const err: Option<void> = result.err();

    const map: Result<string, void> = result.map<string>((v: number) => String(v));
    const mapErr: Result<number, string> = result.mapErr<string>((_: void) => String(''));

    const and1: Result<string, void> = result.and(createOk<string, void>(''));
    const and2: Result<string, void> = result.and(createErr<string, void>(undefined));
    const andThen1: Result<string, void> = result.andThen<string>((_: number) =>
        createOk<string, void>('')
    );
    const andThen2: Result<string, void> = result.andThen<string>((_: number) =>
        createErr<string, void>(undefined)
    );

    const or1: Result<number, string> = result.or<string>(createOk<number, string>(1));
    const or2: Result<number, string> = result.or<string>(createErr<number, string>(''));
    const orElse1: Result<number, string> = result.orElse<string>((_: void) =>
        createOk<number, string>(1)
    );
    const orElse2: Result<number, string> = result.orElse<string>((_: void) =>
        createErr<number, string>('')
    );

    const unwrap: number = result.unwrap();
    const unwrapErr: void = result.unwrapErr();
    const unwrapOr: number = result.unwrapOr(1);
    const unwrapOrElse: number = result.unwrapOrElse((_: void) => 1);
    const expect: number = result.expect('');

    result.drop();
    result.drop((_: number) => {});
    result.drop(
        (_: number) => {},
        (_: void) => {}
    );

    if (result instanceof ResultBase) {
        const bar: any = null;
    }
})();

//  Result<T, E>
(function () {
    let option: Result<void, void> = createErr<void, void>(undefined);
    option = createOk<void, void>(undefined);

    let option2: Result<void, void> = createOk<void, void>(undefined);
    option2 = createErr<void, void>(undefined);
})();
