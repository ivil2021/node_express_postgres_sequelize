//--- If there is a query - use query, otherwise - get list of news. ---//
const { Op, QueryTypes } = require('sequelize');

const { sequelize } = require('../models');
const NewsList = require('../models').NewsList;

const findByTitle = async (req, res) => {
  try {
    // TODO: to delete after final check
    // const page = req.pagination.page;
    // const limit = req.pagination.limit;
    // const offset = req.pagination.offset;
    const { page, limit, offset } = req.pagination;

    // TODO: TO UNDERSTAND
    // 1 OPTION
    ////////////////////////////////
    // const title = req.query.title;
    // const condition = title ? { news_title: { [Op.iLike]: `%${title}%` } } : null;
    // const news = await NewsList.findAll({ where: condition });
    // res.status(200).send(news);
    ////////////////////////////////

    // const query = `
    //   SELECT *
    //   FROM "NewsList"
    //   ORDER BY "NewsList"."id"
    //   LIMIT ${req.pagination.limit}
    //   OFFSET ${req.pagination.offset};
    // `;

    const query = `
    WITH DATA AS (
      SELECT "id", COUNT(*) AS count FROM "NewsList" GROUP BY "id"
    ) SELECT *
    FROM "NewsList"
    ORDER BY "NewsList"."id"
    LIMIT ${req.pagination.limit}
    OFFSET ${req.pagination.offset};
    `;

    const title = req.query.title;
    let requestedNews;
    let result;

    if (title) {
      // const condition = title ? { news_title: { [Op.iLike]: `%${title}%` } } : null;
      const condition = { news_title: { [Op.iLike]: `%${title}%` } };
      requestedNews = await NewsList.findAll({ where: condition });
      res.status(200).send(requestedNews);
    }

    // { type: QueryTypes.SELECT } HELPED TO GET NEWS WITHOUT USELESS DATA
    // google raw queries
    // https://sequelize.org/docs/v6/core-concepts/raw-queries/
    requestedNews = await sequelize.query(query, { type: QueryTypes.SELECT });

    // Getting the list of all news
    // count = the length of listOfAllNews array
    let listOfAllNews = await NewsList.findAll();
    // let count = listOfAllNews.length;

    let count = await NewsList.count();
    console.log('count: ', count);

    result = { page, limit, offset, count, requestedNews };
    // console.log('result from findByTitle: ', result);

    res.status(200).send(result);
    // }

    // const requestedNews = await sequelize.query(query);
    // const result = {page, limit, offset, ...requestedNews[0]};
    // res.status(200).send(result);

    // TODO: TO UNDERSTAND
    // 2 OPTION
    // if (req.query.title) {
    //   const news = await NewsList.findAll({
    //     // where: { news_title: req.query.title },
    //     // where: { news_text: req.query.text },
    //     where: { news_title: { [Op.iLike]: `%${req.query.title}%` } },
    //   });
    //   res.status(200).send(news);
    // } else {
    //   const news = await NewsList.findAll();
    //   res.status(200).send(news);
    // }

    // TODO: TO UNDERSTAND
    // 3 OPTION
    // let condition = { where: null };
    // if (req.query.title) {
    //   condition = { where: { news_title: { [Op.iLike]: `%${req.query.title}%` } } }
    // }
    // const news = await NewsList.findAll(condition);
    // res.status(200).send(news);

    // TODO: TO UNDERSTAND
    // 4 OPTION
    // res.status(200).send(await NewsList.findAll({ where: req.query.title ? { news_title: { [Op.iLike]: `%${req.query.title}%` } } : null }));
  } catch (e) {
    console.log('err', e);
  }
};

module.exports = findByTitle;
