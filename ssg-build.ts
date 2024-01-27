import { toSSG } from 'hono/bun'
import app from './src'

toSSG(app, {
  dir: 'dist',
  afterResponseHook: (res) => {
    return res.headers.get('x-hono-disable-ssg') ? false : res
  },
  afterGenerateHook: (result) => {
    result.files.map((file) => {
      console.log(`${file} is generated`)
    })
  }
})
