import io from 'socket.io-client';

export function github(request) {
  const payload = request.body;

  let socket = io.connect('localhost:4000');

  debugger;
  for (let commit of payload.commits) {
    console.log(commit.message);
    socket.emit('github_update', commit.message);
  }
}
