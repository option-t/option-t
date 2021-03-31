import { createSome, createNone, Option as PlainOption, isSome } from '../PlainOption/Option';
import { unwrapOption } from '../PlainOption/unwrap';

import { ClassicOption, createClassicNone, createClassicSome } from './ClassicOption';

export function compatToPlainOption<T>(classic: ClassicOption<T>): PlainOption<T> {
    if (classic.isSome) {
        const val: T = classic.unwrap();
        const r = createSome<T>(val);
        return r;
    } else {
        const r = createNone();
        return r;
    }
}

export function compatToClassicOption<T>(plain: PlainOption<T>): ClassicOption<T> {
    if (isSome(plain)) {
        const val: T = unwrapOption(plain);
        const r = createClassicSome<T>(val);
        return r;
    } else {
        const r = createClassicNone<T>();
        return r;
    }
}
