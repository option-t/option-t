NPM_MOD_DIR := $(CURDIR)/node_modules
NPM_BIN := $(NPM_MOD_DIR)/.bin
NPM_CMD := npm

SRC_DIR := $(CURDIR)/src
SRC_TEST_DIR := $(CURDIR)/test

DIST_ESM_DIR := $(CURDIR)/esm
DIST_COMMONJS_DIR := $(CURDIR)/cjs
DIST_MIXED_LIB_DIR := $(CURDIR)/lib
TEST_CACHE_DIR := $(CURDIR)/__test_cache
TYPE_TEST_DIR := $(CURDIR)/__type_test
TMP_MJS_DIR := $(CURDIR)/__tmp_mjs

BABEL_PRD_TRANSFORMER_LIST := transform-es2015-block-scoping

## In CI environment, we should change some configuration
ifeq ($(CI),true)
	MOCHA_REPORTER = spec
else
	MOCHA_REPORTER = nyan
endif


all: help

help:
	@echo "Specify the task"
	@grep -E '^[0-9a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) | awk 'BEGIN {FS = ":.*?## "}; {printf "\033[36m%-30s\033[0m %s\n", $$1, $$2}'
	@exit 1


###########################
# Clean
###########################
.PHONY: clean
clean: __clean_build __clean_test_cache __clean_type_test __clean_tmp_mjs

.PHONY: __clean_build
__clean_build: __clean_build_cjs __clean_build_esm __clean_build_mixedlib
	$(NPM_BIN)/del $(TMP_MJS_DIR)

.PHONY: __clean_build_cjs
__clean_build_cjs:
	$(NPM_BIN)/del $(DIST_COMMONJS_DIR)

.PHONY: __clean_build_esm
__clean_build_esm:
	$(NPM_BIN)/del $(DIST_ESM_DIR)

.PHONY: __clean_build_mixedlib
__clean_build_mixedlib:
	$(NPM_BIN)/del $(DIST_MIXED_LIB_DIR)

.PHONY: __clean_test_cache
__clean_test_cache:
	$(NPM_BIN)/del $(TEST_CACHE_DIR)

.PHONY: __clean_type_test
__clean_type_test:
	$(NPM_BIN)/del $(TYPE_TEST_DIR)

.PHONY: clean_tmp_mjs
__clean_tmp_mjs:
	$(NPM_BIN)/del $(TMP_MJS_DIR)


###########################
# Build
###########################
.PHONY: build
build: build_cjs build_esm build_mixedlib ## Build all targets.

.PHONY: build_cjs
build_cjs: __build_cjs_js __build_cjs_type_definition __build_cjs_ts ## Build `cjs/`.

.PHONY: __build_cjs_js
__build_cjs_js: __clean_build_cjs
	$(NPM_BIN)/babel $(SRC_DIR) \
    --out-dir $(DIST_COMMONJS_DIR) \
    --extensions .js \
    --no-babelrc \
    --plugins transform-es2015-modules-commonjs,$(BABEL_PRD_TRANSFORMER_LIST)

.PHONY: __build_cjs_type_definition
__build_cjs_type_definition: __clean_build_cjs
	$(NPM_BIN)/cpx '$(SRC_DIR)/**/*.d.ts' $(DIST_COMMONJS_DIR) --preserve

.PHONY: __build_cjs_ts
__build_cjs_ts: __clean_build_cjs
	$(NPM_BIN)/tsc --project $(CURDIR)/tsconfig_cjs.json


.PHONY: build_esm
build_esm: __build_esm_js __build_esm_ts __build_mjs_cp_mjs_to_esm ## Build `esm/`.

.PHONY: __build_esm_js
__build_esm_js: __build_esm_js_call_cpx __build_esm_js_call_babel

.PHONY: __build_esm_js_call_cpx
__build_esm_js_call_cpx: __clean_build_esm
	$(NPM_BIN)/cpx '$(SRC_DIR)/**/*.d.ts' $(DIST_ESM_DIR) --preserve

.PHONY: __build_esm_js_call_babel
__build_esm_js_call_babel: __clean_build_esm
	$(NPM_BIN)/babel $(SRC_DIR) --out-dir $(DIST_ESM_DIR) --extensions=.js --no-babelrc --plugins $(BABEL_PRD_TRANSFORMER_LIST)

.PHONY: __build_esm_ts
__build_esm_ts: __clean_build_esm
	$(NPM_BIN)/tsc --project $(CURDIR)/tsconfig_esm.json

.PHONY: __build_mjs_cp_mjs_to_esm
__build_mjs_cp_mjs_to_esm: __build_mjs_rename_js_to_mjs
	$(NPM_BIN)/cpx '$(TMP_MJS_DIR)/**/*.mjs' $(DIST_ESM_DIR) --preserve

.PHONY: __build_mjs_rename_js_to_mjs
__build_mjs_rename_js_to_mjs: __build_mjs_create_tmp_mjs
	$(NPM_BIN)/rename '$(TMP_MJS_DIR)/**/*.js' '{{f}}.mjs'

.PHONY: __build_mjs_create_tmp_mjs
__build_mjs_create_tmp_mjs: __build_mjs_create_tmp_mjs_call_tsc __build_mjs_create_tmp_mjs_call_babel

.PHONY: __build_mjs_create_tmp_mjs_call_tsc
__build_mjs_create_tmp_mjs_call_tsc: __clean_tmp_mjs
	$(NPM_BIN)/tsc --project $(CURDIR)/tsconfig_esm.json --outDir $(TMP_MJS_DIR) --declaration false

.PHONY: __build_mjs_create_tmp_mjs_call_babel
__build_mjs_create_tmp_mjs_call_babel: __clean_tmp_mjs
	$(NPM_BIN)/babel $(SRC_DIR) --out-dir $(TMP_MJS_DIR) --extensions=.js --no-babelrc --plugins $(BABEL_PRD_TRANSFORMER_LIST)


.PHONY: build_mixedlib
build_mixedlib: __build_mixedlib_cp_mjs __build_mixedlib_cp_cjs __build_mixedlib_cp_dts ## Build `lib/`.

.PHONY: __build_mixedlib_cp_mjs
__build_mixedlib_cp_mjs: build_esm __clean_build_mixedlib
	$(NPM_BIN)/cpx '$(DIST_ESM_DIR)/**/*.mjs' $(DIST_MIXED_LIB_DIR) --preserve

.PHONY: __build_mixedlib_cp_cjs
__build_mixedlib_cp_cjs: build_cjs __clean_build_mixedlib
	$(NPM_BIN)/cpx '$(DIST_COMMONJS_DIR)/**/*.js' $(DIST_MIXED_LIB_DIR) --preserve

.PHONY: __build_mixedlib_cp_dts
__build_mixedlib_cp_dts: build_esm __clean_build_mixedlib
	$(NPM_BIN)/cpx '$(DIST_ESM_DIR)/**/*.d.ts' $(DIST_MIXED_LIB_DIR) --preserve


###########################
# Lint
###########################
.PHONY: lint
lint: __eslint __tslint ## Run all lints

.PHONY: __eslint
__eslint:
	$(NPM_BIN)/eslint $(CURDIR) '$(CURDIR)/**/.eslintrc.js' --ext=.js,.jsx,.mjs

.PHONY: __tslint
__tslint:
	$(NPM_BIN)/tslint --config $(CURDIR)/tslint.json '$(CURDIR)/src/**/*.ts{,x}'


###########################
# Test
###########################
.PHONY: git_diff
git_diff: ## Test whether there is no committed changes.
	git diff --exit-code

.PHONY: tscheck
tscheck: ## Test check typing consistency.
	$(NPM_BIN)/tsc --project $(CURDIR)/tsconfig_test.json --noEmit

.PHONY: __test_preprocess
__test_preprocess:
	$(NPM_BIN)/babel $(SRC_TEST_DIR) --out-dir $(TEST_CACHE_DIR) --extensions .js --presets power-assert

.PHONY: __mocha
__mocha:
	$(MAKE) __run_mocha_with_power_assert -C $(CURDIR)

.PHONY: __run_mocha_with_power_assert
__run_mocha_with_power_assert:
	$(NPM_BIN)/mocha --recursive '$(TEST_CACHE_DIR)/**/test_*.js' --reporter $(MOCHA_REPORTER)

.PHONY: run_mocha
run_mocha: ## Run mocha without any transforms.
	$(NPM_BIN)/mocha --recursive '$(SRC_TEST_DIR)/**/test_*.js' --reporter $(MOCHA_REPORTER)


###########################
# CI
###########################
.PHONY: ci
ci:
	$(NPM_CMD) test
	$(MAKE) git_diff


###########################
# Tools
###########################
.PHONY: fmt
fmt: __eslint_fmt __tslint_fmt ## Apply all formatters

.PHONY: __eslint_fmt
__eslint_fmt: 
	$(NPM_BIN)/eslint $(CURDIR) $(CURDIR)/**/.eslintrc.js --ext .js --fix

.PHONY: __tslint_fmt
__tslint_fmt: 
	$(NPM_BIN)/tslint --config $(CURDIR)/tslint.json '$(CURDIR)/src/**/*.ts{,x}'
