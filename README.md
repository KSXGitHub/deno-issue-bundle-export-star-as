# Deno Issue: Deno does not bundle `export * as` correctly

## Explaining files in the repo

* `src` are files to bundle.
  * `src/mod.ts` is `rootName`.
* `build.ts` is build script to create `bundle.js`.
* `bundle.js` is product of `build.ts`.
* `test.js` tests exported values from `bundle.js`.
* `Makefile` contains bundle command and test command.

## Steps to reproduce

1. Clone this repo
2. Run `make test`

## Expected behavior

All tests passed

## Actual behavior

All tests failed
