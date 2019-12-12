COMPONENTS_PACKAGES = [
    "core",
    "footer",
    "menu",
]

COMPONENTS_TARGETS = ["//src/components:components"] + ["//src/components/%s" % p for p in COMPONENTS_PACKAGES]
