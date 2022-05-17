var express = require('express');
var router = express.Router();

var addNews = require('../controllers/addNews');
var getNewsList = require('../controllers/getNewsList');

//--- Route for adding news. ---//
router.post('/', addNews); // post https:/localhost:300/news

//--- Route for getting list of news. ---//
router.get('/', getNewsList);

// router.get('/:id', getNewsList);

module.exports = router;

// https:/localhost:300/news

//delete  https:/localhost:300/news/:id
//update https:/localhost:300/news/:id

// The first argument - path.
// The second argument - adding news function from controllers.
