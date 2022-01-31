const express = require('express')
const app = express()

const server = require ('http').createServer(app)

const port = 3000

server.listen(port, function() {

  console.log('Websaver läuf. Pott: %d', port)
})

