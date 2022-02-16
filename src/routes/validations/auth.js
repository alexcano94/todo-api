const { validateRoute } = require('express-ajv-middleware');

const validateLogin = validateRoute({
  body: {
    type: 'object',
    properties: {
      email: {
        type: "string"
      },
      password: {
        type: "string"
      },
    },
    required: [
      "email",
      "password",
    ]
  }
});

const validateRegister = validateRoute({
  body: {
    type: 'object',
    properties: {
      email: {
        type: "string"
      },
      password: {
        type: "string"
      },
    },
    required: [
      "email",
      "password",
    ]
  }
});

module.exports = {
  validateLogin,
  validateRegister,
}