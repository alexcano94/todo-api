const { Panel } = require('./../models/mongoose');
const checker = require('./errors');
const ListService = require('./ListService');

const create = async (document) => {
  return await new Panel(document).save();
}

const readAll = async () => {
  return await Panel.find().populate('lists').exec();
}

const read = async (id) => {
  await checker.throwErrorIfDocumentDoesNotExist({ id, model: Panel });
  return await Panel.findById(id);
}

const update = async (id, document) => {
  await checker.throwErrorIfDocumentDoesNotExist({ id, model: Panel });
  const panel = await Panel.findById(id);
  panel.set({ ...panel.toObject(), ...document, updatedAt: Date.now() });
  await panel.save();
  return panel;
}

const remove = async (id) => {
  await checker.throwErrorIfDocumentDoesNotExist({ id, model: Panel });
  const { lists } = await Panel.findById(id).toObject();
  for(let idList of lists) {
    await ListService.remove(idList);
  }
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