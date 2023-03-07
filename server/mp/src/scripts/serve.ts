import { app } from '../app'
import { server as serverConfig } from '../config'

const server = app.listen(serverConfig.port, () => {
  console.log(`The Server is started at : http://127.0.0.1:${serverConfig.port}， ENV: ${process.env.NODE_ENV}`)
})

server.keepAliveTimeout = 60 * 1000
