import * as fs from 'node:fs/promises';
import * as path from 'node:path';

export async function getAllGlobMatchedFiles(rootDir, globPattern) {
    const matched = fs.glob(globPattern, {
        cwd: rootDir,
        withFileTypes: true,
    });

    const result = [];
    for await (const entry of matched) {
        if (!entry.isFile() && !entry.isDirectory()) {
            continue;
        }

        const filename = entry.name;
        const parentPath = entry.parentPath;
        const fullFilepath = path.join(parentPath, filename);

        result.push(fullFilepath);
    }

    return result;
}
