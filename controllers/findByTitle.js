//--- If there is a query - use query, otherwise - get list of news. ---//
const { Op } = require('sequelize');
const { sequelize } = require('../models');

const NewsList = require('../models').NewsList;

const findByTitle = async (req, res) => {
  try {
    console.log('======================', req.pagination);
    const page = req.pagination.page;
    const limit = req.pagination.limit;
    const offset = req.pagination.offset;

    // TODO: TO UNDERSTAND
    // 1 OPTION
    const title = req.query.title;
    const condition = title
      ? { news_title: { [Op.iLike]: `%${title}%` } }
      : null;
    const news = await NewsList.findAll({ where: condition });
    // res.status(200).send(news);

    console.log('it works');

    ///////////////////////////////////////////////
    // const currentNews = await NewsList.findAll({ where: condition });

    const query = `
                SELECT *
                FROM "NewsList"
                ORDER BY "NewsList"."id"
                LIMIT ${req.pagination.limit}
                OFFSET ${req.pagination.offset};
        `;

    const requestedNews = await sequelize.query(query);
    const asdas = {page, limit, offset, ...requestedNews[0]};

    // res.status(200).send(requestedNews[0]);
    res.status(200).send(asdas);
    ///////////////////////////////////////////////

    // const limit = 3;
    // console.log('limit:', limit);

    // let newsAmount = news.length;
    // console.log('newsAmount:', newsAmount);

    // let totalPages = Math.ceil(newsAmount / limit);
    // console.log('totalPages:', totalPages);

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
