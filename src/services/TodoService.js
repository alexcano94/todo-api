const { Todo } = require('./../models/mongoose');

const create = async (document) => {
  return await new Todo(document).save();
}

const readAll = async () => {
  return await Todo.find().populate('lists').exec();
}

const read = async (id) => {
  return await Todo.findById(id);
}

const update = async (id, document) => {
  const todo = await Todo.findById(id);
  todo.set({ ...todo.toObject(), ...document, updatedAt: Date.now() });
  await todo.save();
  return todo;
}

const remove = async (id) => {
  const result = await Todo.findByIdAndDelete(id);
  return result !== null;
}

module.exports = {
  create,
  readAll,
  read,
  update,
  remove,
}