const router = require('express').Router();
const { checkErrors } = require('../services/errors');
const TodoService = require('../services/TodoService');
const {
  validateCreateTodo,
  validateUpdateTodo,
  validatePatchTodo,
} = require('./validations/todos');

router.get('/', async (req, res, next) => {
  const todos = await TodoService.readAll();
  res.json(todos);
});

router.get('/:id', async (req, res, next) => {
  const { id } = req.params;
  const todo = await TodoService.read(id);
  res.json(todo);
});

router.post('/', validateCreateTodo, async (req, res, next) => {
  const document = req.body;
  const todo = await TodoService.create(document);
  res.status(201).json(todo);
});

router.put('/:id', validateUpdateTodo, async (req, res, next) => {
  const document = req.body;
  const { id } = req.params;
  const todo = await TodoService.update(id, document);
  res.json(todo);
});

router.patch('/:id', validatePatchTodo, async (req, res, next) => {
  const document = req.body;
  const { id } = req.params;
  const todo = await TodoService.update(id, document);
  res.json(todo);
});

router.delete('/:id', async (req, res, next) => {
  const { id } = req.params;
  const deleted = await TodoService.remove(id);
  res.json(deleted);
});

module.exports = router;