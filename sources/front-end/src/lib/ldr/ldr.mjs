import Kernel from './workers/kernel.js?worker';

export class Ldr {
  constructor() {
    this.kernel = null;
    this.encoder = new TextEncoder();
    this.decoder = new TextDecoder();

    console.log('Ldr.ctor');
  }

  handleError(event) {
    console.log('Ldr.handleError', event);
  }

  handleMessage({ data }) {
    console.log('Ldr.handleMessage', data);
  }

  async start() {
    this.kernel = new Kernel();
    this.kernel.onerror = this.handleError;
    this.kernel.onmessage = this.handleMessage;

    const message = {
      payload: 'hi',
    };

    this.kernel.postMessage(message);

    console.log('Ldr.start');
  }

  async stop() {
    this.kernel.terminate();
    this.kernel = null;

    console.log('Ldr.stop');
  }
}
