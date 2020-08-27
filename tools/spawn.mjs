/**
 * MIT License
 *
 * Copyright (c) 2017- Tetsuharu OHZEKI <saneyuki.snyk@gmail.com>
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
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
