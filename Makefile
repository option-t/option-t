INNER_PACKAGES_DIR := $(CURDIR)/packages
MAIN_PKG := $(INNER_PACKAGES_DIR)/option-t

all: help

help:
	@echo "Specify the task"
	@grep -E '^[0-9a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) | awk 'BEGIN {FS = ":.*?## "}; {printf "\033[36m%-30s\033[0m %s\n", $$1, $$2}'
	@exit 1


###########################
# Clean
###########################
.PHONY: clean
clean:
	$(MAKE) $@ -C $(MAIN_PKG)


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
lint:
	$(MAKE) $@ -C $(MAIN_PKG)


###########################
# Test
###########################
.PHONY: test_unittest
test_unittest:
	$(MAKE) $@ -C $(MAIN_PKG)

.PHONY: test_distribution_contain_all
test_distribution_contain_all:
	$(MAKE) $@ -C $(MAIN_PKG)

.PHONY: test_module_path_rewrite
test_module_path_rewrite:
	$(MAKE) $@ -C $(MAIN_PKG)

.PHONY: test_package_json_exports_field_format
test_package_json_exports_field_format:
	$(MAKE) $@ -C $(MAIN_PKG)

.PHONY: test_package_install
test_package_install:
	$(MAKE) $@ -C $(MAIN_PKG)


###########################
# Tools
###########################
.PHONY: format_check
format_check:
	$(MAKE) $@ -C $(MAIN_PKG)

.PHONY: prepublish
prepublish:
	$(MAKE) $@ -C $(MAIN_PKG)

.PHONY: publish
publish:
	$(MAKE) $@ -C $(MAIN_PKG)
