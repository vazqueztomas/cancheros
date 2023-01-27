const express = require('express');
const server = express();
const PORT = process.env.PORT || 8080;

server.use(express.json());
server.get('/', (req, res, next) => {
  return res.json('Cancheros API.')
})

server.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`)
})