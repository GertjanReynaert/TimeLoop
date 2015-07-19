import io from 'socket.io-client';

export function github(request) {
  const payload = request.body;

  let socket = io.connect('localhost:4000');

  for (let commit of payload.commits) {
    console.log(commit);
    socket.emit('github_update', commit.message);
  }
}
