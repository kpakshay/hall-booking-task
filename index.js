const express = require("express");
// const dotenv = require("dotenv");
const mongo = require('./shared/connect');
const roomsRouter = require('./routes/rooms');

// dotenv.config();
const app = express();
// To convert req.body into json format
app.use(express.json());
mongo.connect();

app.use('/rooms', roomsRouter);

app.listen(3000);
