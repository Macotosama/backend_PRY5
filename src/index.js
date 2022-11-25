const app = require('./app');
// app.listen(app.get('port'));
// console.log('server listeng on port',app.get('port'));

//------Sokects-------
//import http from "http";
//import socketio from "socket.io";
//import sockets from "./routes/sockets_url";
const http =  require('http');
const socketio = require('socket.io');
const sockets = require('./routes/sockets_url');
const server = http.createServer(app);
const io = socketio(server);
require('./routes/sockets_url')(io);
//sockets(io);//

server.listen(app.get("port"));
console.log(`server on port ${app.get("port")}`);