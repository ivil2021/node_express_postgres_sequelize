let express = require('express');
let router = express.Router();

let addNews = require('../controllers/addNews');
let getOneNews = require('../controllers/getOneNews');
let findByTitle = require('../controllers/findByTitle');
let deleteOneNews = require('../controllers/deleteOneNews');
let updateOneNews = require('../controllers/updateOneNews');
const pagination = require('../middleware/pagination');

// Here there are routes of routing level.
// We should place here all routes for different actions with news.
//--- Route for adding news. ---//
// post https:/localhost:300/news
router.post('/', addNews);

//--- Route for finding news by query. If there is no query - get list of news . ---//
//--- NEED TO MOVE IT UP AND ADD MORE SPECIFIC PREFIX. ---//
// http://localhost:3000/news/find-by-title (without query)
// http://localhost:3000/news/find-by-title?title=hot (with query - title = hot)


// router.get('/find-by-title', findByTitle);
router.get('/find-by-title', pagination, findByTitle);

//--- Route for getting one news by id. ---//
router.get('/:id', getOneNews);

//--- Route for deleting one news by id. ---//
// http://localhost:3000/news/10
router.delete('/:id', deleteOneNews);

//--- Route for updating one news by id. ---//
// http://localhost:3000/news/34
router.put('/:id', updateOneNews);

module.exports = router;
