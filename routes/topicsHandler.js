var express = require('express');
var router = express.Router();
var mongoose = require( 'mongoose' );
var bodyParser = require('body-parser');
var Category = require("../models/category");



//console.log(router);

 router.route('/categories')

  .get(function(req, res){
    Category.find()
      .populate("categoryTopics")
          .exec(function(err,categories){
            if(err){
                return res.send(err);
              }
            return res.json(categories);
          });
 	});

  router.route('/category/:id')
	//gets specified post



	.get(function(req, res){
		Category.findById(req.params.id)
      .populate("categoryTopics")
        .exec(function(err, category){
      			if(err)
      				return res.send(err);
      			return res.json(category);
		});
	});

module.exports= router;
