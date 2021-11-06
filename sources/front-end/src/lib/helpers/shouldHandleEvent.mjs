export const shouldHandleEvent = (someEvent) => {
  if (Object.hasOwn(someEvent, 'isTrusted')) {
    return someEvent.isTrusted === true;
  } else {
    return true;
  }
}