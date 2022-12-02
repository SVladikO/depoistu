var express = require('express');
var router = express.Router();
var db = require('./db.json')
const categories = Object.keys(db);

/* GET menu page. */
router.get('/', function (req, res) {
    res.json(db);
});

/* GET categories. */
router.get('/categories', function (req, res) {
    res.json(categories);
});

/* GET category details. */
router.get('/:categoryId', function (req, res) {
    const {categoryId} = req.params;
    res.json(db[categoryId]);
});

/* GET food from specific category. */
router.get('/:categoryId/:foodId', function (req, res) {
    res.render('index', {title: 'Express'});
});

module.exports = router;
