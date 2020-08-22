const cookieController = {};

/**
 * setSSIDCookie - store the user id in a cookie
 */
cookieController.setSSIDCookie = (req, res, next) => {
  // write code here
  console.log(res.locals.diver);
  res.cookie('ssid', res.locals.diver.id, { httpOnly: true });
  next();
};

module.exports = cookieController;
