## Dev Environment

- [Install Bazel](https://docs.bazel.build/versions/master/install.html)
- run `yarn`

---

## Creating Examples

Follow the example found in:
`src/components-examples/components/footer/overview`
then declare new example here
`src/components-examples/BUILD.bazel` - `line 7`

### Build the examples package
`bazel build src/components-examples:npm_package --config=release`

### Commit your changes 
`git commit`

### Push docs content to repo
`./scripts/deploy/publish-docs-content.sh --no-build`

To push content you'll need `SDS_BUILDS_TOKEN` declared in your exported paths - this is similar to gren installation

---

## Consuming examples
`cd docs-site` then run `yarn build:content`

If a new version of @gsa-sam/components has been published, update docs-site package.json

`yarn start`

---

## BUILD Packages and Publish to NPM

`yarn build`

This will create a `dist/releases` folder with the components package you can `cd` in to this directory and publish to npm (`npm publish`)

---

## IMPORTANT

The scripts and tools folder were copied from material repo - review these folders and only keep folder/files that will be needed for this project.
