import { Context, Next } from 'koa'
import { jscode2session } from '../libs/mp'
import {
  mp
} from '../config'

const {
  appid,
  secret
} = mp

export const signin = async (ctx: Context, next: Next) => {
  const query = ctx.query
  jscode2session({
    appid,
    secret,
    js_code: '',
    grant_type: 'authorization_code'
  })
}
