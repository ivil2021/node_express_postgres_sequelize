//--- If there is a query - use query, otherwise - get list of news. ---//
const { Op, QueryTypes } = require('sequelize');

const { sequelize } = require('../models');
const NewsList = require('../models').NewsList;

const findByTitle = async (req, res) => {
  try {
    const { page, limit, offset } = req.pagination;

    const title = req.query.title;
    let requestedNews;
    let result;

    // If there is a title - filterCondition = `WHERE "news_title" = '${title}'`
    // otherwise - filterCondition = ''.
    const filterCondition = title ? `WHERE "news_title" = '${title}'` : '';

    // Select everything
    // from NewsList table
    // where "news_title" = '${title}'` or without that string at all (get all news)
    // sort by id
    // set limit to ${req.pagination.limit}
    // set offset to ${req.pagination.offset}.
    const query = `
    SELECT *
    FROM "NewsList"
    ${filterCondition}
    ORDER BY "NewsList"."id"
    LIMIT ${req.pagination.limit}
    OFFSET ${req.pagination.offset};
    `;

    // count the number of strings in the NewsList table
    // where "news_title" = '${title}'` or without that string at all (get all news)
    const countQuery = `SELECT count(*) AS "count" FROM "NewsList" ${filterCondition}`;

    // { type: QueryTypes.SELECT } HELPED TO GET NEWS WITHOUT USELESS DATA
    // google raw queries
    // https://sequelize.org/docs/v6/core-concepts/raw-queries/
    requestedNews = await sequelize.query(query, { type: QueryTypes.SELECT });

    const count = await sequelize.query(countQuery, { type: QueryTypes.SELECT });

    result = { page, limit, offset, count: count[0].count, requestedNews };

    res.status(200).send(result);
  } catch (e) {
    console.log('err', e);
  }
};

module.exports = findByTitle;
