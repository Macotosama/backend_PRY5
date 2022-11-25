const express = require('express');
const morgan = require('morgan');
const exphbs = require('express-handlebars');
const path = require('path');
const cors = require('cors');
const http =  require('http');
const socketio = require('socket.io');
var bodyParser = require('body-parser');

const app = express();
app.use(cors());

//settings
app.set('port',process.env.PORT || 4000);

app.use(bodyParser.urlencoded({
    extended: true
}));

//=>Creacion del servidor
const socketServer = http.createServer(app);
const io = socketio.listen(socketServer);
io.on('connection',socketS=>{
    console.log('usuario conectado');
});

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