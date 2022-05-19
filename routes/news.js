var express = require('express');
var router = express.Router();

var addNews = require('../controllers/addNews');
var getNewsList = require('../controllers/getNewsList');
var getOneNews = require('../controllers/getOneNews');
var findByTitle = require('../controllers/findByTitle');

// ЭТО РОУТЫ УРОВНЯ МАРШРУТИЗАЦИИ
// ЗДЕСЬ ПРОПИСЫВАЕМ РОУТЫ ДЛЯ КАЖДОЙ ОПЕРАЦИИ, КАСАЮЩИЕСЯ НОВОСТЕЙ

//--- Route for adding news. ---//
router.post('/', addNews); // post https:/localhost:300/news

//--- Route for getting list of news. ---//
router.get('/', getNewsList);

//--- Route for finding one news by title. ---//
// NEED TO MOVE IT UP AND ADD MORE SPECIFIC PREFIX
router.get('/find-by-title', findByTitle);

//--- Route for getting one news by id. ---//
router.get('/:id', getOneNews);

module.exports = router;

//delete  https:/localhost:300/news/:id
//update https:/localhost:300/news/:id
