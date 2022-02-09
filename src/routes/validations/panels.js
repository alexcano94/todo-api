const { validateRoute } = require('express-ajv-middleware');

const validateCreatePanel = validateRoute({
  body: {
    type: 'object',
    properties: {
      name: {
        type: "string"
      },
      lists: {
        type: "array"
      }
    },
    required: [
      "name",
      "lists"
    ]
  }
});

const validateUpdatePanel = validateRoute({
  body: {
    type: 'object',
    properties: {
      name: {
        type: "string"
      },
      lists: {
        type: "array"
      }
    },
    required: [
      "name",
      "lists"
    ]
  }
});

const validatePatchPanel = validateRoute({
  body: {
    type: 'object',
    properties: {
      name: {
        type: "string"
      },
      lists: {
        type: "array"
      }
    },
    required: [],
  }
});

module.exports = {
  validateCreatePanel,
  validatePatchPanel,
  validateUpdatePanel,
} 