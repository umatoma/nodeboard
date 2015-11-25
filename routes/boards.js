var express = require('express');
var router = express.Router();

/* GET boards listing. */
router.get('/', function(req, res, next) {
  var boards = ['hoge', 'fuga'];
  res.render('boards/index', { boards: boards });
});

module.exports = router;
