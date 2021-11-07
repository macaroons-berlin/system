self.onmessage = ({ data }) => {
  console.log('kernel.handleMessage', data);

  self.postMessage({
    payload: 'asshole',
  });
};

self.onerror = (event) => {
  console.log('onerror', event);
}