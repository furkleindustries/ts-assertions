import {
  strings,
} from './strings';
import {
  ok,
} from 'assert';

export function assert(condition: any, message?: string | null): true {
  const msg = message || strings.DEFAULT_MESSAGE;
  ok(condition, msg);

  return true;
};
