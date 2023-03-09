import { http } from './http'

export enum JSCODE2SESSION_ERROR_CODE {
  CODE_INVALID = 40029,
  CALL_FREQUENTLY = 45011,
  CODE_BLOCKED = 40226,
  SYSTEM_ERROR = -1
}

export interface Jscode2SessionReq {
  appid: string
  secret: string
  js_code: string
  grant_type: string
}

export interface Jscode2SessionResp {
  session_key: string
  unionid: string
  errmsg: string
  openid: string
  errcode: JSCODE2SESSION_ERROR_CODE
}

export const jscode2session = (params: Jscode2SessionReq) => {
  return http.request<Jscode2SessionResp>({
    url: '/sns/jscode2session',
    method: 'get',
    params
  })
}
