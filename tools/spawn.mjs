import * as childProcess from 'child_process';

/**
 *  Spawn a child process.
 *
 *  @param  {string}    bin
 *      the same as the 1st argument of `child_process.spawn()`.
 *  @param  {Array}     args
 *      the same as the 2nd argument of `child_process.spawn()`.
 *  @param  {Object}    option
 *      the same as the 3rd argument of `child_process.spawn()`.
 *
 *  @return {!PromiseLike<number>}
 */
export function spawnChildProcess(bin, args, option) {
    const result = spawnCancelableChild(bin, args, option);
    return result.process;
}

/**
 *  Spawn a child process with the canceller function.
 *
 *  XXX: This should be implemented with using a cancelable promise.
 *
 *  @param  {string}    bin
 *      the same as the 1st argument of `child_process.spawn()`.
 *  @param  {Array}     args
 *      the same as the 2nd argument of `child_process.spawn()`.
 *  @param  {Object}    option
 *      the same as the 3rd argument of `child_process.spawn()`.
 *
 *  @return { !{ process: !PromiseLike<number>, canceller: !function(): void, } }
 *      - `process`: This is fulfilled with the process's exit status.
 *      - `canceller`: try to cancel the process if you call this.
 */
export function spawnCancelableChild(bin, args, option) {
    let innerCancel = null;
    let isCanceled = false;
    const canceller = function () {
        if (isCanceled) {
            return;
        }

        isCanceled = true;
        if (typeof innerCancel === 'function') {
            innerCancel();
        }
    };

    const process = new Promise(function (resolve, reject) {
        if (isCanceled) {
            reject();
            return;
        }

        console.log('spawn: ' + bin + ' ' + args.join(' '));
        const proc = childProcess.spawn(bin, args, option);
        innerCancel = function () {
            proc.kill('SIGINT');
        };

        proc.on('exit', function (status) {
            resolve(status);
        });
    });

    return {
        canceller,
        process,
    };
}

/**
 *  @param  {number}    status
 *      the process's exit status.
 *  @return {!PromiseLike<number>}
 */
export function assertReturnCode(status) {
    return (status === 0) ?
        Promise.resolve(status) :
        Promise.reject(status);
}
