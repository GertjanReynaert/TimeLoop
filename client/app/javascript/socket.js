import io from 'socket.io-client';

export default class Socket {
  constructor() {
    this.socket = io.connect('localhost:4000');
    this.socket.on('connect', this.showConnectionSuccess);
    this.socket.on('disconnect', this.showDisconnected);

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

  register(event_name, callback) {
    this.socket.on(event_name, callback)
  }
}
