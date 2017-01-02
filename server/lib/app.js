const express = require('express');
const app = express();
const morgan = require('morgan');
const errorHandler = require('./error-handler');
// const cors = require('cors')();

//require in routers
const chores = require('./routes/chores');
const houses = require('./routes/houses');



app.use(morgan('dev'));

//app.use(cors);
app.use(express.static('./public'));

//add api routes here
app.use('/api/chores', chores);
app.use('/api/houses', houses);

app.use(errorHandler);

module.exports = app;