// import Partida from '../model/partida';
var Partida = require('../model/partida');
var Jugador = require('../model/jugador');
var Administrador = require('../model/administradorPartidas')
//import Partida from './partida';
//import Jugador from './jugador';
//import Administrador from './administradorPartidas';

const administrador = new Administrador();
module.exports = function (io) {

  io.on('connection', (socket) => {

    socket.on('hola', async (dato) => {
      console.log(`Garrote ${dato}`);
    })

    socket.on('createParty', async ({room, name, cantidadvueltas, cantidadjugadores}) => {
      console.log("mas pene");
      if (administrador.existPartida(room)) {
        socket.join(room);
        console.log("runcreada");
        administrador.setPartida(new Partida(socket.id ,room, cantidadvueltas, cantidadjugadores, new Jugador(name, socket.id)));
      }
    })

    socket.on('unionParty', async ({room, name}) => {
      console.log("pene ");
      if (!administrador.existPartida(room)) {
        socket.join(room);
        administrador.findPartida(room).nuevoJuagador(name, socket.id);

      }
    })

    socket.on('listaPartidas', async (name) => {
      socket.emit('partidas', administrador.listPartidas());
    })

    console.log(`ingresa una solicitud atravez del socket: ${socket.id}`);

    // let messages = await Chat.find({}).limit(8).sort('-created');

    // socket.emit('load old msgs', messages);

    // socket.on('new user', (data, cb) => {
    //   console.log(data)
    //   // socket.emit('esperese tantito', 'los voy matar a todos');
    // });

    // // receive a message a broadcasting
    // socket.on('send message', async (data, cb) => {

    // });

    // socket.on('disconnect', data => {
    // });

    // function updateNicknames() {

    // }
  });

}