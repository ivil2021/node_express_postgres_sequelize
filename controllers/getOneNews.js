//--- Getting one news by id. ---//
const NewsList = require('../models').NewsList;

const getOneNews = async (req, res) => {
  try {
    console.log('=======================');
    console.log(req.params.id);
    // console.log(req.query.id);
    const oneNews = await NewsList.findOne({ where: { id: req.params.id } });
    res.status(200).send(oneNews);
  } catch (e) {
    console.log('err', e);
  }
};

module.exports = getOneNews;
