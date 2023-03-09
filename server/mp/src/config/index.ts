import { env } from '../libs/env'

export const server = {
  port: env('PORT', 3000)
}

export const db = {
  host: env('MYSQL_HOST', ''),
  port: env('MYSQL_PORT', 3306),
  username: env('MYSQL_USERNAME', ''),
  password: env('MYSQL_PASSWORD', ''),
  database: env('MYSQL_DB', '')
}

export const mp = {
  appid: env('MP_APPID', ''),
  secret: env('MP_SECRET', '')
}
