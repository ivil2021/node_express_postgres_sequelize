//--- Getting one news by id. ---//
// const NewsList = require('../models').NewsList;

// const getOneNews = async (req, res) => {
//   try {
//     const oneNews = await NewsList.findByPk(2);
//     res.status(200).send(oneNews);
//   } catch (e) {
//     console.log('err', e);
//   }
// };

// module.exports = getOneNews;

// Получение одного объекта
// Нередко необходимо получить лишь один объект из БД. В этом случае мы можем использовать такие методы как findByPk() (получает объект по первичному ключу) и findOne() (получает один объект по определенному критерию). Например, получим пользователя с id=2:
// User.findByPk(2)
// .then(user=>{
//     if(!user) return; // если пользователь не найден
//     console.log(user.name);
// }).catch(err=>console.log(err));
// Или получим одного пользователя с именем Tom:

// 1
// 2
// 3
// 4
// 5
// User.findOne({where: {name: "Tom"}})
// .then(user=>{
//     if(!user) return;
//     console.log(user.name, user.age);
// }).catch(err=>console.log(err));
