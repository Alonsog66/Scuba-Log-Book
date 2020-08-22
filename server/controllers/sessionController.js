const Session = require('../models/sessionModel.js');
const sessionController = {};

sessionController.isLoggedin = (req, res, next) => {
  const id = req.cookies.ssid;
  console.log(id);
  console.log('hi');
  Session.find({ cookieId: id }, (err, response) => {
    if (!response.length) return res.redirect('/');
    else next();
  });
};

module.exports = sessionController;
