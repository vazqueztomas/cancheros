const express = require('express');
const connectDB = require('./db');
const server = express();
const credentials = require('./middleware/credentials')
const cors = require('cors');
require('dotenv').config();
const PORT = process.env.PORT || 8080;

server.use(credentials);
server.use(cors({
  origin: [
    'http://localhost:8080',
    'http://localhost:3000',
    '127.0.0.1:5173',
  ]
}))
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