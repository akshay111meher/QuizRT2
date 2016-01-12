var express = require('express');
var router = express.Router();
var mongoose = require( 'mongoose' );
var bodyParser = require('body-parser');
var Category = require("../models/category");



//console.log(router);
var Category = require()

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

module.exports= router;
