const { validateRoute } = require('express-ajv-middleware');

const validateCreateTodo = validateRoute({
  body: {
    type: 'object',
    properties: {
      title: {
        type: "string"
      },
      description: {
        type: "string"
      },
      idList: {
        type: "string"
      },
    },
    required: [
      "title",
      "description",
      "idList",
    ]
  }
});

const validateUpdateTodo = validateRoute({
  body: {
    type: 'object',
    properties: {
      title: {
        type: "string"
      },
      description: {
        type: "string"
      },
      idList: {
        type: "string"
      },
      completed: {
        type: "boolean"
      }
    },
    required: [
      "title",
      "description",
      "idList",
      "completed"
    ]
  }
});

const validatePatchTodo = validateRoute({
  body: {
    type: 'object',
    properties: {
      title: {
        type: "string"
      },
      description: {
        type: "string"
      },
      idList: {
        type: "string"
      },
      completed: {
        type: "boolean"
      }
    },
    required: [],
  }
});

module.exports = {
  validateCreateTodo,
  validatePatchTodo,
  validateUpdateTodo,
} 