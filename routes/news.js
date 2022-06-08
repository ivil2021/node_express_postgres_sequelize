const express = require('express');
const router = express.Router();

const addNews = require('../controllers/addNews');
const getOneNews = require('../controllers/getOneNews');
const findByTitle = require('../controllers/findByTitle');
const deleteOneNews = require('../controllers/deleteOneNews');
const updateOneNews = require('../controllers/updateOneNews');
const pagination = require('../middlewares/pagination');

// Here there are routes of routing level.
// We should place here all routes for different actions with news.

//--- Route for adding news. ---//
// post https:/localhost:300/news
router.post('/', addNews);

//--- Route for getting news by title or getting all news. ---//
// router.get('/find-by-title', pagination, findByTitle);
// pagination - middleware.
router.get('/find-by-title', pagination, findByTitle);

//--- Route for getting one news by id. ---//
// http://localhost:3000/news/5
router.get('/:id', getOneNews);

//--- Route for deleting one news by id. ---//
// http://localhost:3000/news/10
router.delete('/:id', deleteOneNews);

//--- Route for updating one news by id. ---//
// http://localhost:3000/news/34
router.put('/:id', updateOneNews);

module.exports = router;
