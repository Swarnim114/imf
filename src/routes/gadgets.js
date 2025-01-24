const express = require('express');
const gadgetsController = require('../controllers/gadgets'); // Ensure this path is correct

const router = express.Router();

// GET /gadgets - Get all gadgets
router.get('/', gadgetsController.getAllGadgets);

// POST /gadgets - Create a new gadget
router.post('/', gadgetsController.createGadget);

// PATCH /gadgets/:id - Update a gadget
router.patch('/:id', gadgetsController.updateGadget);

// DELETE /gadgets/:id - Decommission a gadget
router.delete('/:id', gadgetsController.decommissionGadget);

// POST /gadgets/:id/self-destruct - Trigger self-destruct for a gadget
router.post('/:id/self-destruct', gadgetsController.selfDestruct);

module.exports = router;
