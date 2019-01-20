import {
  assert,
} from '../src/assert';
import {
  strings,
} from '../src/strings';

const assertLib = require('assert');
const okSpy = jest.spyOn(assertLib, 'ok');
import {
  AssertionError,
} from 'assert';

describe('assert unit tests.', () => {
  beforeEach(() => {
    okSpy.mockClear();
  });

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

  it('Passes the default message to assert.ok if the message argument is not present.', () => {
    expect.assertions(2);
    try {
      assert(null);
    } catch (err) {
      expect(okSpy).toBeCalledTimes(1);
      expect(okSpy).toBeCalledWith(null, strings.DEFAULT_MESSAGE);
    }

    okSpy.mockClear();
  });

  it('Passes a custom message to assert.ok if the message argument is present.', () => {
    expect.assertions(2);
    const msg = 'dfdsfdsk';
    try {
      assert(null, msg);
    } catch (err) {
      expect(okSpy).toBeCalledTimes(1);
      expect(okSpy).toBeCalledWith(null, msg);
    }

    okSpy.mockClear();
  });
});
