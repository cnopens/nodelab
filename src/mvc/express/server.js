//server.js
/**
 * express js learning project
 * @version 1.0
 * @copyright cnopens
 *
 * @file server.js
 * @author cnopens@gmail.com
 */
const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('Hello World')
})

app.listen(3000)