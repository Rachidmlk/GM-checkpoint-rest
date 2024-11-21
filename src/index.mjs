import express from 'express'
import dotenv from 'dotenv'
import connectDB from '../utils/db.mjs'
import userrouter from '../routes/users.mjs'


dotenv.config()
const app = express()
app.use(express.json())
connectDB()

app.use('/api', userrouter)


app.listen(process.env.PORT)
