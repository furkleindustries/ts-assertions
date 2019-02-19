import {
  assert,
} from './assert';

export function assertValid<T>(
  value: any,
  message?: string | null,
  validator?: (value: T) => boolean,
): T
{
  const isValid = validator || Boolean;
  assert(isValid(value), message);

  return value;
}
