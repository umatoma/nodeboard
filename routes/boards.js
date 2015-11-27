var models = require('../models');
var express = require('express');
var debug = require('debug')('nodeborard:routes');
var router = express.Router();
var Board = models.Board;

/* GET boards listing. */
router.get('/', function(req, res, next) {
  Board.findAll()
    .then(
      function(boards) {
        res.render('boards/index', { boards: boards });
      },
      function(err) {
        debug(err.message);
        next();
      }
    );
});

module.exports = router;
