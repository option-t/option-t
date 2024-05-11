import * as assert from 'node:assert/strict';
import { createRequire } from 'node:module';
const require = createRequire(import.meta.url);

const PACKAGE_NAME = 'option-t';

function pathToNormalizedImport(pathname) {
    const input = pathname.replace(/^./u, PACKAGE_NAME);

    return {
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
    for (const { input } of testcaseList) {
        test(input, async (t) => {
            let actual = null;
            {
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
                    'esm and cjs should has same named items',
                );
                actual = esmActual;
            }

            t.snapshot(actual, 'should match expected exported items');
        });
    }
}
