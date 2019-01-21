export class AssertionError extends Error {
  constructor(message: any) {
    super(message);
    this.name = 'AssertionError';
  }
}
