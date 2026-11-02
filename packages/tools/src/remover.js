import * as assert from 'node:assert/strict';
import * as fs from 'node:fs/promises';
import * as path from 'node:path';

export function parseArgs(process) {
    const argSet = new Set(process.argv);
    const isDryRun = argSet.has('--dry-run');
    const isForce = argSet.has('--force');
    const isVerbose = argSet.has('--verbose');

    return {
        isDryRun,
        isForce,
        isVerbose,
    };
}

export function getTargetFromArgv(process) {
    const argv = process.argv.slice(2); // eslint-disable-line no-magic-numbers
    const target = argv[0];
    if (!target) {
        throw new Error('no target');
    }
    return target;
}

export async function deleteAsync(
    targetList,
    { cwd = process.cwd(), isVerbose = false, isDryRun = false, isForce = false },
) {
    assert.ok(Array.isArray(targetList));

    const fullpathList = targetList.map((target) => {
        if (path.isAbsolute(target)) {
            return target;
        }

        const fullpath = path.resolve(cwd, target);
        return fullpath;
    });
    const jobs = fullpathList.map((target) => {
        const ops = deleteFile({
            target,
            isVerbose,
            isDryRun,
            isForce,
        });
        return ops;
    });
    const completed = await Promise.allSettled(jobs);

    const result = [];
    const errors = [];
    for (const job of completed) {
        switch (job.status) {
            case 'fulfilled':
                result.push(job.value);
                break;
            case 'rejected':
                errors.push(job.reason);
                break;
            default:
                throw new RangeError(`${job.status}`);
        }
    }

    const e = errors.length > 0 ? new AggregateError(errors, 'fail to remove') : null;
    return [result, e];
}

export async function deleteFile({ target, isVerbose = false, isDryRun = false, isForce = false }) {
    assert.ok(path.isAbsolute(target), 'filepath must be absolute.');

    try {
        await fs.stat(target);
    } catch {
        if (isVerbose) {
            console.log(`there is no ${target}`);
        }
        return target;
    }

    if (isDryRun) {
        return target;
    }

    await fs.rm(target, {
        force: isForce,
        recursive: true,
    });

    return target;
}

/**
 *  @param {NodeJS.Process} process
 *  @returns    {Promise<void>}
 */
export async function runDefault(process) {
    const { isDryRun, isForce, isVerbose } = parseArgs(process);
    const target = getTargetFromArgv(process);

    const targetAbsPath = path.resolve(process.cwd(), target);

    const deleted = await deleteFile({
        target: targetAbsPath,
        isDryRun,
        isVerbose,
        isForce,
    });

    console.log('Deleted files:\n', deleted);
}
