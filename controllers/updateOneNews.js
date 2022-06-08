//--- Updating one news by id. ---//
const NewsList = require('../models').NewsList;

const updateOneNews = async (req, res) => {
  try {
    await NewsList.update( { 
        news_title: req.body.news_title,
        news_text: req.body.news_text,
      },
      { where: { id: req.params.id } }
    );
    const updatedNews = await NewsList.findOne({ where: { id: req.params.id } });
    res.status(200).send(updatedNews);
  } catch (e) {
    console.log('err', e);
  }
};

module.exports = updateOneNews;
