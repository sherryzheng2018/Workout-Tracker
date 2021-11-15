require('dotenv').config()

const express = require('express')
const mongoose = require('mongoose')
const app = express()

app.use(express.static("public"))
mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true })
const db = mongoose.connection
db.on('error', (error) => console.error(error))
db.once('open', () => console.log('connected to database!'))

app.use(express.json())


const appRoute = require('./routes')
app.use('/', appRoute)

app.listen(3000, () => console.log('Server Started!'))

