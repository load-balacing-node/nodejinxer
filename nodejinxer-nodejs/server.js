var express = require('express');
var app = express();
var dotenv = require('dotenv').config();

let config = require('./config')[process.env.NODE_ENV]

app.use(express.json());
app.get('/', (req, res) => {
    res.status(200).send("HELLO");
})


app.listen(config.port, (err) => {
    console.log('Server in port: ' + config.port);
})


