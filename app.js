const express = require('express');
const config = require('./config/config');
const connectDB = require('./config/db');

connectDB();

const app = express();
const port = config.port;


app.get('/', (req, res) => {
    res.send('Hello World!');
})

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
})