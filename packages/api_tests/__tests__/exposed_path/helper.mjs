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

/**
 *  @param {import('ava').TestFn} test
 *  @param {Array<string>} pathList
 *  @returns    {void}
 */
export function testImportExposedPath(test, pathList) {
    assert.ok(Array.isArray(pathList));
    assert.ok(pathList.length > 0);

    const testcaseList = pathList.map(pathToNormalizedImport);
    for (const { input } of testcaseList) {
        test(input, async (t) => {
            let actual;
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

        assert.ok(process.features.require_module, 'require(esm) is not enabled');

        // This workaround the following errors that happens on (at least) Node.js v25.2.1
        //
        //  > ERR_INTERNAL_ASSERTION
        //  > Unexpected module status 0. Cannot require() ES Module <actual_file_name> because it is not yet fully loaded.
        //  > This may be caused by a race condition if the module is simultaneously dynamically import()-ed via Promise.all().
        //  > Try await-ing the import() sequentially in a loop instead.
        //  >  (From packages/api_tests/__tests__/exposed_path/helper.mjs in non-loader-hook thread)
        //  > This is caused by either a bug in Node.js or incorrect usage of Node.js internals.
        //
        // avajs runs all `test()` concurrently as possible.
        // This means that all of importing process in this failured tests might works concurrently.
        // I guess that this internal failure would be happen if some tests that runs previously
        // but does not completed would touch a same module.
        test.serial(
            `same module is loaded if module system recognize 'module-sync': ${input}`,
            async (t) => {
                const viaRequire = require(input);
                const viaImport = await import(input);
                t.deepEqual(
                    viaRequire,
                    viaImport,
                    'should be loaded the same module object for the same path',
                );
            },
        );
    }
}
