const router = require('express').Router();
const { checkErrors } = require('../services/errors');
const ServicePanel = require('../services/PanelService');

const {
  validateCreatePanel,
  validateUpdatePanel,
  validatePatchPanel,
} = require('./validations/panels');

router.get('/', async (req, res, next) => {
  try {
    const panels = await ServicePanel.readAll();
    res.json(panels);
  } catch (err) {
    next(err);
  }
});

router.get('/:id', async (req, res, next) => {
  try {
    const { id } = req.params;
    const panel = await ServicePanel.read(id);
    res.json(panel);
  } catch (err) {
    next(err);
  }

});

router.post('/', validateCreatePanel, async (req, res, next) => {
  const document = req.body;
  const { userId } = req;
  try {
    await ServicePanel.create({ ...document, user: userId });
    res.status(201).json();
  } catch (err) {
    next(err);
  }
});

router.put('/:id', validateUpdatePanel, async (req, res, next) => {
  try {
    const document = req.body;
    const { id } = req.params;
    const panel = await ServicePanel.update(id, document);
    res.json(panel);
  } catch (err) {
    next(err);
  }
});

router.patch('/:id', validatePatchPanel, async (req, res, next) => {
  try {
    const document = req.body;
    const { id } = req.params;
    const panel = await ServicePanel.update(id, document);
    res.json(panel)
  } catch (err) {
    next(err);
  }
});

router.delete('/:id', async (req, res, next) => {
  try {
    const { id } = req.params;
    const deleted = await ServicePanel.remove(id);
    res.json(deleted);
  } catch (err) {
    next(err);
  }

});

module.exports = router;