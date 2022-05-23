//--- Getting one news by id. ---//
const NewsList = require('../models').NewsList;

const deleteOneNews = async (req, res) => {
  try {
    await NewsList.destroy({ where: { id: req.params.id } });
    const restNews = await NewsList.findAll();
    res.status(200);
  } catch (e) {
    console.log('err', e);
  }
};

module.exports = deleteOneNews;
