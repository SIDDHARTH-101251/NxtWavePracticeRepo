const express = require('express')

const app = express()

app.get('/', (request, response) => {
  response.send('Express JS')
})

app.listen(3000, err => {
  if (err) {
    console.error('Error starting server:', err)
  } else {
    console.log('Server is listening on port 3000')
  }
})

module.exports = app
