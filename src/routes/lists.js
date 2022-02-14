const router = require('express').Router();
const { checkErrors } = require('../services/errors');
const ServiceList = require('../services/ListService');

const {
  validateCreateList,
  validateUpdateList,
  validatePatchList,
} = require('./validations/lists');

router.get('/', async (req, res, next) => {
  try {
    const lists = await ServiceList.readAll();
    res.json(lists);
  } catch (err) {
    next(err);
  }
});

router.get('/:id', async (req, res, next) => {
  try {
    const { id } = req.params;
    const list = await ServiceList.read(id);
    res.json(list);
  } catch (err) {
    next(err);
  }
});

router.post('/', validateCreateList, async (req, res, next) => {
  try {
    const document = req.body;
    await ServiceList.create(document);
    res.status(201).json();
  } catch (err) {
    next(err);
  }
});

router.put('/:id', validateUpdateList, async (req, res, next) => {
  try {
    const document = req.body;
    const { id } = req.params;
    const list = await ServiceList.update(id, document);
    res.json(list);
  } catch (err) {
    next(err);
  }
});

router.patch('/:id', validatePatchList, async (req, res, next) => {
  try {
    const document = req.body;
    const { id } = req.params;
    const list = await ServiceList.update(id, document);
    res.json(list);
  } catch (err) {
    next(err);
  }
});

router.delete('/:id', async (req, res, next) => {
  try {
    const { id } = req.params;
    const deleted = await ServiceList.remove(id);
    res.json(deleted);
  } catch (err) {
    next(err);
  }
});

module.exports = router;