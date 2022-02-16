const UserService = require('../services/UserService');
const { verifyToken } = require('../helpers/token');

const jwtProtect = async (req, res, next) => {
  const token = req.headers.authorization
    ? req.headers.authorization.split(' ')[1]
    : null;

  if (!token) {
    return res.status(401).json({ message: 'You need a token' });
  }

  try {
    const { userId } = await verifyToken(token);
    const exists = await UserService.exists(userId);
    if (!exists) {
      res.status(403).json({ message: 'Invalid token' });
    }
    req.userId = userId;
    next();

  } catch (error) {
    res.status(403).json({ message: error.message });
  }

}

module.exports = jwtProtect;