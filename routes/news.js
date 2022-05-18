var express = require('express');
var router = express.Router();

var addNews = require('../controllers/addNews');
var getNewsList = require('../controllers/getNewsList');
var getOneNews = require('../controllers/getOneNews');
var findByTitle = require('../controllers/findByTitle');

// ЭТО РОУТЫ УРОВНЯ МАРШРУТИЗАЦИИ
// ЗДЕСЬ ПРОПИСЫВАЕМ РОУТ ДЛЯ КАЖДОЙ ОПЕРАЦИИ
// ДОБАВЛЕНИЕ ОДНОЙ НОВОСТИ, ПОЛУЧЕНИЕ СПИСКА НОВОСТЕЙ, ПОЛУЧЕНИЕ ОДНОЙ НОВОСТИ ПО ID,
// УДАЛЕНИЕ НОВОСТИ, ПОИСК НОВОСТИ ПО ЗАГОЛОВКУ, РЕДАКТИРОВАНИЕ НОВОСТИ

//--- Route for adding news. ---//
router.post('/', addNews); // post https:/localhost:300/news

//--- Route for getting list of news. ---//
router.get('/', getNewsList);

//--- Route for finding one news by title. ---//
// NEED TO MOVE IT UP AND ADD MORE SPECIFIC PREFIX I DO NOT UNDERSTRAND WHY
router.get('/find-by-title/:title', findByTitle);
// NEED TO MOVE IT UP AND ADD MORE SPECIFIC PREFIX I DO NOT UNDERSTRAND WHY

//--- Route for getting one news by id. ---//
router.get('/:id', getOneNews);

// router.get('/:id', getNewsList);

module.exports = router;

// https:/localhost:300/news

//delete  https:/localhost:300/news/:id
//update https:/localhost:300/news/:id

// The first argument - path.
// The second argument - adding news function from controllers.
