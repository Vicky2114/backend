import express from 'express'
import cors from 'cors'
import router from './Router/user.mjs'
import {db} from './config/mongoose.mjs'
const PORT = process.env.PORT || 5000
const app  = express()

app.use(express.static('./assets'))
app.use(express.urlencoded());
app.use(express.json())
app.use(cors())
app.use(router);
app.listen(PORT, err => err ? console.log(err) : console.log(`Server is running on port ${PORT}`))