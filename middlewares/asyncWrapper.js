/**
 * Wraps an asynchronous function and is responsible for controlling it so as not to use the try-catch block.
 * @param {function} fn
 * @returns An asynchronous function with the try-catch block. If an error occurs it will be passed to the `next function` to handle it.
 */
const asyncWrapper = (fn) => {
  return async (req, res, next) => {
    try {
      await fn(req, res, next)
    } catch (error) {
      next(error)
    }
  }
}

module.exports = asyncWrapper
