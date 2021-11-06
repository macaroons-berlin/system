const checkBroadcastChannel = () => {
  return typeof BroadcastChannel !== 'undefined';
}

const checkHasOwn = () => {
  return typeof Object.hasOwn !== 'undefined';
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