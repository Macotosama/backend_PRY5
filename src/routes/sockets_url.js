var Partida = require('../model/partida');
var Jugador = require('../model/jugador');
var Administrador = require('../model/administradorPartidas')
//import Partida from './partida';
//import Jugador from './jugador';
//import Administrador from './administradorPartidas';

module.exports = function (io) {
  const administrador = new Administrador();

  io.on('connection', (socket) => {

    socket.on('hola', async (dato) => {
      console.log(`Garrote ${dato}`);
    })

    socket.on('createParty', async (name) => {
      if (administrador.existPartida(name)) {
        socket.join(name);
        administrador.setPartida(new Partida(socket.id ,name));
      }
    })

    console.log(`user come mierda tres mis hdp: ${socket.id}`);

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