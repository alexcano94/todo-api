module.exports = (err, req, res, next) => {
  const { message, name: code } = err;
  res.status(parseInt(code)).json({ message });
}