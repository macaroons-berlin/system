export const shouldHandleEvent = (someEvent) => {
  if ('isTrusted' in someEvent) {
    return someEvent.isTrusted === true;
  } else {
    return true;
  }
}