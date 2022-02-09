const { Panel } = require('./../models/mongoose');

const create = async (document) => {
  return await new Panel(document).save();
}

const readAll = async () => {
  return await Panel.find().populate('lists').exec();
}

const read = async (id) => {
  return await Panel.findById(id);
}

const update = async (id, document) => {
  const panel = await Panel.findById(id);
  panel.set({ ...panel.toObject(), ...document, updatedAt: Date.now() });
  await panel.save();
  return panel;
}

const remove = async (id) => {
  const result = await Panel.findByIdAndDelete(id);
  return result !== null;
}

module.exports = {
  create,
  readAll,
  read,
  update,
  remove,
}