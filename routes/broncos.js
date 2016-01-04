//require('dotenv').load();

var express = require('express');
var router = express.Router();

var knex = require('knex')({
    client: 'pg',
    connection: 'postgres://elanakopelevich@localhost/broncosdb'
});

// get all the broncos
router.get('/', function(req, res){
  knex.select().from('broncos')
      .then( function(broncos){
          res.status(200).send({broncos: broncos});
  });
});

// get one bronco
router.get('/:id', function(req, res){
    knex.select().from('broncos')
        .where('id', req.params.id)
        .then(function(broncos){
            res.status(200).send({broncos: broncos});
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
