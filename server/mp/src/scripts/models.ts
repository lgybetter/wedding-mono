import SequelizeAuto from 'sequelize-auto'
import { db as dbConfig } from '../config'

const {
  database,
  username,
  password,
  host,
  port
} = dbConfig

const auto = new SequelizeAuto(database, username, password, {
  host,
  dialect: 'mysql',
  directory: './src/models', // where to write files
  port,
  caseModel: 'c', // convert snake_case column names to camelCase field names: user_id -> userId
  caseFile: 'c', // file names created for each model use camelCase.js not snake_case.js
  singularize: true, // convert plural table names to singular model names
  additional: {
    timestamps: false
  },
  useDefine: true,
  lang: 'ts',
  tables: ['user'] // use all tables, if omitted
})

auto.run()
