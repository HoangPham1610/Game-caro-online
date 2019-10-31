const express = require('express');
const router = express.Router();
const passport = require('passport');
/* GET home page. */
router.post('/find-game', function(req, res, next) {
  res.json(res.locals);
});


module.exports = router;
