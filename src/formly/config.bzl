FORMLY_PACKAGES = [
    "core",
    "input",
]

FORMLY_TARGETS = ["//src/formly:formly"] + ["//src/formly/%s" % p for p in FORMLY_PACKAGES]
