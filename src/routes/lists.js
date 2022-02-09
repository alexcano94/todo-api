const router = require('express').Router();
const { checkErrors } = require('../services/errors');
const ServiceList = require('../services/ListService');

const {
  validateCreateList,
  validateUpdateList,
  validatePatchList,
} = require('./validations/lists');

router.get('/', async (req, res, next) => {
  const lists = await ServiceList.readAll();
  res.json(lists);
});

router.get('/:id', (req, res, next) => {
  const { id } = req.params;
  res.json();
});

router.post('/', validateCreateList, async (req, res, next) => {
  const document = req.body;
  await ServiceList.create(document);
  res.status(201).json();
});

router.put('/:id', validateUpdateList, (req, res, next) => {
  const data = req.body;
  const { id } = req.params;
  res.json()
});

router.patch('/:id', validatePatchList, (req, res, next) => {
  const data = req.body;
  const { id } = req.params;
  res.json()
});

router.delete('/:id', (req, res, next) => {
  res.json()
});

module.exports = router;