module.exports = function (io) {
  //let users = {};

  io.on('connection', async socket => {

    let messages = await Chat.find({}).limit(8).sort('-created');

    socket.emit('load old msgs', messages);

    socket.on('new user', (data, cb) => {

    });

    // receive a message a broadcasting
    socket.on('send message', async (data, cb) => {

    });

    socket.on('disconnect', data => {
    });

    function updateNicknames() {

    }
  });

}