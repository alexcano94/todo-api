const mongoose = require('mongoose');

module.exports = {
  name: String,
  lists: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'List',
    }
  ],
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
}