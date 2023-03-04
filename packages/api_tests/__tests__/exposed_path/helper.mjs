import * as assert from 'node:assert/strict';
import { createRequire } from 'node:module';
const require = createRequire(import.meta.url);

const ImportType = Object.freeze({
    Both: 'both',
    CJS: 'cjs',
    ESM: 'esm',
});

const PACKAGE_NAME = 'option-t';

function pathToNormalizedImport(pathname) {
    let type;
    if (pathname === '.') {
        type = ImportType.Both;
    } else if (pathname.startsWith('./cjs/')) {
        type = ImportType.CJS;
    } else if (pathname.startsWith('./esm/')) {
        type = ImportType.ESM;
    } else {
        type = ImportType.Both;
    }

    const input = pathname.replace(/^./u, PACKAGE_NAME);

    return {
        type,
        raw: pathname,
        input,
    };
}

const MSG_FAIL_TO_IMPORT_ESM = 'Fail to import as ESM';
const MSG_FAIL_TO_IMPORT_CJS = 'Fail to import as CJS';

export function testImportExposedPath(test, pathList) {
    assert.ok(Array.isArray(pathList));
    assert.ok(pathList.length > 0);

    const testcaseList = pathList.map(pathToNormalizedImport);
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
}
