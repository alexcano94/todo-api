const mongoose = require('mongoose');

module.exports = {
  title: String,
  idPanel: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Panel',
  },
  todos: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Todo',
    }
  ],
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
}