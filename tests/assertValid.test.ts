import {
  assertValid,
} from '../src/assertValid';

import {
  assert,
} from '../src/assert';
jest.mock('../src/assert');

describe('assertValid unit tests.', () => {
  beforeEach(() => {
    (assert as any).mockClear();
  });

  it('Calls the custom validator if it is provided.', () => {
    const mock = jest.fn(() => true);
    const value = 2;
    assertValid(value, 'foobar', mock);
    expect(mock).toBeCalledTimes(1);
    expect(mock).toBeCalledWith(value);
  });

  it('Passes the message and the result from the validator to assert.', () => {
    const message = 'fd';
    const sym = Symbol('value') as any;
    const mock = jest.fn(() => sym);
    assertValid(4, message, mock);
    expect(assert).toBeCalledTimes(1);
    expect(assert).toBeCalledWith(sym, message);
  });

  it('Returns the value if the condition was valid.', () => {
    const sym = Symbol('value') as any;
    const message = 'fd';
    const mock = jest.fn(() => sym);
    expect(assertValid(sym, message, mock)).toBe(sym);
  });
});
