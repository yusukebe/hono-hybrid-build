import pages from '@hono/vite-cloudflare-pages'
import ssg from '@hono/vite-ssg'
import devServer from '@hono/vite-dev-server'
import { defineConfig } from 'vite'

const entry = 'src/index.tsx'

export default defineConfig(({ mode }) => {
  if (mode === 'ssg') {
    return {
      plugins: [ssg()]
    }
  }
  return {
    plugins: [pages(), devServer({ entry })]
  }
})
