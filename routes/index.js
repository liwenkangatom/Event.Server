var express = require('express');
var router = express.Router();
var Event = require('../models').Event
/* GET home page. */
router.get('/addevent', function(req, res, next) {
  let pKey = 0
  let subject = "hello sequelize"
  let Content = "This is the hello to sequelize"
  let DT =new Date()
  var event = req.query.event
  Event.create({pKey, subject, Content , DT})
  .then((result) => {
     res.json({status: result});   
  }).catch((err) => {
     res.json({status: err});
  });
});

module.exports = router;
