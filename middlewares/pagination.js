const NewsList = require('../models').NewsList;

const pagination = async (req, res, next) => {
  const { page, limit } = req.query;
  const offset = page * limit - limit;

  req.pagination = {
    offset,
    limit,
    page,
  };

  next();
};

module.exports = pagination;
