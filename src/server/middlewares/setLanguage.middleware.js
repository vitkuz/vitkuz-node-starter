function setLanguage() {
  return function (req, res, next) {
    req.session.language = req.query.lang || req.body.lang || req.params.lang || 'ru';
    next();
  };
}

module.exports = setLanguage;
