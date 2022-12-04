var express = require('express');
var router = express.Router();
var db = require('./db.json')

//temporary image wrapper. Fill be fixed in the real DB
Object.keys(db).map(x => {
    const categories = db[x]

    Object.keys(categories).map(y => {
        const food = categories[y];

        if (food.image) {
            db[x][y].image = 'http://localhost:3001/images/' + food.image;
        }
    })
})

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
    res.json(getCategory(req));
});


/* GET food from specific category. */
router.get('/:categoryId/:foodId', function (req, res) {
    res.json(getFood(req));
});

function getCategory(req) {
    const {categoryId} = req.params;
    return db[categoryId]
}

function getFood(req) {
    const {foodId} = req.params;
    return getCategory(req)[foodId]
}

module.exports = router;
