'use strict';

const assert = require('assert');
const fs = require('fs').promises;
const path = require('path');

async function* getAllDescendantFiles(subrootDir) {
    const children = await fs.readdir(subrootDir, {
        encoding: 'utf8',
        withFileTypes: true,
    });

    for (const dirent of children) {
        const fullpath = path.resolve(subrootDir, dirent.name);
        if (dirent.isFile()) {
            yield fullpath;
            continue;
        }

        if (dirent.isDirectory()) {
            yield* getAllDescendantFiles(fullpath);
            continue;
        }

        continue;
    }
}

function parseJSON(text) {
    try {
        const o = JSON.parse(text);
        return o;
    }
    catch (_e) {
        return null;
    }
}

async function testExpectedFilesInDistDir(expectedSet, fileIter) {
    const notFoundInExpected = [];
    for await (const actual of fileIter) {
        const fileIsInExpected = expectedSet.has(actual);
        if (fileIsInExpected) {
            expectedSet.delete(actual);
        } else {
            notFoundInExpected.push(actual);
        }
    }

    assert.deepStrictEqual([], Array.from(expectedSet), 'Expected files should be all in the package');
    assert.deepStrictEqual([], notFoundInExpected, 'unexpected files should not be included by the package');
}

(async function main() {
    const OUTDIR = process.env.OUTDIR;
    assert.strictEqual(typeof OUTDIR, 'string', '$OUTDIR envvar should be string');

    const json = await fs.readFile(path.resolve(__dirname, './pkg_files.json'), {
        encoding: 'utf8',
        flag: 'r',
    });
    const files = parseJSON(json);
    assert.notStrictEqual(files, null, 'Fail to parse the file list snapshot');

    const EXPECTED_FILE_SET = new Set(files.map((filename) => {
        const fullpath = path.resolve(OUTDIR, filename);
        return fullpath;
    }));
    assert.notStrictEqual(EXPECTED_FILE_SET.size, 0, 'The expected file list must not be empty');

    await testExpectedFilesInDistDir(EXPECTED_FILE_SET, getAllDescendantFiles(OUTDIR));
})().catch((e) => {
    console.error(e);
    process.exit(1);
});
