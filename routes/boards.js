var models = require('../models');
var express = require('express');
var debug = require('debug')('nodeborard:routes');
var Promise = require('bluebird');
var router = express.Router();
var Board = models.Board;
var Post = models.Post;

/* GET boards listing. */
router.get('/', function(req, res, next) {
  Board.findAll()
    .then(function(boards) {
      res.render('boards/index', { boards: boards });
    }).catch(function(err) {
      next();
    });
});

/* GET board detail. */
router.get('/:board_id', function(req, res, next) {
  Board.findById(req.params.board_id, { include: [Post] })
    .then(function(board) {
      if (board == null) {
        return Promise.reject(new error('Board is missing...'));
      }
      res.render('boards/show', { board: board, posts: board.Posts });
    }).catch(function(err) {
      next();
    });
});

/* POST create board. */
router.post('/create', function(req, res, next) {
  Board.create({
    name: req.body.name
  }).then(function() {
    res.redirect('./');
  }).catch(function(err) {
    next();
  });
});

/* POST create board post. */
router.post('/:board_id/posts/create', function(req, res, next) {
  Board.findById(req.params.board_id)
    .then(function(board) {
      if (board == null) {
        return Promise.reject(new error('Board is missing...'));
      }
      return Post.create({
        board_id: board.id,
        message: req.body.message
      });
    }).then(function() {
      res.redirect('../');
    }).catch(function(err) {
      next();
    });
});

module.exports = router;