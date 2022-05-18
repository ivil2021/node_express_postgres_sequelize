//--- Getting list of news. ---//
const NewsList = require('../models').NewsList;

const getNewsList = async (req, res) => {
  try {
    console.log('--------------------------------------------');
    // console.log(req.query.id);
    console.log(req.query.id);

    //---В данном случае в метод передается необязательный объект {raw:true}, ---//
    //--- который позволяет получить непосредственно данны из БД в вид объектов без дополнительных метаданных. ---//
    // const receivedNewsList = await NewsList.findAll({raw:true});
    // что с {raw:true} что без него, все равно работает

    const receivedNewsList = await NewsList.findAll();
    res.status(200).send(receivedNewsList);
  } catch (e) {
    console.log('err', e);
  }
};

module.exports = getNewsList;