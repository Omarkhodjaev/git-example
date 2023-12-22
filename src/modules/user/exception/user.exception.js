export class UserAlreadyExist extends Error {
  constructor() {
    super("This login is already exist!");
    this.statusCode = 400;
  }
}
