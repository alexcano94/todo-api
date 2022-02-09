const router = require('express').Router();
const { checkErrors } = require('../services/errors');
const {
  validateCreateTodo,
  validateUpdateTodo,
  validatePatchTodo,
} = require('./validations/todos');

router.get('/', (req, res, next) => {

  res.json();
});

router.get('/:id', (req, res, next) => {
  const { id } = req.params;
  res.json();
});

router.post('/', validateCreateTodo, (req, res, next) => {
  const data = req.body;
  res.status(201).json();
});

router.put('/:id', validateUpdateTodo, (req, res, next) => {
  const data = req.body;
  const { id } = req.params;
  res.json()
});

router.patch('/:id', validatePatchTodo, (req, res, next) => {
  const data = req.body;
  const { id } = req.params;
  res.json()
});

router.delete('/:id', (req, res, next) => {
  res.json()
});

module.exports = router;