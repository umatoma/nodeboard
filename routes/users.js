var express = require('express');
var router = express.Router();
var passport = require('passport');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

/* POST login */
router.post('/login',
  passport.authenticate('local', {
    successRedirect: '/boards',
    failureRedirect: '/'
  })
);

module.exports = router;
