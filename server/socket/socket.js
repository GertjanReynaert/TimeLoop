import http from 'http';
import socketIO from 'socket.io';

const server = http.createServer();
const port = process.env.SOCKET_PORT || 4000;

const io = socketIO(server);

io.on('connection', (socket) => {
  console.log('connected');

  socket.on('disconnect', () => {
    console.log('disconnected');
  });

  socket.on('github_update', (title) => {
    socket.emit('github_update', title);
    console.log(`Github update: commit title: ${title}`);
  });
});

server.listen(port, () => {
  console.log(`Socket server listening at port ${port}`);
});
