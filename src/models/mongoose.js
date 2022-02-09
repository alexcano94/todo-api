require('dotenv').config();
const mongoose = require('mongoose');
const DB_URL = process.env.DB_URL;
const DATABASE = process.env.DATABASE;

mongoose.connect(`${DB_URL}/${DATABASE}`);

const todosSchema = require('./schemas/todos');
const listsSchema = require('./schemas/lists');
const panelSchema = require('./schemas/panel');

const Todo = mongoose.model('Todo', todosSchema);
const List = mongoose.model('List', listsSchema);
const Panel = mongoose.model('Panel', panelSchema);

module.exports = {
  Todo,
  List,
  Panel,
}