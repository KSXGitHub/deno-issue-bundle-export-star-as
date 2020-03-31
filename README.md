# Deno Issue: Deno does not bundle `export * as` correctly

## What I'm trying to do

I am trying to bundle a file that contains multiple `export * as` lines for use in browser and Node.js.

## Explaining files in the repo

* `src` are files to bundle.
  * `src/mod.ts` is `rootName`, this file contains 2 `export * as` lines.
* `build.ts` is build script to create `bundle.js`.
* `bundle.js` is product of `build.ts`.
* `test.js` tests exported values from `bundle.js`.
* `Makefile` contains bundle command and test command.

## Steps to reproduce

1. Clone this repo
2. Run `make test`

## Expected behavior

All tests passed. All `export * as` are converted to objects.

## Actual behavior

All tests failed. All `export * as` are replaced by `undefined`.
