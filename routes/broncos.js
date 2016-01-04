//require('dotenv').load();

var express = require( 'express' );
var router = express.Router();

var knex = require( 'knex' )(knexfile);

// get all the broncos
router.get( '/', function( req, res ){
  knex.select().from( 'broncos' )
      .then( function( broncos ){
          res.status( 200 ).send({broncos: broncos});
  });
});

// get one monkey
router.get( '/:id', function( req, res ){
    knex.select().from( 'broncos' )
        .where('id', req.params.id)
        .then(function( broncos ){
            res.status( 200 ).send({broncos: broncos});
    });
});

// create a new monkey
router.post( '/', function( req, res ){
  knex( 'broncos' ).insert({
    name: req.body.name,
    dob: req.body.dob,
    email: req.body.email
  }, 'id' ).then( function( id ){
    req.body.id = id[0];
    res.status( 201 ).send( req.body );
  });
  console.log(req.body);
});

module.exports = router;
