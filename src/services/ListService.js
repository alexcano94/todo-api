const { List, Panel, Todo } = require('./../models/mongoose');
const checker = require('./errors');

const create = async (document) => {
  try {
    await checker.throwErrorIfRelatedDoesNotExist({ id, model: Panel });
    const list = await new List(document).save();
    await Panel.findByIdAndUpdate(list.idPanel, { $push: { lists: list._id } });
    return list;
  } catch (err) {
    throw err
  }
}

const readAll = async () => {
  return await List.find();
}

const read = async (id) => {
  await checker.throwErrorIfDocumentDoesNotExist({ id, model: List });
  return await List.findById(id).populate('todos').exec();
}

const update = async (id, document) => {
  await checker.throwErrorIfDocumentDoesNotExist({ id, model: List });
  const list = await List.findById(id);
  const { idPanel } = document;
  const { idPanel: oldIdPanel } = list.toObject();
  if (idPanel) await checker.throwErrorIfRelatedDoesNotExist({ id: idPanel, model: Panel });
  list.set({ ...list.toObject(), ...document, updatedAt: Date.now() });
  await list.save();

  if (idPanel && idPanel !== oldIdPanel) {
    // add List Id to new panel
    await Panel.findByIdAndUpdate(idPanel, { $push: { lists: list._id } });
    // remove List Id from old panel
    await Panel.findByIdAndUpdate(oldIdPanel, { $pullAll: { lists: list._id } });
  }

  return list;
}

const remove = async (id) => {
  await checker.throwErrorIfDocumentDoesNotExist({ id, model: List });
  const { idPanel } = await List.findById(id).toObject();
  const result = await List.findOneAndDelete(id);
  if (result !== null) {
    await Todo.deleteMany({ idList: id });
    await Panel.findByIdAndUpdate(idPanel, { $pullAll: { lists: list._id } });
  }
  return result !== null;
}

module.exports = {
  create,
  readAll,
  read,
  update,
  remove
}