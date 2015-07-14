import io from 'socket.io-client';

class Socket {
  constructor() {
    this.socket = io.connect('localhost:4000');
    this.socket.on('connect', this.showConnectionSuccess);
    this.socket.on('disconnect', this.showDisconnected);

    this.socket.on('github_update', this.addEvent);
    this.socket.on('trello_update', this.addEvent);

    this.requestSomething('test');
  }

  showConnectionSuccess() {
    console.log('+--------------+\n| Connected    |\n+--------------+');
  }

  showDisconnected() {
    console.log('+--------------+\n| Disconnected |\n+--------------+');
  }

  requestSomething(message) {
    this.socket.emit(message);
  }

  addEvent(payload) {
    boundAddEvent(
      runningTimer.id,
      USER_EVENT,
      payload
    );
  }
}

export const socket = new Socket();
