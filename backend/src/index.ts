import express, { Request, Response } from 'express'
import cors from 'cors'
import 'dotenv/config'
import mongoose from 'mongoose'

mongoose.connect(process.env.DB_URL as string).then(() => { console.log("DB connected") })

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())

app.get('/api/test', (req: Request, res: Response) => {
    res.json({ message: 'API working' })

})


app.listen(3000, () => { console.log('Server running on port localhost:3000') })