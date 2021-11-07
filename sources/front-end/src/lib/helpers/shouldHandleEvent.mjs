import {
  browser,
} from '$app/env';

export const shouldHandleEvent = (someEvent) => {
  return browser === true && 'isTrusted' in someEvent ? someEvent.isTrusted === true : false;
}