export {
    Result,
    Ok,
    Err,
    createOk,
    createErr,
    isOk,
    isErr,
} from './Result';

export { andForResult as and } from './and';
export { andThenForResult as andThen } from './andThen';
export {
    expectIsOk as expect,
    expectIsErr as expectErr,
} from './expect';
export { mapForResult as map } from './map';
export { mapOrElseForResult as mapOrElse } from './mapOrElse';
export { mapErrForResult as mapErr } from './mapErr';
export { orForResult as or } from './or';
export { orElseForResult as orElse } from './orElse';
export {
    tapOk,
    tapErr,
    tapBoth,
} from './tap';
export { transposeForResult as transpose } from './transpose';
export {
    toOptionFromOk,
    toOptionFromErr,
    toOptionFromOk as ok,
    toOptionFromErr as err,
} from './toOption';
export {
    unwrapFromResult as unwrap,
    unwrapErrFromResult as unwrapErr,
} from './unwrap';
export { unwrapOrFromResult as unwrapOr } from './unwrapOr';
export { unwrapOrElseFromResult as unwrapOrElse } from './unwrapOrElse';
