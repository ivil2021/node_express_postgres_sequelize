//--- Getting one news by id. ---//
const NewsList = require('../models').NewsList;

const getOneNews = async (req, res) => {
  try {
    const oneNews = await NewsList.findOne({ where: { id: req.params.id } });
    res.status(200).send(oneNews);
  } catch (e) {
    console.log('err', e);
  }
};

module.exports = getOneNews;
