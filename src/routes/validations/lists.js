const { validateRoute } = require('express-ajv-middleware');

const validateCreateList = validateRoute({
  body: {
    type: 'object',
    properties: {
      title: {
        type: "string"
      },
      idPanel: {
        type: "string"
      },
      todos: {
        type: "array"
      }
    },
    required: [
      "title",
      "idPanel",
      "todos"
    ]
  }
});

const validateUpdateList = validateRoute({
  body: {
    type: 'object',
    properties: {
      title: {
        type: "string"
      },
      idPanel: {
        type: "string"
      },
      todos: {
        type: "array"
      }
    },
    required: [
      "title",
      "idPanel",
      "todos"
    ]
  }
});

const validatePatchList = validateRoute({
  body: {
    type: 'object',
    properties: {
      title: {
        type: "string"
      },
      idPanel: {
        type: "string"
      },
      todos: {
        type: "array"
      }
    },
    required: [],
  }
});

module.exports = {
  validateCreateList,
  validatePatchList,
  validateUpdateList,
} 