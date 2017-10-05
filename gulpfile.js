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

const DIST_ES6_DIR = path.resolve(__dirname, './es6/');
const DIST_LIB_DIR = path.resolve(__dirname, './lib/');
const TEST_CACHE_DIR = path.resolve(__dirname, './__test_cache/');
const TYPE_TEST_DIR = path.resolve(__dirname, './__type_test/');
const TMP_MJS_DIR = path.resolve(__dirname, './__tmp_mjs/');


const BABEL_CMD = 'babel';
const CPX_CMD = 'cpx';
const DEL_CMD = 'del';
const ESLINT_CMD = 'eslint';
const MOCHA_CMD = 'mocha';
const RENAME_CMD = 'rename';
const TSC_CMD = 'tsc';

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
 *  Clean
 */
gulp.task('clean', ['clean_build', 'clean_test_cache', 'clean_type_test', 'clean_tmp_mjs']);
gulp.task('clean_build', ['clean_build_cjs', 'clean_build_es6']);
gulp.task('clean_build_cjs', () => execNpmCmd(DEL_CMD, [DIST_LIB_DIR]));
gulp.task('clean_build_es6', () => execNpmCmd(DEL_CMD, [DIST_ES6_DIR]));
gulp.task('clean_test_cache', () => execNpmCmd(DEL_CMD, [TEST_CACHE_DIR]));
gulp.task('clean_type_test', () => execNpmCmd(DEL_CMD, [TYPE_TEST_DIR]));
gulp.task('clean_tmp_mjs', () => execNpmCmd(DEL_CMD, [TMP_MJS_DIR]));


/**
 *  Build
 */
gulp.task('build', ['build_cjs', 'build_es6']);

gulp.task('build_cjs', ['build_cjs_js', 'build_cjs_type_definition', 'build_cjs_ts']);
gulp.task('build_cjs_js', ['clean_build_cjs'], () => {
    const p = execNpmCmd(BABEL_CMD, [
        './src',
        '--out-dir', './lib/',
        '--extensions=.js',
        '--no-babelrc',
        '--plugins', 'transform-es2015-modules-commonjs'
    ]);
    return p;
});
gulp.task('build_cjs_type_definition', ['clean_build_cjs'], () => {
    const p = execNpmCmd(CPX_CMD, [
        './src/**/*.d.ts',
        './lib',
        '--preserve',
    ]);
    return p;
});
gulp.task('build_cjs_ts', ['clean_build_cjs'], () => {
    const p = execNpmCmd(TSC_CMD, [
        '-p', './tsconfig_lib.json',
    ]);
    return p;
});

gulp.task('build_es6', ['build_es6_js', 'build_es6_ts', 'build_mjs_cp_mjs_to_es6']);
gulp.task('build_es6_js', ['clean_build_es6'], () => {
    const p = execNpmCmd(CPX_CMD, [
        './src/**/*.{js,d.ts}',
        './es6/',
        '--preserve',
    ]);
    return p;
});
gulp.task('build_es6_ts', ['clean_build_es6'], () => {
    const p = execNpmCmd(TSC_CMD, [
        '-p', './tsconfig_es6.json',
    ]);
    return p;
});
gulp.task('build_mjs_cp_mjs_to_es6', ['build_mjs_rename_js_to_mjs'], () => {
    const js = execNpmCmd(CPX_CMD, [
        TMP_MJS_DIR + '/**/*.mjs',
        DIST_ES6_DIR,
        '--preserve',
    ]);
    return js;
});
gulp.task('build_mjs_rename_js_to_mjs', ['build_mjs_create_tmp_mjs'], () => {
    const p = execNpmCmd(RENAME_CMD, [
        TMP_MJS_DIR + '/**/*.js', '{{f}}.mjs'
    ]);
    return p;
});
gulp.task('build_mjs_create_tmp_mjs', ['clean_tmp_mjs'], () => {
    const ts = execNpmCmd(TSC_CMD, [
        '-p', './tsconfig_es6.json',
        '--outDir', TMP_MJS_DIR,
        '--sourceMap', 'false',
        '--declaration', 'false'
    ]);

    const js = execNpmCmd(CPX_CMD, [
        './src/**/*.js',
        TMP_MJS_DIR,
        '--preserve',
    ]);

    return Promise.all([ts, js]);
});


/**
 *  Test
 */
gulp.task('test', ['lint', 'build', 'mocha', 'typetest']);
gulp.task('mocha', ['test_preprocess', 'build'], () => {
    const p = execNpmCmd(MOCHA_CMD, [
        './__test_cache/manifest.js',
    ]);
    return p;
});
gulp.task('typetest', ['clean_type_test', 'build'], () => {
    const p = execNpmCmd(TSC_CMD, [
        '-p', './tsconfig_test.json',
        '--outDir', './__type_test',
    ]);
    return p;
});
gulp.task('test_preprocess', ['clean_test_cache'], () => {
    const p = execNpmCmd(BABEL_CMD, [
        './test',
        '--out-dir', './__test_cache/',
        '--extensions=.js',
        '--source-maps', 'inline',
    ]);
    return p;
});
gulp.task('lint', () => {
    const p = execNpmCmd(ESLINT_CMD, [
        '.',
        './**/.eslintrc.js',
        ' --ext', '.js',
    ]);
    return p;
});
