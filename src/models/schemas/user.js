const mongoose = require('mongoose');
const { encryptPassword } = require('./../../helpers/password');

const userSchema = new mongoose.Schema({
  email: String,
  password: String,
  panels: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Panel',
    }
  ],
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

userSchema.pre('save', async function (next) {
  const user = this;
  if (user.isModified('password')) {
    user.password = await encryptPassword(user.password);
  }
  next();
});

module.exports = userSchema;