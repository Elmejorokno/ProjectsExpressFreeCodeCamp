/**
 * Error handler
 * @param {*} err http error
 * @param {*} req
 * @param {*} res
 * @param {*} next
 * @returns Response with a status code `err.statusCode` or 400 and a json with the `err.message`
 */
const errorHandler = (err, req, res, next) => {
  if (res.headersSent) {
    return next(err)
  }
  console.log(err)
  return res.status(err.statusCode || 400).json(err.message)
}

module.exports = errorHandler
