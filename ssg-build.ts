import { toSSG } from 'hono/bun'
import app from './src'

toSSG(app, { dir: 'dist' })
