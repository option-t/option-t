import { mapForMaybe } from '../Maybe/map';
import { mapOrForMaybe } from '../Maybe/mapOr';
import { Maybe } from '../Maybe/Maybe';

export function isDeprecated(p: Maybe<NodeJS.Process>, caller: string, alternative: string): void {
    const env = mapForMaybe(p, (p) => p.env);
    const isPrd = mapOrForMaybe(env, false, (env) => {
        return (env.NODE_ENV === 'production');
    });

    if (isPrd) {
        const msg = `This ${caller} has been deprecated. Please use ${alternative}.`;
        // eslint-disable-next-line no-undef
        if (!!console.warn) {
            // eslint-disable-next-line no-undef
            console.warn(msg);
        }
        else {
            // eslint-disable-next-line no-undef
            console.log(msg);
        }
    }
}
