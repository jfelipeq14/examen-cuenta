import express, { json } from 'express'
import { PORT } from '../config.js'
import { dbConnection } from '../config/db.mongo.js'

export class Server {
  constructor () {
    this.app = express()
    this.app.use(json())
  }

  async dbConnection () {
    try {
      await dbConnection()
      console.log('Database connected successfully')
    } catch (error) {
      console.error('Database connection failed', error)
    }
  }

  listen () {
    this.app.listen(PORT, () => {
      console.log(`server listening on port http://localhost:${PORT}`)
    })
  }
}
