import Koa from 'koa'
import koaBody from 'koa-body'
import { userRouter } from './routers'

export const app = new Koa()

app.use(koaBody({ multipart: true }))

app.use(userRouter.routes())
