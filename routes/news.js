var express = require('express');
var router = express.Router();

var addNews = require('../controllers/addNews');

//--- Route for getting news. ---//
router.get('/', function (req, res, next) { // get https:/localhost:300/news
  res.render('index', { title: 'Express' }); // get news list
});

// The first argument - path.
// The second argument - adding news function from controllers.
router.post('/', addNews); // post https:/localhost:300/news
//delete  https:/localhost:300/news/:id
//update https:/localhost:300/news/:id

module.exports = router;

// https:/localhost:300/news
