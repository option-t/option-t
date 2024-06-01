import * as vm from 'node:vm';

/**
 *  @param  {import('ava').Assertions}    t
 */
export function getCrossRealmErrorConstructor(t) {
    t.assert(t, `should pass ava's Assertions`);

    const vmContext = vm.createContext();
    const crossRealmErrorCtor = vm.runInNewContext('globalThis.Error', vmContext);
    t.assert(
        typeof crossRealmErrorCtor === 'function',
        'could not get cross-realm `Error` consturctor',
    );
    return crossRealmErrorCtor;
}
