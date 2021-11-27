export class InternalServerError extends Error {
  constructor() {
    super('Internal Server error');
    this.name = 'ServerError';
  }
}
