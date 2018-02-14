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

const DIST_ESM_DIR = path.resolve(__dirname, './esm/');
const DIST_COMMONJS_DIR = path.resolve(__dirname, './cjs/');
const DIST_MIXED_LIB_DIR = path.resolve(__dirname, './lib/');
const TEST_CACHE_DIR = path.resolve(__dirname, './__test_cache/');
const TYPE_TEST_DIR = path.resolve(__dirname, './__type_test/');
const TMP_MJS_DIR = path.resolve(__dirname, './__tmp_mjs/');

const IS_IN_CI = process.env.CI === 'true';

const BABEL_CMD = 'babel';
const CPX_CMD = 'cpx';
const DEL_CMD = 'del';
const ESLINT_CMD = 'eslint';
const TSLINT_CMD = 'tslint';
const MOCHA_CMD = 'mocha';
const RENAME_CMD = 'rename';
const TSC_CMD = 'tsc';

const BABEL_PRD_TRANSFORMER_LIST = ['transform-es2015-block-scoping'];

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
gulp.task('clean_build', ['clean_build_cjs', 'clean_build_esm', 'clean_build_mixedlib']);
gulp.task('clean_build_cjs', () => execNpmCmd(DEL_CMD, [DIST_COMMONJS_DIR]));
gulp.task('clean_build_esm', () => execNpmCmd(DEL_CMD, [DIST_ESM_DIR]));
gulp.task('clean_build_mixedlib', () => execNpmCmd(DEL_CMD, [DIST_MIXED_LIB_DIR]));
gulp.task('clean_test_cache', () => execNpmCmd(DEL_CMD, [TEST_CACHE_DIR]));
gulp.task('clean_type_test', () => execNpmCmd(DEL_CMD, [TYPE_TEST_DIR]));
gulp.task('clean_tmp_mjs', () => execNpmCmd(DEL_CMD, [TMP_MJS_DIR]));


/**
 *  Build
 */
gulp.task('build', ['build_cjs', 'build_esm', 'build_mixedlib']);

gulp.task('build_cjs', ['build_cjs_js', 'build_cjs_type_definition', 'build_cjs_ts']);
gulp.task('build_cjs_js', ['clean_build_cjs'], () => {
    const p = execNpmCmd(BABEL_CMD, [
        './src',
        '--out-dir', './cjs/',
        '--extensions=.js',
        '--no-babelrc',
        '--plugins', ['transform-es2015-modules-commonjs', ...BABEL_PRD_TRANSFORMER_LIST].join(','),
    ]);
    return p;
});
gulp.task('build_cjs_type_definition', ['clean_build_cjs'], () => {
    const p = execNpmCmd(CPX_CMD, [
        './src/**/*.d.ts',
        './cjs',
        '--preserve',
    ]);
    return p;
});
gulp.task('build_cjs_ts', ['clean_build_cjs'], () => {
    const p = execNpmCmd(TSC_CMD, [
        '-p', './tsconfig_cjs.json',
    ]);
    return p;
});

gulp.task('build_esm', ['build_esm_js', 'build_esm_ts', 'build_mjs_cp_mjs_to_esm']);
gulp.task('build_esm_js', ['clean_build_esm'], () => {
    const dts = execNpmCmd(CPX_CMD, [
        './src/**/*.d.ts',
        './esm/',
        '--preserve',
    ]);

    const js = execNpmCmd(BABEL_CMD, [
        './src',
        '--out-dir', DIST_ESM_DIR,
        '--extensions=.js',
        '--no-babelrc',
        '--plugins', BABEL_PRD_TRANSFORMER_LIST
    ]);

    return Promise.all([dts, js]);
});
gulp.task('build_esm_ts', ['clean_build_esm'], () => {
    const p = execNpmCmd(TSC_CMD, [
        '-p', './tsconfig_esm.json',
    ]);
    return p;
});
gulp.task('build_mjs_cp_mjs_to_esm', ['build_mjs_rename_js_to_mjs'], () => {
    const js = execNpmCmd(CPX_CMD, [
        TMP_MJS_DIR + '/**/*.mjs',
        DIST_ESM_DIR,
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
        '-p', './tsconfig_esm.json',
        '--outDir', TMP_MJS_DIR,
        '--declaration', 'false'
    ]);

    const js = execNpmCmd(BABEL_CMD, [
        './src',
        '--out-dir', TMP_MJS_DIR,
        '--extensions=.js',
        '--no-babelrc',
        '--plugins', BABEL_PRD_TRANSFORMER_LIST,
    ]);

    return Promise.all([ts, js]);
});

gulp.task('build_mixedlib', ['build_mixedlib_cp_mjs', 'build_mixedlib_cp_cjs', 'build_mixedlib_cp_dts']);
gulp.task('build_mixedlib_cp_mjs', ['build_esm', 'clean_build_mixedlib'], () => {
    const js = execNpmCmd(CPX_CMD, [
        DIST_ESM_DIR + '/**/*.mjs',
        DIST_MIXED_LIB_DIR,
        '--preserve',
    ]);
    return js;
});
gulp.task('build_mixedlib_cp_cjs', ['build_cjs', 'clean_build_mixedlib'], () => {
    const js = execNpmCmd(CPX_CMD, [
        DIST_COMMONJS_DIR + '/**/*.js',
        DIST_MIXED_LIB_DIR,
        '--preserve',
    ]);
    return js;
});
gulp.task('build_mixedlib_cp_dts', ['build_esm', 'clean_build_mixedlib'], () => {
    const js = execNpmCmd(CPX_CMD, [
        DIST_ESM_DIR + '/**/*.d.ts',
        DIST_MIXED_LIB_DIR,
        '--preserve',
    ]);
    return js;
});


/**
 *  Test
 */

function runMocha(base) {
    const reporter = IS_IN_CI ? 'spec' : 'nyan';

    const p = execNpmCmd(MOCHA_CMD, [
        '--recursive', `./${base}/**/test_*.js`,
        '--reporter', reporter,
    ]);
    return p;
}

gulp.task('test', ['lint', 'build', 'mocha', 'typetest']);
gulp.task('mocha', ['test_preprocess', 'build'], () => {
    return runMocha('__test_cache');
});
gulp.task('run_mocha', [], () => {
    return runMocha('test');
});
gulp.task('typetest', ['clean_type_test', 'build'], () => {
    const p = execNpmCmd(TSC_CMD, [
        '-p', './tsconfig_test.json',
    ]);
    return p;
});
gulp.task('test_preprocess', ['clean_test_cache'], () => {
    const p = execNpmCmd(BABEL_CMD, [
        './test',
        '--out-dir', './__test_cache/',
        '--extensions=.js',
        '--presets', 'power-assert',
    ]);
    return p;
});
gulp.task('lint', ['eslint', 'tslint']);
gulp.task('eslint', () => {
    const p = execNpmCmd(ESLINT_CMD, [
        '.',
        './**/.eslintrc.js',
        ' --ext', '.js',
        '--fix'
    ]);
    return p;
});
gulp.task('tslint', () => {
    const p = execNpmCmd(TSLINT_CMD, [
        '--config', path.join(CWD, './tslint.json'),
        path.join(CWD, './src/**/*.ts{,x}'),
    ]);
    return p;
});
