import fs from 'fs/promises';
import path from 'path';
import util from 'util';

import globOriginal from 'glob';

import { parseArgs } from './parse_argv.mjs';

const glob = util.promisify(globOriginal);

async function copyFile(
    source,
    dest,
    { isDebug: _isDebug, isVerbose: _isVerbose }
) {
    const sourceStat = await fs.stat(source);
    if (sourceStat.isDirectory()) {
        return null;
    }

    const dirname = path.dirname(dest);

    try {
        await fs.stat(dirname);
    } catch {
        await fs.mkdir(dirname, {
            recursive: true,
        });
    }

    const copying = fs.copyFile(source, dest);
    return copying;
}

const CLI_FLAG_VERBOSE = '--verbose';
const CLI_FLAG_DEBUG = '--debug';
const CLI_FLAG_BASE_DIR = '--basedir';
const CLI_FLAG_SOURCE = '--source';
const CLI_FLAG_DESTINATION = '--destination';

(async function main() {
    const argSet = new Set(process.argv);
    // eslint-disable-next-line no-magic-numbers
    const argv = parseArgs(process.argv.slice(2));

    const isVerbose = argSet.has(CLI_FLAG_VERBOSE);
    const isDebug = argSet.has(CLI_FLAG_DEBUG);
    if (isDebug) {
        console.log(`process.argv: ${JSON.stringify(argv)}`);
    }

    const baseDir = argv.get(CLI_FLAG_BASE_DIR);
    if (!baseDir) {
        throw new Error('no baseDir');
    }

    const source = argv.get(CLI_FLAG_SOURCE);
    if (!source) {
        throw new Error('no source');
    }

    const targetDir = argv.get(CLI_FLAG_DESTINATION);
    if (!targetDir) {
        throw new Error('no target');
    }

    const sourceList = await glob(source, {
        cwd: baseDir,
    });
    if (isDebug) {
        console.dir(sourceList);
    }

    const normalizedDest = path.normalize(targetDir);

    const pairList = [];
    for (const source of sourceList) {
        const normalizedSource = path.normalize(source);
        const actualSourcePath = path.resolve(baseDir, normalizedSource);

        const relativePath = normalizedSource.replace(baseDir, '');
        const dest = path.join(normalizedDest, relativePath);

        const entry = {
            source: actualSourcePath,
            dest,
        };
        pairList.push(entry);
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
