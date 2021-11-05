export const isBrowserSupported = new Promise((resolve) => {
  const to = setTimeout(() => {
    clearTimeout(to);

    resolve(true);
  }, 100);
});