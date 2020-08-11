const { Divers, Dive } = require('../models/models.js');
const diverController = {};

diverController.addDiver = async (req, res, next) => {
  try {
    const diver = await Divers.create(req.body);
    res.locals.diver = diver;
    next();
  } catch (err) {
    next(err);
  }
};

diverController.addDive = async (req, res, next) => {
  try {
    const { diverNumber, date, location, depth, visibility, notes } = req.body;
    await Divers.update(
      { diverNumber },
      { $addToSet: { dives: { date, location, depth, visibility, notes } } }
    );
    next();
  } catch (err) {
    next(err);
  }
};

diverController.getDiver = async (req, res, next) => {
  try {
    const diver = await Divers.find({ diverNumber: req.body.diverNumber });
    res.locals.diver = diver;
    next();
  } catch (err) {
    next(err);
  }
};

diverController.getDivers = async (req, res, next) => {
  try {
    const divers = await Divers.find({});
    res.locals.divers = divers;
    next();
  } catch (err) {
    next(err);
  }
};

module.exports = diverController;
