const mongoose = require('mongoose');

module.exports = {
  title: String,
  description: String,
  idList: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'List',
  },
  completed: {
    type: Boolean,
    default: false,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },
  completionDate: Date,
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
}