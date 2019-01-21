import {
  AssertionError,
} from './AssertionError';
import {
  strings,
} from './strings';

export function assert(condition: any, message?: string | null): true {
  const msg = message || strings.DEFAULT_MESSAGE;
  if (!condition) {
    throw new AssertionError(msg);
  }

  return true;
};
