import http from 'http';
import socketIO from 'socket.io';

const server = http.createServer();
const port = process.env.SOCKET_PORT || 4000;

const io = socketIO(server);

io.on('connection', (socket) => {
  console.log('connected');

  socket.on('disconnect', function () {
    console.log('disconnected');
  });
});

server.listen(port, function () {
  console.log(`Socket server listening at port ${port}`);
});
