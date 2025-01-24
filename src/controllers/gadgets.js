const { Gadget } = require('../models');
const generateCodename = require('../utils/generateCodename');

exports.getAllGadgets = async (req, res) => {
  try {
    const { status } = req.query;
    const validStatuses = ['Available', 'Deployed', 'Destroyed', 'Decommissioned'];

    if (status && !validStatuses.includes(status)) {
      return res.status(400).send('Invalid status parameter');
    }

    const queryOptions = {};
    if (status) {
      queryOptions.where = { status };
    }

    const gadgets = await Gadget.findAll(queryOptions);

    const response = gadgets.map(g => ({
      ...g.toJSON(),
      successProbability: Math.floor(Math.random() * 100),
    }));

    res.json(response);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.createGadget = async (req, res) => {
  try {
    const codename = await generateCodename();
    const gadget = await Gadget.create({
      ...req.body,
      codename,
    });
    res.status(201).json(gadget);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

exports.updateGadget = async (req, res) => {
  try {
    const { id } = req.params;
    const gadget = await Gadget.findByPk(id);

    if (!gadget) {
      return res.status(404).send('Gadget not found');
    }

    await gadget.update(req.body);
    res.json(gadget);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

exports.decommissionGadget = async (req, res) => {
  try {
    const { id } = req.params;
    const gadget = await Gadget.findByPk(id);

    if (!gadget) {
      return res.status(404).send('Gadget not found');
    }

    await gadget.update({
      status: 'Decommissioned',
      decommissionedAt: new Date(),
    });
    res.json(gadget);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

exports.selfDestruct = async (req, res) => {
  try {
    const { id } = req.params;
    const gadget = await Gadget.findByPk(id);

    if (!gadget) {
      return res.status(404).send('Gadget not found');
    }

    if (gadget.status === 'Destroyed') {
      return res.status(400).send('Gadget is already destroyed');
    }

    const confirmationCode = Math.random().toString(36).slice(2, 8).toUpperCase();

    await gadget.update({
      status: 'Destroyed',
    });

    res.json({
      message: 'Self-destruct sequence initiated',
      confirmationCode,
      gadget,
    });
  } catch (error) {
    res.status(400).send(error.message);
  }
};
