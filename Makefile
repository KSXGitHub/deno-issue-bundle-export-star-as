bundle.js:
	deno run --allow-read=src --allow-write=bundle.js build.ts

test: bundle.js
	deno test
