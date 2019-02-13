function isUser({ isUrl, notUrl } = { isUrl: null, notUrl: '/403' }) {
  return function (req, res, next) {
    if (req.user) {
      if (isUrl) {
        res.redirect(isUrl);
      } else {
        next();
      }
    } else {
      res.redirect(notUrl);
    }
  };
}

module.exports = isUser;
