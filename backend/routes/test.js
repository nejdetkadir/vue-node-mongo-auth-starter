var express = require('express');
var router = express.Router();

/* GET test page. */
router.get('/', function(req, res, next) {
  res.json({
    status: true
  })
});

module.exports = router;