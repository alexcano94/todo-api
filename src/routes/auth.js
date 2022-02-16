const router = require('express').Router();
const AuthService = require('../services/AuthService');
const { validateLogin, validateRegister } = require('../routes/validations/auth');
const { createToken } = require('../helpers/token');

router.post('/register', validateRegister, async (req, res, next) => {
  const { email, password } = req.body;
  try {
    const user = await AuthService.register({ email, password });
    const token = await createToken({ userId: user._id });
    return res.json({ token });
  } catch (err) {
    next(err);
  }
});

router.post('/login', validateLogin, async (req, res, next) => {
  const { email, password } = req.body;
  try {
    const user = await AuthService.login({ email, password });
    const token = await createToken({ userId: user._id });
    return res.json({ token });
  } catch (err) {
    next(err);
  }
});

module.exports = router;