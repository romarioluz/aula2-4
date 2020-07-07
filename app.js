//Imports
import express from 'express'
import mongoose from 'mongoose'
import {studentRouter} from './routes/studentRouter.js'
const app = express();
import dotenv from 'dotenv'
dotenv.config();

//Conectar ao MongoDB pelo Mongoose
(async () => {
    try {
        await mongoose.connect(
          `mongodb+srv://${process.env.USER_DB}:carbureto@cluster0.4lhxf.gcp.mongodb.net/grades?retryWrites=true&w=majority`,
          {
            useNewUrlParser: true,
            useUnifiedTopology: true,
          }
        )
        console.log("Conectado ao MongoDB")

    } catch (error) {
        console.log("Erro ao conectar")
    }
    })();

app.use(express.json())
app.use(studentRouter)

app.listen(process.env.PORT, () => console.log('API iniciada'))

