import dotenv from 'dotenv'
import path from 'path'

const envPath = path.join(__dirname, '..', `.env.${process.env.NODE_ENV}.local`)
dotenv.config({ path: envPath })

export const env = <T, R = T extends undefined ? string : T>(name: string, defaultValue?: T): R => {
  if (typeof process.env[name] !== 'undefined') {
    return process.env[name] as R
  }
  return defaultValue as R
}

export const server = {
  port: env('PORT', 3000)
}
