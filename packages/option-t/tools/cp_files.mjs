import * as assert from 'node:assert/strict';
import fs from 'node:fs/promises';
import path from 'node:path';
import { parseArgs } from 'node:util';

import { getAllGlobMatchedFiles } from './glob.mjs';
import { createSourceToDestinationMapList, prepareToCreateFile } from './fs_helper.mjs';

async function copyFile(source, dest, { isDebug: _isDebug, isVerbose: _isVerbose }) {
    await prepareToCreateFile(dest);
    const copying = fs.copyFile(source, dest);
    return copying;
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
        const processing = copyFile(source, dest, {
            isDebug,
            isVerbose,
        });
        result.push(processing);
    }

    await Promise.all(result);
})();
