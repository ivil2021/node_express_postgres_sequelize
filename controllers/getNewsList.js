//--- Getting list of news. ---//
const NewsList = require('../models').NewsList;

const getNewsList = async (req, res) => {
  try {
    console.log('--------------------------------------------');
    const receivedNewsList = await NewsList.findAll();
    res.status(200).send(receivedNewsList);
  } catch (e) {
    console.log('err', e);
  }
};

module.exports = getNewsList;
