import { assertStrictEq } from 'https://deno.land/std@v0.38.0/testing/asserts.ts'
import { A, B } from './bundle.js'

Deno.test('A is an object', () => {
  assertStrictEq(typeof A, 'object')
})

Deno.test('B is an object', () => {
  assertStrictEq(typeof B, 'object')
})
