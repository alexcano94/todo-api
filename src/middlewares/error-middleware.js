module.exports = (err, req, res, next) => {
  const { message, code } = err;
  console.error(err);
  res.status(code).json({ message });
}