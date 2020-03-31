import { assertEquals } from 'https://deno.land/std@v0.38.0/testing/asserts.ts'
import * as bundle from './bundle.js'
import * as srcMod from './src/mod.ts'

Deno.test('A is an object', () => {
  assertEquals(typeof bundle.A, 'object')
})

Deno.test('B is an object', () => {
  assertEquals(typeof bundle.B, 'object')
})

Deno.test('./bundle.js export that same object as ./src/mod.ts', () => {
  assertEquals(bundle, srcMod)
})
