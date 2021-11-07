import {
  browser,
} from '$app/env';

const checkBroadcastChannel = () => {
  return browser === true ? 'BroadcastChannel' in window : true;
}

const checkHasOwn = () => {
  return browser === true ? 'hasOwn' in Object : true;
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