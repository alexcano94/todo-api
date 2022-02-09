const { List, Panel } = require('./../models/mongoose');

const create = async (document) => {
  const list = await new List(document).save();
  await Panel.findByIdAndUpdate(list.idPanel, { $push: { lists: list._id } });
  return
}

const readAll = async () => {
  return await List.find()
}

module.exports = {
  create,
  readAll,
}