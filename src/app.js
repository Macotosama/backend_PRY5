const express = require('express');
const morgan = require('morgan');
const exphbs = require('express-handlebars');
const path = require('path');
var bodyParser = require('body-parser');

const app = express();
//settings
app.set('port',process.env.PORT || 4000);

app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(bodyParser.json());
//midelwares
app.use(morgan('dev'));
app.use(express.urlencoded({
    extended: false
}));

//routes
app.use(require('./routes/index.js'));

//static files
app.use(express.static(path.join(__dirname,'public')));




module.exports = app;