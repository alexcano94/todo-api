const UserService = require('./UserService');
const { comparePasswords } = require('./../helpers/password');
const checker = require('./errors');

const register = async ({ email, password }) => {
  let user = await UserService.findByEmail(email);
  if (user) {
    try {
      throw await checker.throwErrorIfUserExists({ email });
    } catch (error) {
      throw error;
    }
  }
  user = await UserService.create({ email, password });
  return user;
}

const login = async ({ email, password }) => {
  const user = await UserService.findByEmail(email);
  if (!user) {
    throw await checker.throwErrorIfUserDoesNotExist({ email });
  }
  const equalPasswords = await comparePasswords({
    hash: user.password,
    plain: password,
  });
  if (equalPasswords) return user;
  throw await checker.throwIfPasswordsDontMatch();
}

module.exports = {
  register,
  login,
}