export {
    Result,
    Ok,
    Err,
    MutOk,
    MutErr,
    createOk,
    createErr,
} from './Result';

export { andForResult as and } from './and';
export { andThenForResult as andThen } from './andThen';
export { asMutResult as asMut } from './asMut';
export {
    doOnOk as do,
    doOnErr as doErr,
} from './do';
export {
    expectIsOk as expect,
    expectIsErr as expectErr,
 } from './expect';
export { mapForResult as map } from './map';
export { mapErrForResult as mapErr } from './mapErr';
export { orResult as or } from './or';
export { orElseForResult as orElse } from './orElse';
export {
    toOptionFromOk,
    toOptionFromErr,
} from './toOption';
export {
    unwrapFromResult as unwrap,
    unwrapErrFromResult as unwrapErr,
} from './unwrap';
export { unwrapOrFromResult as unwrapOr } from './unwrapOr';
export { unwrapOrElseFromResult as unwrapOrElse } from './unwrapOrElse';
