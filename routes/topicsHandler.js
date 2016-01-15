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

  router.route('/topic/:id')


  .get(function(req,res){
    Topic.findById(req.params.id)
     .exec(function(err,topic){
       if(err)
        return res.send(err);
      console.log(req.user);
      return res.json(topic);
    });

  });

module.exports= router;
