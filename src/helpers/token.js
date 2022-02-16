require('dotenv').config();
const jwt = require('jsonwebtoken');
const JWT_SECRET = process.env.JWT_SECRET;

const createToken = async (obj) => {
  return await jwt.sign(obj, JWT_SECRET);
}

const verifyToken = async (token) => {
  return await jwt.verify(token, JWT_SECRET);
}

module.exports = {
  createToken,
  verifyToken,
}