const { List, Panel } = require('./../models/mongoose');

const create = async (document) => {
  const list = await new List(document).save();
  await Panel.findByIdAndUpdate(list.idPanel, { $push: { lists: list._id } });
  return list;
}

const readAll = async () => {
  return await List.find();
}

const read = async (id) => {
  return await List.findById(id).populate('todos').exec();
}

const update = async (id, document) => {
  const list = await List.findById(id);
  list.set({ ...list.toObject(), ...document, updatedAt: Date.now() });
  await list.save();
  return list;
}

const remove = async (id) => {
  const result = await List.findOneAndDelete(id);
  return result !== null;
}

module.exports = {
  create,
  readAll,
  read,
  update,
  remove
}