var express = require('express');
var knex = require('../db/knex');
var router = express.Router();

function Players(){
  return knex('broncos');
} //convenience function will return a new query builder

// get all the broncos
router.get('/', function(req, res){
  Players().select()
    .then(function(broncos){
      res.status(200).render('players', {
        title: 'Broncos Players',
        players: players
      });
      //send({broncos: broncos});
  });
});

// get one bronco
router.get('/:id', function(req, res){
  Players().where('id', req.params.id)
    .then(function(broncos){
      res.status(200).render('player', {
        title: player.first_name,
        players: player
      });
    });
});

// create a new bronco
router.post('/', function(req, res){
  knex('broncos').insert({
    first_name: req.body.first_name,
    last: req.body.last_name,
    dob: req.body.dob,
    number: req.body.number
  }, 'id').then( function(id){
    req.body.id = id[0];
    res.status(201).send(req.body);
  });
  console.log(req.body);
});

module.exports = router;
