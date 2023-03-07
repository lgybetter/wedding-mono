import Koa from 'koa'
import koaBody from 'koa-body'
import { user } from './routers'

export const app = new Koa()

app.use(koaBody({ multipart: true }))

app.use(user.routes())
