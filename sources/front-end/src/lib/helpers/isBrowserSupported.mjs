const checkBroadcastChannel = () => {
  return 'BroadcastChannel' in window;
}

const checkHasOwn = () => {
  return 'hasOwn' in Object;
}

const checks = [
  checkBroadcastChannel,
  checkHasOwn,
];

export const isBrowserSupported = new Promise((resolve) => {
  let result = true;

  for (const check of checks) {
    result = result && check();
  }

  resolve(result);
});