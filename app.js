const express = require('express')
const connectDb = require('./database/connection')
const errorHandler = require('./middlewares/errorHandler')
require('dotenv').config()

const app = express()

app.use(express.static('./public'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use('/api/v1/tasks', require('./routes/tasks'))
app.use('*', require('./middlewares/notFound')) //404 page
app.use(errorHandler) //middleware if occurs an http error.

const PORT = process.env.PORT
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`)

  connectDb()
})
