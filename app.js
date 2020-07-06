//Imports
import express from 'express'
import mongoose from 'mongoose'
import {studentRouter} from './routes/studentRouter.js'


//Conectar ao MongoDB pelo Mongoose
(async () => {
    try {
        await mongoose.connect(
          "mongodb+srv://romarioluz:carbureto@cluster0.4lhxf.gcp.mongodb.net/grades?retryWrites=true&w=majority",
          {
            useNewUrlParser: true,
            useUnifiedTopology: true,
          }
        )
        
    } catch (error) {
        console.log("Erro ao conectar")
    }
    })();

const app = express();
app.use(express.json())
app.use(studentRouter)

app.listen(3000, () => console.log('API iniciada'))

