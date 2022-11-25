module.exports = function (io) {
  //let users = {};

  io.on('connection', (socket) => {

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