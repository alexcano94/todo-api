const bcrypt = require('bcrypt');
require('dotenv').config();

const encryptPassword = async (password) => {
  return await bcrypt.hash(password, parseInt(process.env.SALT_ROUNDS));
}


const comparePasswords = async ({ hash, plain }) => await bcrypt.compare(plain, hash);

module.exports = {
  encryptPassword,
  comparePasswords,
}