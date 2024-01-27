import type { MiddlewareHandler } from 'hono'

export const disableSSG = (): MiddlewareHandler =>
  async function disableSSG(c, next) {
    await next()
    c.header('x-hono-disable-ssg', 'true')
  }

export const ssgOnly = (): MiddlewareHandler =>
  async function ssgOnly(c, next) {
    const headerValue = c.req.raw.headers.get('x-hono-ssg')
    if (headerValue) {
      await next()
    }
    return c.notFound()
  }
