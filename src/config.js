import 'dotenv/config'

// Desestructuracion de datos de process.env
export const {
  PORT = 3000, // value default
  MONGO_CNN = 'mongodb+srv://jfelipeq14:JuaneFe-1414@cluster0.ptw5n.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0' // value default
} = process.env
