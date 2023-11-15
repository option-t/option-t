import * as assert from 'node:assert/strict';
import fs from 'node:fs/promises';
import path from 'node:path';
import { parseArgs } from 'node:util';

import { reflinkFile } from '@reflink/reflink';

import { createSourceToDestinationMapList, prepareToCreateFile } from './fs_helper.mjs';
import { getAllGlobMatchedFiles } from './glob.mjs';

// eslint-disable-next-line no-bitwise
const FS_FILE_COPY_MODE = fs.constants.COPYFILE_EXCL | fs.constants.COPYFILE_FICLONE;
const IS_DARWIN = process.platform === 'darwin';

async function copyFile(source, dest) {
    // libuv still lack the support for this kind of modern file operation.
    //  - https://github.com/libuv/libuv/issues/2936
    //
    // To such enhancment operation, we use pnpm's alternative approach.
    //  - https://github.com/pnpm/pnpm/issues/5001
    //  - https://github.com/pnpm/pnpm/pull/7031
    //
    // But their relink implementation still has some issues.
    // We use this approach only for APFS.
    //  - https://github.com/pnpm/pnpm/issues/7186
    if (IS_DARWIN) {
        await reflinkFile(source, dest);
    } else {
        await fs.copyFile(source, dest, FS_FILE_COPY_MODE);
    }
}

async function copyFileOperation(source, dest, { isDebug: _isDebug, isVerbose: _isVerbose }) {
    await prepareToCreateFile(dest);
    await copyFile(source, dest);
}

function parseCliOptions() {
    const options = {
        verbose: {
            type: 'boolean',
        },
        debug: {
            type: 'boolean',
        },
        basedir: {
            type: 'string',
        },
        source: {
            type: 'string',
        },
        destination: {
            type: 'string',
        },
    };

    const { values } = parseArgs({
        options,
        strict: true,
    });

    const isVerbose = !!values.verbose;
    const isDebug = !!values.debug;

    const baseDir = values.basedir;
    assert.ok(!!baseDir, 'no baseDir');

    const source = values.source;
    assert.ok(!!source, 'no source');

    const destinationDir = values.destination;
    assert.ok(!!destinationDir, 'no destinationDir');

    return {
        isVerbose,
        isDebug,
        baseDir,
        source,
        destinationDir,
    };
}

(async function main() {
    const { isVerbose, isDebug, baseDir, source, destinationDir } = parseCliOptions();

    const baseDirFullPath = path.resolve(process.cwd(), baseDir);
    const sourceList = await getAllGlobMatchedFiles(baseDirFullPath, source);
    if (isDebug) {
        console.dir(sourceList);
    }

    const pairList = await createSourceToDestinationMapList(baseDir, sourceList, destinationDir);
    if (isVerbose) {
        const debug = pairList.map(({ source, dest }) => {
            return `${source} -> ${dest}`;
        });
        console.log(debug.join('\n'));
    }
    if (isVerbose) {
        const debug = pairList.map(({ source, dest }) => {
            return `${source} -> ${dest}`;
        });
        console.log(debug.join('\n'));
    }

    const result = [];
    for (const { source, dest } of pairList) {
        const processing = copyFileOperation(source, dest, {
            isDebug,
            isVerbose,
        });
        result.push(processing);
    }

    await Promise.all(result);
})();
