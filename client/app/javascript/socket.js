import io from 'socket.io-client';

export default class Socket {
  constructor() {
    this.socket = io('http://localhost:4000');
    this.socket.on('connect', this.showConnectionSuccess);
    this.socket.on('disconnect', this.showDisconnected);
  }

  showConnectionSuccess() {
    console.log('+--------------+\n| Connected    |\n+--------------+');
  }

  showDisconnected() {
    console.log('+--------------+\n| Disconnected |\n+--------------+');
  }

  register(event_name, callback) {
    this.socket.on(event_name, callback)
  }
}
