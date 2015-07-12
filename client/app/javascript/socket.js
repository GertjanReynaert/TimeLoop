import io from 'socket.io-client';

class Socket {
  constructor() {
    this.socket = io.connect('localhost:5000');
    this.socket.on('connect', this.showConnectionSuccess);
    this.socket.on('disconnect', this.showDisconnected);

    this.requestSomething('test');
  }

  showConnectionSuccess() {
    console.log('================\n = Connected    =\n ================ ');
  }

  showDisconnected() {
    console.log('================\n = Disconnected =\n ================ ');
  }

  requestSomething(message) {
    this.socket.emit(message);
  }
}

export const socket = new Socket();
