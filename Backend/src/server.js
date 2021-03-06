const express = require('express');
const app = express();
app.use(express.json());
const port = process.env.PORT || 3000;

//Cors
const cors = require('cors');

const corsOptions = {
    origin: "http://localhost:8081"
};

app.use(cors(corsOptions));



// Require para usar Prisma
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

app.get('/', (req, res) => {
  res.json({message: 'alive'});
});







var server = app.listen(port, () => {console.log(`Listening to requests on port ${port}`);});
var handler = function() {
    console.log('close server');
    server.close();
};
module.exports = {app, handler};