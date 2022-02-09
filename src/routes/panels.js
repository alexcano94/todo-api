const router = require('express').Router();
const { checkErrors } = require('../services/errors');
const ServicePanel = require('../services/PanelService');

const {
  validateCreatePanel,
  validateUpdatePanel,
  validatePatchPanel,
} = require('./validations/panels');

router.get('/', async (req, res, next) => {
  const panels = await ServicePanel.readAll();
  res.json(panels);
});

router.get('/:id', async (req, res, next) => {
  const { id } = req.params;
  const panel = await ServicePanel.read(id);
  res.json(panel);
});

router.post('/', validateCreatePanel, async (req, res, next) => {
  const document = req.body;
  try {
    await ServicePanel.create(document);
    res.status(201).json();
  } catch (err) {
    checkErrors({ err, res });
  }
});

router.put('/:id', validateUpdatePanel, async (req, res, next) => {
  const document = req.body;
  const { id } = req.params;
  const panel = await ServicePanel.update(id, document);
  res.json(panel);
});

router.patch('/:id', validatePatchPanel, async (req, res, next) => {
  const document = req.body;
  const { id } = req.params;
  const panel = await ServicePanel.update(id, document);
  res.json(panel)
});

router.delete('/:id', async (req, res, next) => {
  const { id } = req.params;
  const deleted = await ServicePanel.remove(id);
  res.json(deleted);
});

module.exports = router;