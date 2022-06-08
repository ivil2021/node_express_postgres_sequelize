//--- Adding news function from models. ---//
const NewsList = require('../models').NewsList;

const addNews = async (req, res) => {
  //--- Simple data validation (fields shouldn't be empty). ---//
  if ( req.body.news_title === '' || req.body.news_text === '' ) {
    //--- Sending a message in case of invalid data ---//
    res.status(400).send('Icrorrect data');
  } else {
    try {
      const createdNews = await NewsList.create({
        news_title: req.body.news_title,
        news_text: req.body.news_text,
      });
      res.status(200).send(createdNews);
    } catch (e) {
      console.log('err', e);
    }
  }
};

module.exports = addNews;
