COMPONENTS_PACKAGES = [
    "core",
    "footer",
    "action-menu"
]

COMPONENTS_TARGETS = ["//src/components:components"] + ["//src/components/%s" % p for p in COMPONENTS_PACKAGES]
