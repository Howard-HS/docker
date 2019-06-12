require('dotenv').config()
const fs = require('fs')
const express = require('express')
const app = express()

const ping = require('./src/api/ping')

app.use(ping)

app.listen(3000, () => {
  console.log('App listening on port 3000')
})
