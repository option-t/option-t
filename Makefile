INNER_PACKAGES_DIR := $(CURDIR)/packages
MAIN_PKG := $(INNER_PACKAGES_DIR)/option-t

DIST_DIR := $(MAIN_PKG)/__dist

NODE_BIN := node
NPM_MOD_DIR := $(CURDIR)/node_modules
NPM_BIN := $(NPM_MOD_DIR)/.bin
PNPM_CMD := pnpm

PROJECT_TURBO_DIR := $(CURDIR)/.turbo

all: help

help:
	@echo "Specify the task"
	@grep -E '^[0-9a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) | awk 'BEGIN {FS = ":.*?## "}; {printf "\033[36m%-30s\033[0m %s\n", $$1, $$2}'
	@exit 1

###########################
# Setup
###########################
.PHONY: install
install: ## Install dependencies.
	$(PNPM_CMD) install


###########################
# Clean
###########################
CLEAN_TARGETS := \
	repo_root \
    main_pkg \

.PHONY: clean
clean: $(addprefix clean_, $(CLEAN_TARGETS)) ## Clean up generated items.

.PHONY: clean_main_pkg
clean_main_pkg:
	$(MAKE) clean -C $(MAIN_PKG)

.PHONY: clean_repo_root
clean_repo_root: clean_turborepo_cache

.PHONY: clean_turborepo_cache
clean_turborepo_cache:
	$(NPM_BIN)/del $(PROJECT_TURBO_DIR)


###########################
# Build
###########################
.PHONY: build
build:
	$(NPM_BIN)/turbo run build


###########################
# Lint
###########################
.PHONY: lint
lint: eslint ## Run all lints

.PHONY: eslint
eslint:
	$(NPM_BIN)/eslint $(CURDIR)/

.PHONY: eslint_fix
eslint_fix: ## Apply ESLint's `--fix` mode
	$(NPM_BIN)/eslint --fix $(CURDIR)/

.PHONY: typecheck
typecheck: ## Check static types.
	$(NPM_BIN)/turbo run typecheck


###########################
# Test
###########################
.PHONY: test_unittest
test_unittest: build ## Build and run unit tests
	$(MAKE) run_test_unittest -C $(CURDIR)

.PHONY: test_api_typing
test_api_typing: build ## Build and run api typing tests
	$(MAKE) run_test_api_typing -C $(CURDIR)

.PHONY: test_import_types
test_import_types: build ## Build and run type import tests
	$(MAKE) run_test_import_types -C $(CURDIR)

.PHONY: run_test_import_types
run_test_import_types: ## Run type import tests
	$(NPM_BIN)/turbo run test --filter './packages/test_module_*'

.PHONY: run_test_unittest
run_test_unittest: ## Run unit tests only.
	$(NPM_BIN)/turbo run test --filter './packages/api_tests'

.PHONY: run_test_api_typing
run_test_api_typing: ## Run api typing tests only.
	$(NPM_BIN)/turbo run test --filter './packages/api_typing_tests'

.PHONY: run_test_unittest_with_update_snapshots
run_test_unittest_with_update_snapshots: ## Run unit tests only with updating snapshots.
	$(NPM_BIN)/turbo run test:update-snapshots --filter './packages/api_tests'

.PHONY: test_package_json_exports_field_format
test_package_json_exports_field_format:
	$(MAKE) $@ -C $(MAIN_PKG)

.PHONY: test_distribution_contain_all
test_distribution_contain_all:
	$(MAKE) $@ -C $(MAIN_PKG)

.PHONY: run_test_distribution_contain_all
run_test_distribution_contain_all: ## Run the test that check to contain expected items all. 
	$(MAKE) $@ -C $(MAIN_PKG)

.PHONY: run_test_distribution_contain_all
run_test_distribution_contain_all_with_update_snapshots: ## Run the test that check to contain expected items all with updating snapshots.
	$(MAKE) $@ -C $(MAIN_PKG)


###########################
# Tools
###########################
.PHONY: generate_import_path_list_md
generate_import_path_list_md: ## Generate all public import paths to docs/import_path.md
	$(MAKE) $@ -C $(MAIN_PKG)

.PHONY: format
format: ## Apply formatters
	$(NPM_BIN)/prettier --write $(CURDIR)

.PHONY: format_check
format_check: ## Check code formatting
	$(NPM_BIN)/prettier --check $(CURDIR)

.PHONY: prepublish
prepublish:
	$(MAKE) $@ -C $(MAIN_PKG)
	$(MAKE) run_test_unittest -C $(CURDIR)
	$(MAKE) run_test_api_typing -C $(CURDIR)
	$(MAKE) run_test_import_types -C $(CURDIR)

.PHONY: publish
publish: ## Run some commands for 'npm publish'
	$(MAKE) $@ -C $(MAIN_PKG)

.PHONY: git_diff
git_diff: ## Test whether there is no committed changes.
	git diff --exit-code

.PHONY: version_major
version_major: ## Alias to run `npm version major -ws`.
	$(PNPM_CMD) -r exec $(PNPM_CMD) version major --no-git-tag-version

.PHONY: version_minor
version_minor: ## Alias to run `npm version minor -ws`.
	$(PNPM_CMD) -r exec $(PNPM_CMD) version minor --no-git-tag-version

.PHONY: version_patch
version_patch: ## Alias to run `npm version patch -ws`.
	$(PNPM_CMD) -r exec $(PNPM_CMD) version patch --no-git-tag-version
