const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

let app = express();

let router = require('./services/router');

// if (process.env.NODE_ENV == 'production') {
//   mongoose.connect(process.env.MONGO_URL);
// } else {
//   mongoose.connect('mongodb://localhost:user/user');
// }

mongoose.connect('mongodb://localhost:instaDine/instaDine');

app.use(morgan('combined'));
app.use(bodyParser.json());
app.use('/v1', router);

let PORT = process.env.PORT || 3000;
let HOST = process.env.HOST || '127.0.0.1';

console.log('Listening on', HOST, PORT);
app.listen(PORT, HOST);