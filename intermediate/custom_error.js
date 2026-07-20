class ValidationError extends Error {
  constructor(field, message) {
    super(message)
    this.name, this.field = "ValidationError", field;
  }
}

class NotFoundError extends Error {
  constructor(resource) {
    super(`${resource} not found.`)
    this.name = 'NotFoundError';
  }
}

try {
  process(input)
} catch (err){
  if (err instanceof ValidationError) {
    return {error: err.message, field: err.field};
  }
  if (err instanceof NotFoundError){
    return {error: err.message, status: 404}
  }
  throw err; //re-throw unknown errors
}