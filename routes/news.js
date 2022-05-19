var express = require('express');
var router = express.Router();

var addNews = require('../controllers/addNews');
var getOneNews = require('../controllers/getOneNews');
var findByTitle = require('../controllers/findByTitle');
var deleteOneNews = require('../controllers/deleteOneNews');

// Here there are routes of routing level.
// We should place here all routes for different actions with news.
//--- Route for adding news. ---//
// post https:/localhost:300/news
router.post('/', addNews);

//--- Route for finding news by query. If there is no query - get list of news . ---//
//--- NEED TO MOVE IT UP AND ADD MORE SPECIFIC PREFIX. ---//
// http://localhost:3000/news/find-by-title (without query)
// http://localhost:3000/news/find-by-title?title=hot (with query - title = hot)
router.get('/find-by-title', findByTitle);

//--- Route for getting one news by id. ---//
router.get('/:id', getOneNews);

//--- Route for deleting one news by id. ---//
// http://localhost:3000/news/10
router.delete('/:id', deleteOneNews);

module.exports = router;

//delete  https:/localhost:300/news/:id
//update https:/localhost:300/news/:id
