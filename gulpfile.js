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

'use strict';

const gulp = require('gulp');
const path = require('path');

const { getSuffixedCommandName } = require('./tools/platform');
const { spawnChildProcess, assertReturnCode } = require('./tools/spawn');

const NPM_MOD_DIR = path.resolve(__dirname, './node_modules/');
const CWD = path.relative(__dirname, '');

/**
 *  @param  {string}    cmd
 *  @param  {Array<string>} args
 *  @return     {PromiseLike<number>}
 */
function execNpmCmd(cmd, args) {
    const command = getSuffixedCommandName(cmd);
    const bin = path.resolve(NPM_MOD_DIR, '.bin', command);
    const option = {
        cwd: CWD,
        stdio: 'inherit',
    };
    return spawnChildProcess(bin, args, option).then(assertReturnCode);
}

/**
 *  @param  {string}    taskname
 *  @param  {Array<string>} args
 *  @return     {PromiseLike<number>}
 */
function execMakeTask(taskname, args) {
    const option = {
        cwd: CWD,
        stdio: 'inherit',
    };
    return spawnChildProcess('make', [taskname, ...args], option).then(assertReturnCode);
}

/**
 *  Clean
 */
gulp.task('clean', ['clean_build', 'clean_test_cache', 'clean_type_test', 'clean_tmp_mjs']);
gulp.task('clean_build', ['clean_build_cjs', 'clean_build_esm', 'clean_build_mixedlib']);
gulp.task('clean_build_cjs', () => execMakeTask('__clean_build_cjs', []));
gulp.task('clean_build_esm', () => execMakeTask('__clean_build_esm', []));
gulp.task('clean_build_mixedlib', () => execMakeTask('__clean_build_mixedlib', []));
gulp.task('clean_test_cache', () => execMakeTask('__clean_test_cache', []));
gulp.task('clean_type_test', () => execMakeTask('__clean_type_test', []));
gulp.task('clean_tmp_mjs', () => execMakeTask('__clean_tmp_mjs', []));


/**
 *  Build
 */
gulp.task('build', () => execMakeTask('build', []));

/**
 *  Test
 */

gulp.task('test', ['lint', 'build', 'mocha', 'typetest']);
gulp.task('mocha', ['test_preprocess', 'build'], () => {
    const p = execMakeTask('__mocha', []);
    return p;
});
gulp.task('run_mocha', [], () => {
    const p = execMakeTask('run_mocha', []);
    return p;
});
gulp.task('typetest', ['clean_type_test', 'build'], () => {
    const p = execMakeTask('tscheck', []);
    return p;
});
gulp.task('test_preprocess', ['clean_test_cache'], () => {
    const p = execMakeTask('__test_preprocess', []);
    return p;
});
gulp.task('lint', () => {
    const p = execMakeTask('lint', []);
    return p;
});
