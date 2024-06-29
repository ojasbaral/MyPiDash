const express = require('express')
const app = express()
const port = process.env.port

const server = app.listen(port, function () {
    console.log(`(${port}) SERVER RUNNING`)
})