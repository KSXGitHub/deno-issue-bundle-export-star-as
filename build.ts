import {
  writeFileStr
} from 'https://deno.land/std@v0.38.0/fs/mod.ts'

const [_, outputContent] = await Deno.bundle('src/mod.ts', undefined, {
  target: 'es2018'
})

await writeFileStr('bundle.js', outputContent)
