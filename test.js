import { assertStrictEq, assertEquals } from 'https://deno.land/std@v0.38.0/testing/asserts.ts'
import { A, B } from './bundle.js'

Deno.test('A is an object', () => {
  assertStrictEq(typeof A, 'object')
})

Deno.test('B is an object', () => {
  assertStrictEq(typeof B, 'object')
})

Deno.test('./bundle.js export that same object as ./src/mod.ts', async () => {
  const bundle = await import('./bundle.js')
  const srcMod = await import('./src/mod.ts')
  assertEquals(bundle, srcMod)
})
