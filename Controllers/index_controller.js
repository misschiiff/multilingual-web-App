var express = require('express');
var router = express.Router();
const i18next = require('i18next');


class IndexController {
    static list(req, res, next) {
        res.render('index', { title: 'Express' });
    }
}

module.exports = IndexController;

var express = require('express');
var router = express.Router();
const IndexContoller = require('../controllers/index_controller.');
/* GET home page. */
router.get('/', IndexContoller.list);

module.exports = router;