require('dotenv').config()

const express = require('express')
const mongoose = require('mongoose')
const app = express()

app.use(express.static("public"))
mongoose.connect(process.env.MONGDB_URI || `mongodb://localhost/workout`, 
{ 
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex:true,
    useFindAndModify:false
})
const db = mongoose.connection
db.on('error', (error) => console.error(error))
db.once('open', () => console.log('connected to database!'))

app.use(express.json())


const appRoute = require('./routes')
app.use('/', appRoute)

app.listen(process.env.PORT || 3000, () => console.log('Server Started!'))

