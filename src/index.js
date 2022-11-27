const app = require('./app');
// app.listen(app.get('port'));
// console.log('server listeng on port',app.get('port'));

//------Sockets-------
const cors = require('cors')
const http =  require('http');

const sockets = require('./routes/sockets_url');
//===const server = http.createServer(app);
//===const io = socketio(server);
//===require('./routes/sockets_url')(io);
//sockets(io);//
/////////////////////

const server = require('http').createServer(app);
//const http = require("http");
// app.use(cors());


const io = require("socket.io")(server, {
    //allowEIO3: true,
    cors: {
        origin: true,
        // origin: "*",
        // methods: ["GET", "POST"],
        //allowedHeaders: ["my-custom-header"],
        // credentials: true,
    }    

});

require('./routes/sockets_url')(io);
/////////////////////
server.listen(app.get("port"));

console.log(`server on port ${app.get("port")}`);



