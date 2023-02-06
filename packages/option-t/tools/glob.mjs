import * as fs from 'node:fs/promises';
import * as path from 'node:path';

import picomatch from 'picomatch';

async function* getAllEntriesInDirectory(rootDir) {
    const files = await fs.readdir(rootDir, {
        withFileTypes: true,
    });

    for (const file of files) {
        const filename = file.name;
        const fullFilepath = path.join(rootDir, filename);

        if (file.isFile()) {
            yield fullFilepath;
        }
        else if (file.isDirectory()) {
            yield fullFilepath;
            yield* getAllEntriesInDirectory(fullFilepath);
        } else {
            // Othe type is not supported.
            continue;
        }
    }
}

export async function getAllGlobMatchedFiles(rootDir, globPattern) {
    const isMatch = picomatch(globPattern);
    const result = [];
    for await (const file of getAllEntriesInDirectory(rootDir)) {
        if (!isMatch(file)) {
            continue;
        }

        result.push(file);
    }

    return result;
}
