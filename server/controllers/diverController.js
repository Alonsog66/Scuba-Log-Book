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
    console.log(req.body);
    const { diverNumber, date, location, depth, visibility, notes } = req.body;
    console.log(diverNumber, date, location, depth, visibility, notes);
    await Divers.update(
      { diverNumber },
      { $addToSet: { dives: { date, location, depth, visibility, notes } } }
    );
    const diver = await Divers.findOne({ diverNumber });
    res.locals.diver = diver;
    next();
  } catch (err) {
    next(err);
  }
};

diverController.getDiver = async (req, res, next) => {
  const { email, password } = req.query;
  try {
    const diver = await Divers.findOne({ email });
    if (diver.password !== password || !diver)
      return next({ err: 'Diver not found' });
    res.locals.diver = diver;
    return next();
  } catch (err) {
    return next({
      log: err,
      err: 'Diver not found',
    });
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
