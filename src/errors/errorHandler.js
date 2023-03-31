function errorHandler(err, req, res, next) {
  const { status = 500, message = "Error" } = err;
  res.status(status).json({ error: message });
}

module.exports = errorHandler;
