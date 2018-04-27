NPM_MOD_DIR := $(CURDIR)/node_modules
NPM_BIN := $(NPM_MOD_DIR)/.bin
NPM_CMD := npm

SRC_TEST_DIR := $(CURDIR)/test

DIST_ESM_DIR := $(CURDIR)/esm
DIST_COMMONJS_DIR := $(CURDIR)/cjs
DIST_MIXED_LIB_DIR := $(CURDIR)/lib
TEST_CACHE_DIR := $(CURDIR)/__test_cache
TYPE_TEST_DIR := $(CURDIR)/__type_test
TMP_MJS_DIR := $(CURDIR)/__tmp_mjs

all: help

help:
	@echo "Specify the task"
	@grep -E '^[0-9a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) | awk 'BEGIN {FS = ":.*?## "}; {printf "\033[36m%-30s\033[0m %s\n", $$1, $$2}'
	@exit 1


# Clean
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


# Lint
.PHONY: lint
lint: __eslint __tslint ## Run all lints

.PHONY: __eslint
__eslint:
	$(NPM_BIN)/eslint $(CURDIR) '$(CURDIR)/**/.eslintrc.js' --ext=.js,.jsx,.mjs

.PHONY: __tslint
__tslint:
	$(NPM_BIN)/tslint --config $(CURDIR)/tslint.json '$(CURDIR)/src/**/*.ts{,x}'


# Test
.PHONY: git_diff
git_diff: ## Test whether there is no committed changes.
	git diff --exit-code

.PHONY: tscheck
tscheck: ## Test check typing consistency.
	$(NPM_BIN)/tsc --project $(CURDIR)/tsconfig_test.json --noEmit

.PHONY: __test_preprocess
__test_preprocess:
	$(NPM_BIN)/babel $(SRC_TEST_DIR) --out-dir $(TEST_CACHE_DIR) --extensions .js --presets power-assert


# CI
.PHONY: ci
ci:
	$(NPM_CMD) test
	$(MAKE) git_diff


# Tools
.PHONY: fmt
fmt: __eslint_fmt __tslint_fmt ## Apply all formatters

.PHONY: __eslint_fmt
__eslint_fmt: 
	$(NPM_BIN)/eslint $(CURDIR) $(CURDIR)/**/.eslintrc.js --ext .js --fix

.PHONY: __tslint_fmt
__tslint_fmt: 
	$(NPM_BIN)/tslint --config $(CURDIR)/tslint.json '$(CURDIR)/src/**/*.ts{,x}'
