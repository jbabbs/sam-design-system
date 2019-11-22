entryPoints = [
    "footer",
]

# List of all non-testing entry-points of the SDS Components package.
COMPONENTS_ENTRYPOINTS = [
    ep
    for ep in entryPoints
    if not ep.endswith("/testing")
]

# List of all testing entry-points of the SDS Components package.
COMPONENTS_TESTING_ENTRYPOINTS = [
    ep
    for ep in entryPoints
    if not ep in COMPONENTS_ENTRYPOINTS
]

# List of all non-testing entry-point targets of the SDS Components package.
COMPONENTS_TARGETS = ["//src/components"] + \
                   ["//src/components/%s" % ep for ep in COMPONENTS_ENTRYPOINTS]

# List of all testing entry-point targets of the SDS Components package.
COMPONENTS_TESTING_TARGETS = ["//src/components/%s" % ep for ep in COMPONENTS_TESTING_ENTRYPOINTS]

# List that references the sass libraries for each Component non-testing entry-point. This
# can be used to specify dependencies for the "all-theme.scss" file in core.
COMPONENTS_SCSS_LIBS = [
    "//src/components/%s:%s_scss_lib" % (ep, ep.replace("-", "_"))
    for ep in COMPONENTS_ENTRYPOINTS
]
