import fs from 'node:fs/promises'
import { toSSG } from 'hono/ssg'
import app from './src'

toSSG(app, fs, {
  dir: 'dist'
})
