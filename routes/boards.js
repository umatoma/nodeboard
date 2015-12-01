var models = require('../models');
var express = require('express');
var debug = require('debug')('nodeborard:routes');
var router = express.Router();
var Board = models.Board;

/* GET boards listing. */
router.get('/', function(req, res, next) {
  Board.findAll()
    .then(function(boards) {
      res.render('boards/index', { boards: boards });
    }).error(function(err) {
      next();
    });
});

/* POST create board. */
router.post('/create', function(req, res, next) {
  Board.create({
    name: req.body.name
  }).finally(function() {
    res.redirect('./');
  });
});

module.exports = router;