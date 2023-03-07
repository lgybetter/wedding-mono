import { Context } from 'koa'
import Router from 'koa-router'

const router = new Router().prefix('/user')

// 登录
router.get('/signin', (ctx: Context) => {
  ctx.body = 'sign in'
})

export const user = router
