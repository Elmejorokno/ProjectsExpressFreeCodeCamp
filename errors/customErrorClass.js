class CustomError extends Error {
  /**
   *
   * @param {number} statusCode http status code.
   * @param {string} message error message.
   */
  constructor(statusCode, message) {
    super(message)
    this.statusCode = statusCode
  }
}

/**
 * Creates an instance of the `CustomError` class.
 * @param {number} statusCode
 * @param {string} msg
 * @returns An instance of the `CustomError` class
 */
const createCustomError = (statusCode, msg) => new CustomError(statusCode, msg)

module.exports = createCustomError
