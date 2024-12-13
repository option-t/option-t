INNER_PACKAGES_DIR := $(CURDIR)/packages
MAIN_PKG := $(INNER_PACKAGES_DIR)/option-t
API_TEST_PKG := $(INNER_PACKAGES_DIR)/api_tests
API_TYPING_TEST_PKG := $(INNER_PACKAGES_DIR)/api_typing_tests
TYPE_IMPORT_TEST_UNDER_MODULE_RESOLUTION_NODE16_PKG := $(INNER_PACKAGES_DIR)/test_module_resolution_node16
TYPE_IMPORT_TEST_UNDER_MODULE_RESOLUTION_BUNDLER_PKG := $(INNER_PACKAGES_DIR)/test_module_resolution_bundler

DIST_DIR := $(MAIN_PKG)/__dist

NODE_BIN := node
NPM_MOD_DIR := $(CURDIR)/node_modules
NPM_BIN := $(NPM_MOD_DIR)/.bin
NPM_CMD := npm
PNPM_CMD := pnpm

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
clean_repo_root:


###########################
# Build
###########################
.PHONY: build
build:
	$(MAKE) $@ -C $(MAIN_PKG)


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
	$(MAKE) $@ -C $(MAIN_PKG)


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

MODULE_RESOLUTION_TEST_TARGETS := \
	node16 \
	bundler

.PHONY: run_test_import_types
run_test_import_types: $(addprefix __run_test_import_types_under_module_resolution_, $(MODULE_RESOLUTION_TEST_TARGETS)) ## Run type import tests

.PHONY: __run_test_import_types_under_module_resolution_node16
__run_test_import_types_under_module_resolution_node16:
	$(MAKE) test -C $(TYPE_IMPORT_TEST_UNDER_MODULE_RESOLUTION_NODE16_PKG)

.PHONY: __run_test_import_types_under_module_resolution_bundler
__run_test_import_types_under_module_resolution_bundler:
	$(MAKE) test -C $(TYPE_IMPORT_TEST_UNDER_MODULE_RESOLUTION_BUNDLER_PKG)

.PHONY: run_test_unittest
run_test_unittest: ## Run unit tests only.
	$(MAKE) test -C $(API_TEST_PKG)

.PHONY: run_test_api_typing
run_test_api_typing: ## Run api typing tests only.
	$(MAKE) test -C $(API_TYPING_TEST_PKG)

.PHONY: run_test_unittest_with_update_snapshots
run_test_unittest_with_update_snapshots: ## Run unit tests only with updating snapshots.
	$(MAKE) test_with_update_snapshots -C $(API_TEST_PKG)

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
	$(NPM_CMD) version major --no-git-tag-version --workspaces --no-workspaces-update

.PHONY: version_minor
version_minor: ## Alias to run `npm version minor -ws`.
	$(NPM_CMD) version minor --no-git-tag-version --workspaces --no-workspaces-update

.PHONY: version_patch
version_patch: ## Alias to run `npm version patch -ws`.
	$(NPM_CMD) version patch --no-git-tag-version --workspaces --no-workspaces-update
