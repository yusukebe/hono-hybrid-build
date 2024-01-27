import { Hono } from 'hono'
import { renderer } from './renderer'
import { disableSSG, ssgOnly } from './middleware'

const app = new Hono()

app.get('*', renderer)

app.get('/', (c) => {
  return c.render(<h1>Hello!</h1>)
})

app.get('/static-page', ssgOnly(), (c) => {
  return c.render(<h1>Welcome to my static site</h1>)
})

app.get('/api/*', disableSSG())
app.get('/api/hello', (c) => {
  return c.json({
    message: 'hello'
  })
})

export default app
