var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('privpolicy', { title: 'Our Privacy Policy'});
});

module.exports = router;