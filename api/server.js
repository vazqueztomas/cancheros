const express = require('express');
const connectDB = require('./db');
const server = express();
const credentials = require('./middleware/credentials');
const corsOptions = require('./config/corsOptions')
const cors = require('cors');
require('dotenv').config();
const PORT = process.env.PORT || 8080;

server.use(credentials);
server.use(cors(corsOptions))
server.use(express.json());
server.get('/', (req, res, next) => {
  return res.json('Cancheros API.')
})

server.use("/auth", require("./routes/auth"));
server.use("/teams", require("./routes/teams"))

console.log(process.env.DB_DEVELOPMENT);
connectDB()
server.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`)
})