import * as fs from 'node:fs/promises';
import * as path from 'node:path';

import test from 'ava';

const TARGET_DIR = process.env.TARGET_DIR;

test('TARGET_DIR envvar should be set', (t) => {
    t.not(TARGET_DIR, undefined, 'should be set');
    t.true(path.isAbsolute(TARGET_DIR), 'should be the absolute path');
});

test('contains all expected files', async (t) => {
    const iter = getAllDescendantFiles(TARGET_DIR);
    const files = await toArrayFromAsyncIterable(iter);
    t.assert(files.length > 0);

    const prefixPattern = new RegExp(`${TARGET_DIR}/`, 'u');
    const removed = files.map((filepath) => {
        const replaced = filepath.replace(prefixPattern, '');
        return replaced;
    });
    const sorted = removed.sort();
    t.snapshot(sorted);
});

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

async function toArrayFromAsyncIterable(asyncIter) {
    const result = [];
    for await (const file of asyncIter) {
        result.push(file);
    }
    return result;
}
