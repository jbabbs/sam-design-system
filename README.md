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

---

## Consuming examples
`cd docs-site` then run `yarn build:content`

If a new version of @gsa-sam/components has been published, update docs-site package.json

`yarn start`

---

## BUILD Packages and Publish to NPM

`yarn build`

This will create a `dist/releases` folder with the components package you can `cd` in to this directory and publish to npm (`npm publish`)
