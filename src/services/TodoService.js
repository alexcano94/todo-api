const { Todo, List } = require('./../models/mongoose');
const checker = require('../services/errors');

const create = async (document) => {
  const { idList } = document;
  await checker.throwErrorIfRelatedDoesNotExist({ id: idList, model: List });
  await List.findByIdAndUpdate(todo.idList, { $push: { todos: todo._id } });
  return await new Todo(document).save();
}

const readAll = async () => {
  return await Todo.find().populate('lists').exec();
}

const read = async (id) => {
  await checker.throwErrorIfDocumentDoesNotExist({ id, model: Todo });
  return await Todo.findById(id);
}

const update = async (id, document) => {

  await checker.throwErrorIfDocumentDoesNotExist({ id, model: Todo });
  const todo = await Todo.findById(id);
  const { idList } = document;
  const { idList: oldIdList } = todo.toObject();
  if (idList) await checker.throwErrorIfRelatedDoesNotExist({ id: idList, model: List });

  // update the todo
  todo.set({ ...todo.toObject(), ...document, updatedAt: Date.now() });
  await todo.save();

  // if the list has changed 
  if (idList && idList !== oldIdList) {
    // add Todo Id to new list
    await List.findByIdAndUpdate(todo.idList, { $push: { todos: todo._id } });
    // remove Todo Id from old list
    await List.findByIdAndUpdate(oldIdList, { $pullAll: { todos: todo._id } });
  }
  return todo;
}

const remove = async (id) => {
  await checker.throwErrorIfDocumentDoesNotExist({ id, model: Todo });
  const { idList } = await Todo.findById(id).toObject();
  const result = await Todo.findByIdAndDelete(id);
  if (result !== null) {
    await List.findByIdAndUpdate(idList, { $pullAll: { todos: id } })
  }
  return result !== null;
}

module.exports = {
  create,
  readAll,
  read,
  update,
  remove,
}