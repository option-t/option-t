import test from 'ava';

import { createRequire } from 'node:module';
const require = createRequire(import.meta.url);

import { EXPOSED_PATH_LIST } from './exposed_path_table.mjs';

const ImportType = Object.freeze({
    Both: 'both',
    CJS: 'cjs',
    ESM: 'esm',
});

const testcaseList = EXPOSED_PATH_LIST.map((pathname) => {
    let type;
    if (pathname === '.') {
        type = ImportType.Both;
    } else if (pathname.startsWith('./cjs/')) {
        type = ImportType.CJS;
    } else if (pathname.startsWith('./esm/')) {
        type = ImportType.ESM;
    } else if (pathname.startsWith('./lib/')) {
        type = ImportType.Both;
    } else {
        type = ImportType.Both;
    }

    const input = pathname.replace(/^./u, 'option-t');

    return {
        type,
        raw: pathname,
        input,
    };
});

const MSG_FAIL_TO_IMPORT_ESM = 'Fail to import as ESM';
const MSG_FAIL_TO_IMPORT_CJS = 'Fail to import as CJS';

for (const { type, input } of testcaseList) {
    test(input, async (t) => {
        let actual = null;
        switch (type) {
            case ImportType.Both: {
                t.plan(4);
                let esmActual;
                await t.notThrowsAsync(async () => {
                    esmActual = await import(input);
                }, MSG_FAIL_TO_IMPORT_ESM);

                let cjsActual;
                t.notThrows(() => {
                    cjsActual = require(input);
                }, MSG_FAIL_TO_IMPORT_CJS);
                t.deepEqual(
                    Object.keys(esmActual),
                    Object.keys(cjsActual),
                    'esm and cjs should has same named items'
                );
                actual = esmActual;
                break;
            }
            case ImportType.ESM: {
                t.plan(2);
                await t.notThrowsAsync(async () => {
                    actual = await import(input);
                }, MSG_FAIL_TO_IMPORT_ESM);
                break;
            }
            case ImportType.CJS: {
                t.plan(2);
                t.notThrows(() => {
                    actual = require(input);
                }, MSG_FAIL_TO_IMPORT_CJS);
                break;
            }
            default:
                t.fail(`with unknown type: ${type}`);
                return;
        }

        t.snapshot(Object.keys(actual), 'should match expected exported items');
    });
}
