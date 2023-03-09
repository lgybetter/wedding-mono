import { Sequelize } from 'sequelize'
import { db as dbConfig } from '../config'

const {
  database,
  username,
  password,
  host,
  port
} = dbConfig

export const db = new Sequelize(database, username, password, {
  host,
  port,
  dialect: 'mysql'
})

export const connectDB = () => {
  return db.authenticate().then(() => {
    console.log(`Connect to DB: ${database} success`)
    return db
  })
}
