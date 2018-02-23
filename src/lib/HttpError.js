export function HttpError(status, message) {
  this.name = 'Http error';
  this.message = message || 'Http error occurred';
  this.status = status || 400;
}

HttpError.prototype = Error.prototype;
HttpError.prototype.constructor = HttpError;