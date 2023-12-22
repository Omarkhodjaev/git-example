export class ResData {
  constructor(message, statusCode, data = null, error = null) {
    this.message = message;
    this.statusCode = statusCode;
    this.data = data;
    this.error = error;
  }
}
