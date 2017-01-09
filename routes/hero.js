var express = require('express');
var mongoose = require('mongoose');
var router = express.Router();
var Hero = require('../models/heroModel.js');

// get all heros
router.get('/', function(req, res){
  console.log('GET route hit');
  Hero.find({}, function(err, result){
    if(err){
      console.log('GET Broke');
      res.sendStatus(500);
    } else {
      console.log('GET Sent');
      res.send(result);
    }
  });
});//end get

// post to create a new hero
router.post('/', function(req, res) {
  console.log('Post route hit: ', req.body);
  var postHero = Hero(req.body);
  postHero.save();
  console.log('PostHero ', postHero);
  res.sendStatus( 200 );
});

module.exports = router;
