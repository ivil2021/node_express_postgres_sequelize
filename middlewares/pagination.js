const NewsList = require('../models').NewsList;

const pagination = async (req, res, next) => {
  // TODO: to delete after final cheking
  // const page  = req.query.page;
  // const limit = req.query.limit;
  // It's the same, but in one row.
  const { page, limit } = req.query;
  const offset = page * limit - limit;

  // TODO: to delete after final cheking
  // console.log('page:', page);
  // console.log('limit:', limit);
  // console.log('offset:', offset);

  req.pagination = {
    offset,
    limit,
    page,
  };

  next();
};

module.exports = pagination;