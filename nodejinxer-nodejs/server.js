const express = require('express');
const app = express();
const dotenv = require('dotenv').config();
const data = require('./data.json');
const cors = require('cors');

let config = require('./config')[process.env.NODE_ENV]

app.use(cors());
app.use(express.json());
app.get('/', (req, res) => {
    res.status(200).json(data);
})

console.log(config);

app.listen(3000, (err) => {
    console.log('Server in port: ' + 3000);
})


