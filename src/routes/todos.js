const router = require('express').Router();
const { checkErrors } = require('../services/errors');
const TodoService = require('../services/TodoService');

const {
  validateCreateTodo,
  validateUpdateTodo,
  validatePatchTodo,
} = require('./validations/todos');

router.get('/', async (req, res, next) => {
  try {
    const todos = await TodoService.readAll();
    res.json(todos);
  } catch (err) {
    next(err);
  }
});

router.get('/:id', async (req, res, next) => {
  try {
    const { id } = req.params;
    const todo = await TodoService.read(id);
    res.json(todo);
  } catch (err) {
    next(err);
  }
});

router.post('/', validateCreateTodo, async (req, res, next) => {
  try {
    const document = req.body;
    const { userId } = req;
    const todo = await TodoService.create({ ...document, user: userId });
    res.status(201).json(todo);
  } catch (err) {
    next(err);
  }
});

router.put('/:id', validateUpdateTodo, async (req, res, next) => {
  try {
    const document = req.body;
    const { id } = req.params;
    const todo = await TodoService.update(id, document);
    res.json(todo);
  } catch (err) {
    next(err);
  }
});

router.patch('/:id', validatePatchTodo, async (req, res, next) => {
  try {
    const document = req.body;
    const { id } = req.params;
    const todo = await TodoService.update(id, document);
    res.json(todo);
  } catch (err) {
    next(err);
  }
});

router.delete('/:id', async (req, res, next) => {
  try {
    const { id } = req.params;
    const deleted = await TodoService.remove(id);
    res.json(deleted);
  } catch (err) {
    next(err);
  }
});

module.exports = router;