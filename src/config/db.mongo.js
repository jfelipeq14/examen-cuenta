import mongoose from 'mongoose'
import { MONGO_CNN } from '../config.js'

export const dbConnection = async () => {
  try {
    await mongoose.connect(MONGO_CNN)
    console.log('Connected to mongo DB')
  } catch (error) {
    console.log(error)
  }
}
