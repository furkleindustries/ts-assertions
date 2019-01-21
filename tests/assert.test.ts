import {
  assert,
} from '../src/assert';
import {
  AssertionError,
} from '../src/AssertionError';
import {
  strings,
} from '../src/strings';

describe('assert unit tests.', () => {
  it('Throws an AssertionError if the condition is false.', () => {
    expect.assertions(1);
    // @ts-ignore
    const func = () => assert();
    try {
      func();
    } catch (err) {
      expect(err).toBeInstanceOf(AssertionError);
    }
  });

  it('Returns true if the condition is truthy.', () => {
    expect(assert(true)).toBe(true);
  });

  it('Throws the default message if the message argument is not present.', () => {
    const func = () => assert(null);
    expect(func).toThrow(strings.DEFAULT_MESSAGE);
  });

  it('Throws a custom message if the message argument is present.', () => {
    const msg = 'dfdsfdsk';
    const func = () => assert(null, msg);

    expect(func).toThrow(msg);
  });
});
