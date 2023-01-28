const express = require('express');
const connectDB = require('./db');
const server = express();
require('dotenv').config();
const PORT = process.env.PORT || 8080;

server.use(express.json());
server.get('/', (req, res, next) => {
  return res.json('Cancheros API.')
})

server.use('/auth', require('./routes/auth'));

console.log(process.env.DB_DEVELOPMENT);
connectDB()
server.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`)
})