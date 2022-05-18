//--- Getting one news by title. ---//
const NewsList = require('../models').NewsList;

const findByTitle = async (req, res) => {
  try {
    const oneNews = await NewsList.findOne({
      where: { news_title: req.params.title },
    });
    res.status(200).send(oneNews);
  } catch (e) {
    console.log('err', e);
  }
};

module.exports = findByTitle;
