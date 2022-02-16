const { User } = require('./../models/mongoose');
const checker = require('./errors');

const create = async (document) => {
  const user = await new User(document).save();
  return user;
}

const exists = async (id) => {
  await checker.throwErrorIfDocumentDoesNotExist({ id, model: User });
  return await User.exists({ _id: id });
}

const findByEmail = async (email) => {
  return await User.findOne({ email })
};

const findById = async (id) => {
  await checker.throwErrorIfDocumentDoesNotExist({ id, model: User });
  return await User.findById(id);
}

module.exports = {
  create,
  findByEmail,
  findById,
  exists,
}
