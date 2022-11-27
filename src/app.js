const express = require('express');
const morgan = require('morgan');
const exphbs = require('express-handlebars');
const path = require('path');
const cors = require('cors');

var bodyParser = require('body-parser');

const app = express();
app.use(cors({
    origin:false,
    credentials:true
}));
// app.options('localhost:3000',cors());

// app.use((req, res, next) => {
//     res.header('Access-Control-Allow-Origin', '*');
//     res.header('Access-Control-Allow-Credentials', true),
//     // res.header('Access-Control-Allow-Methods', 'POST, GET, PUT, DELETE, OPTIONS'),
//     // res.header('Access-Control-Allow-Headers', 'Content-Type'),
//     res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//     next();
//   });
  
// app.all('/*', function (req, res, next) {
//     res.header("Access-Control-Allow-Origin", "*");
//     res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
//     res.header("Access-Control-Allow-Headers", "X-Requested-With,     Content-Type");
//     next();
// });

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