import { Hono } from 'hono'
import { renderer } from './renderer'
import { disableSSG } from './middleware'

const app = new Hono()

app.get('*', renderer)

app.get('/', (c) => {
  return c.render(<h1>Hello!</h1>)
})

app.get('/api/*', disableSSG())
app.get('/api/hello', (c) => {
  return c.json({
    message: 'hello'
  })
})

export default app
