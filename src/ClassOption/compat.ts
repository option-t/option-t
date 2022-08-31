import { createSome, createNone, Option as PlainOption, isSome } from '../PlainOption/Option.js';
import { unwrapOption } from '../PlainOption/unwrap.js';

import { ClassicOption, createClassicNone, createClassicSome } from './ClassicOption.js';

export function compatToPlainOption<T>(classic: ClassicOption<T>): PlainOption<T> {
    if (classic.isSome) {
        const val: T = classic.unwrap();
        const result = createSome<T>(val);
        return result;
    }

    const result = createNone();
    return result;
}

export function compatToClassicOption<T>(plain: PlainOption<T>): ClassicOption<T> {
    if (isSome(plain)) {
        const val: T = unwrapOption(plain);
        const result = createClassicSome<T>(val);
        return result;
    }

    const result = createClassicNone<T>();
    return result;
}
