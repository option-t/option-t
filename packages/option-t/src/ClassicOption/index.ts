export {
    type ClassicTryTransformFn,
    type ClassicTryRecoveryFn,
    ClassicOptionBase,
    type ClassicOption,
    createClassicSome,
    createClassicNone,
    ClassicSomeConstructor,
    ClassicNoneConstructor,
} from './classic_option.js';

export {
    compatToClassicOption,
    compatToPlainOption,
    compatToClassicOptionFromNullable,
    compatToNullableFromClassicOption,
    compatToClassicOptionFromUndefinable,
    compatToUndefinableFromClassicOption,
    compatToClassicOptionFromMaybe,
} from './compat.js';

import {
    type ClassicTryTransformFn,
    type ClassicTryRecoveryFn,
    type ClassicOption,
    ClassicOptionBase,
    createClassicSome,
    createClassicNone,
    ClassicSomeConstructor,
    ClassicNoneConstructor,
} from './classic_option.js';

/**
 *  @deprecated
 *  Use {@link ClassicTryTransformFn}.
 *  We'll remove this alias in v34 or later.
 */
export type FlatmapFn<T, U> = ClassicTryTransformFn<T, U>;

/**
 *  @deprecated
 *  Use {@link ClassicTryRecoveryFn}.
 *  We'll remove this alias in v34 or later.
 */
export type MayRecoveryFn<T> = ClassicTryRecoveryFn<T>;

/**
 *  @deprecated
 *  Use {@link ClassicOptionBase}.
 *  We'll remove this alias in v34 or later.
 */
// eslint-disable-next-line @typescript-eslint/naming-convention
export const OptionBase: typeof ClassicOptionBase = ClassicOptionBase;

/**
 *  @deprecated
 *  Use {@link ClassicOption}.
 *  We'll remove this alias in v34 or later.
 */
export type Option<T> = ClassicOption<T>;

/**
 *  @deprecated
 *  Use {@link createClassicSome}.
 *  We'll remove this alias in v34 or later.
 */
export const createSome: typeof createClassicSome = createClassicSome;

/**
 *  @deprecated
 *  Use {@link createClassicNone}.
 *  We'll remove this alias in v34 or later.
 */
export const createNone: typeof createClassicNone = createClassicNone;

/**
 *  @deprecated
 *  Use {@link ClassicSomeConstructor}.
 *  We'll remove this alias in v34 or later.
 */
// eslint-disable-next-line @typescript-eslint/naming-convention
export const Some: typeof ClassicSomeConstructor = ClassicSomeConstructor;

/**
 *  @deprecated
 *  Use {@link ClassicNoneConstructor}.
 *  We'll remove this alias in v34 or later.
 */
// eslint-disable-next-line @typescript-eslint/naming-convention
export const None: typeof ClassicNoneConstructor = ClassicNoneConstructor;
