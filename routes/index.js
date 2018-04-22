var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Brian Shin' });
});

router.get('/profile',function(req,res,next){
  res.render('profile', {name: "Brian", age: "20", school: "NYU Abu Dhabi", year: "2018"});
});

module.exports = router;
