import * as fs from 'node:fs/promises';
import * as path from 'node:path';

export async function createSourceToDestinationMapList(baseDir, sourceList, destinationDir) {
    const normalizedDest = path.normalize(destinationDir);
    const candidate = sourceList.map(async (source) => {
        const normalizedSource = path.normalize(source);
        const actualSourcePath = path.resolve(baseDir, normalizedSource);

        const sourceStat = await fs.stat(actualSourcePath);
        if (sourceStat.isDirectory()) {
            return null;
        }

        const relativePath = normalizedSource.replace(baseDir, '');
        const dest = path.join(normalizedDest, relativePath);

        const entry = {
            source: actualSourcePath,
            dest,
        };

        return entry;
    });

    const candidateItems = await Promise.all(candidate);
    const fileList = candidateItems.filter((entry) => entry !== null);
    return fileList;
}

export async function prepareToCreateFile(filepath) {
    const dirname = path.dirname(filepath);
    try {
        await fs.stat(dirname);
    } catch {
        await fs.mkdir(dirname, {
            recursive: true,
        });
    }
}
