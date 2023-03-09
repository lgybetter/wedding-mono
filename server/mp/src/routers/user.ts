import Router from 'koa-router'
import { user } from '../controllers'

const router = new Router().prefix('/user')

// 登录
router.get('/signin', user.signin)

export const userRouter = router
