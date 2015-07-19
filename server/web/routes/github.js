import io from 'socket.io-client';

export function github(request) {
  const payload = request.body;

  let socket = io.connect('http://localhost:4000');

  socket.on('connect', () => {
    for (let commit of payload.commits) {
      console.log(commit.message);
      socket.emit('github_update', commit.message);
    }
  });
}
