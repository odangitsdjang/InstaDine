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

const devLink = 'mongodb://localhost:instaDine/instaDine';
const productionLink = 'mongodb://heroku_xnlgzztq:2q53no3t91p0b1ep4uqln59dvh@ds117615.mlab.com:17615/heroku_xnlgzztq';

mongoose.connect(productionLink || devLink);

app.use(morgan('combined'));
app.use(bodyParser.json());
app.use('/v1', router);

let PORT = process.env.PORT || 3000;
let HOST = process.env.HOST || '127.0.0.1';

console.log('Listening on', HOST, PORT);
app.listen(PORT);