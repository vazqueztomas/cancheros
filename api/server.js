const express = require('express');
const connectDB = require('./db');
const server = express();
const PORT = process.env.PORT || 8080;

server.use(express.json());
server.get('/', (req, res, next) => {
  return res.json('Cancheros API.')
})

server.use('/auth', require('./routes/auth'));


connectDB()
server.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`)
})