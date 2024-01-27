import type { MiddlewareHandler } from 'hono'

export const disableSSG = (): MiddlewareHandler =>
  async function disableSSG(c, next) {
    await next()
    c.header('x-hono-disable-ssg', 'true')
  }
